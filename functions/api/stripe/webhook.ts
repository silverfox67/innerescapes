// ==============================================================================
// innerescapes.com // Cloudflare Pages Edge Function: Stripe Webhook & Vault Token Provisioning
// Path: /api/stripe/webhook
// Runs on Cloudflare's global edge network
// ==============================================================================

interface Env {
  STRIPE_SECRET_KEY?: string;
  STRIPE_WEBHOOK_SECRET?: string;
  NEXT_PUBLIC_SUPABASE_URL?: string;
  SUPABASE_SERVICE_ROLE_KEY?: string;
  BREVO_API_KEY?: string;
  BREVO_SENDER_EMAIL?: string;
  BREVO_SENDER_NAME?: string;
  BREVO_BUYER_TAG?: string;
  DIGITAL_PRODUCTS_BUCKET?: string;
  SPOKE_DOMAIN?: string;
  PRODUCT_SLUG?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const bodyText = await request.text();

  if (!bodyText) {
    return new Response(JSON.stringify({ error: "Empty request payload" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let event: any;
  try {
    event = JSON.parse(bodyText);
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const email = session.customer_details?.email || session.customer_email;
    const customerName = session.customer_details?.name || "Member";
    const stripeSessionId = session.id;

    if (!email) {
      console.error("[Webhook Edge] Missing customer email for session:", stripeSessionId);
      return new Response(JSON.stringify({ error: "Missing customer email" }), { status: 400 });
    }

    const supabaseUrl =
      env.NEXT_PUBLIC_SUPABASE_URL || "https://xzwacojnaiohlomiutvc.supabase.co";
    const serviceKey = env.SUPABASE_SERVICE_ROLE_KEY;
    const spokeDomain = env.SPOKE_DOMAIN || "innerescapes.com";
    const productSlug =
      session.metadata?.product_slug ||
      session.metadata?.product_id ||
      env.PRODUCT_SLUG ||
      "innerescapes-core";
    const amountCents = session.amount_total || 2900;
    const productTitle =
      "The Complete Neuro-Habit Architecture & Dopamine Reset System";

    if (!serviceKey) {
      console.error("[Webhook Edge] Missing SUPABASE_SERVICE_ROLE_KEY in environment");
      return new Response(JSON.stringify({ error: "Missing service role credentials" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const headers = {
      apikey: serviceKey,
      Authorization: `Bearer ${serviceKey}`,
      "Content-Type": "application/json",
    };

    // 1. Generate cryptographically strong claim token (64 chars)
    const token =
      crypto.randomUUID().replace(/-/g, "") +
      crypto.randomUUID().replace(/-/g, "");

    // 2. Insert into public.orders with safe digital fallbacks
    let orderId: number | null = null;
    try {
      const orderRes = await fetch(`${supabaseUrl}/rest/v1/orders`, {
        method: "POST",
        headers: {
          ...headers,
          Prefer: "return=representation",
        },
        body: JSON.stringify({
          stripe_session_id: stripeSessionId,
          stripe_payment_intent:
            typeof session.payment_intent === "string"
              ? session.payment_intent
              : session.payment_intent?.id || null,
          customer_email: email,
          customer_name: customerName,
          product_slug: productSlug,
          spoke_domain: spokeDomain,
          amount_cents: amountCents,
          shipping_address: "Digital Delivery - N/A",
          items: JSON.stringify([{ slug: productSlug, title: productTitle, amount_cents: amountCents }]),
          status: "completed",
          brevo_status: "pending",
        }),
      });

      if (orderRes.ok) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const orderData: any[] = await orderRes.json();
        orderId = orderData?.[0]?.id || null;
      }
    } catch (err) {
      console.warn("[Webhook Edge] Order insert error:", err);
    }

    // 3. Insert Entitlement Record into public.download_entitlements
    try {
      await fetch(`${supabaseUrl}/rest/v1/download_entitlements`, {
        method: "POST",
        headers: {
          ...headers,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          order_id: orderId,
          stripe_session_id: stripeSessionId,
          spoke_id: "innerescapes",
          token: token,
          storage_path: "innerescapes/inner-escapes-core-v1.zip",
          max_downloads: 5,
        }),
      });
    } catch (err) {
      console.warn("[Webhook Edge] Entitlement insert error:", err);
    }

    // 4. Dispatch Transactional Fulfillment Email via Brevo REST API
    const claimUrl = `https://${spokeDomain}/api/vault/secure-download?token=${token}`;
    const brevoApiKey = env.BREVO_API_KEY;
    const senderEmail = env.BREVO_SENDER_EMAIL || "support@weselldigital.com";
    const senderName = env.BREVO_SENDER_NAME || "InnerEscapes Vault Support";
    const brevoTag = env.BREVO_BUYER_TAG || "innerescapes-buyer";

    const htmlContent = `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background-color:#070A0F;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#D1D5DB;">
  <div style="max-width:560px;margin:30px auto;background:#0B0F17;border:1px solid #1F2B40;border-radius:16px;padding:36px;box-shadow:0 8px 30px rgba(0,0,0,0.5);">
    <div style="font-size:12px;color:#38BDF8;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:12px;">
      ⚡ ${spokeDomain} // SECURE VAULT CLAIM
    </div>
    <h1 style="color:#F9FAFB;font-size:24px;margin:0 0 16px 0;font-weight:700;line-height:1.3;">Your Neuro-Habit Vault Access is Ready</h1>
    <p style="color:#9CA3AF;font-size:15px;line-height:1.6;">Hi ${customerName},</p>
    <p style="color:#9CA3AF;font-size:15px;line-height:1.6;">Your order for <strong>${productTitle}</strong> has been secured in the delivery vault. Click below to generate your single-use signed package:</p>
    <div style="text-align:center;margin:30px 0;">
      <a href="${claimUrl}" style="background:#0EA5E9;color:#070A0F;font-weight:800;text-decoration:none;padding:16px 36px;border-radius:10px;display:inline-block;font-size:15px;box-shadow:0 4px 20px rgba(14,165,233,0.35);">
        Unlock Digital Package &rarr;
      </a>
    </div>
    <div style="background:#101622;border:1px solid #1F2B40;border-radius:10px;padding:16px;margin:24px 0;font-size:12px;color:#94A3B8;line-height:1.6;">
      🔒 <strong>Vault Security Protocol:</strong> This claim token unlocks on-demand 60-second single-use download links. You have 5 authorized downloads before the token locks.
    </div>
    <div style="border-top:1px solid #1F2B40;padding-top:18px;margin-top:28px;font-size:12px;color:#64748B;">
      &copy; 2026 ${spokeDomain} &bull; All rights reserved.<br/>
      Billing and technical fulfillment provided by Trident Website Design.
    </div>
  </div>
</body>
</html>`;

    try {
      await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "api-key": brevoApiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sender: { name: senderName, email: senderEmail },
          to: [{ email, name: customerName }],
          subject: `Vault Access: ${productTitle} [${spokeDomain}]`,
          htmlContent,
        }),
      });

      // Tag contact in Brevo
      await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "api-key": brevoApiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          attributes: {
            SPOKE_TAG: brevoTag,
            LAST_SPOKE: spokeDomain,
          },
          updateEnabled: true,
        }),
      });
    } catch (err) {
      console.warn("[Webhook Edge] Brevo dispatch error:", err);
    }

    return new Response(
      JSON.stringify({
        received: true,
        order_id: stripeSessionId,
        claim_token: token,
        status: "vault_entitled",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }

  return new Response(JSON.stringify({ received: true, event_type: event.type }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
