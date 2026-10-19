// ==============================================================================
// innerescapes.com // Cloudflare Pages Edge Function: Secure Delivery Vault
// Path: /api/vault/secure-download
// Validates claim tokens & generates on-demand single-use signed URLs
// ==============================================================================

interface Env {
  NEXT_PUBLIC_SUPABASE_URL?: string;
  SUPABASE_SERVICE_ROLE_KEY?: string;
  DIGITAL_PRODUCTS_BUCKET?: string;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const url = new URL(request.url);
  const token = url.searchParams.get("token");

  if (!token) {
    return new Response(JSON.stringify({ error: "Missing claim token" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const supabaseUrl =
    env.NEXT_PUBLIC_SUPABASE_URL || "https://xzwacojnaiohlomiutvc.supabase.co";
  const serviceKey = env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceKey) {
    return new Response(JSON.stringify({ error: "Vault credentials missing" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const headers = {
    apikey: serviceKey,
    Authorization: `Bearer ${serviceKey}`,
    "Content-Type": "application/json",
  };

  try {
    // 1. Fetch Entitlement Record from Supabase REST API
    const entitlementRes = await fetch(
      `${supabaseUrl}/rest/v1/download_entitlements?token=eq.${encodeURIComponent(token)}&select=*`,
      { headers }
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const entitlements: any[] = await entitlementRes.json();
    const record = entitlements && entitlements.length > 0 ? entitlements[0] : null;

    if (!record) {
      return new Response(
        JSON.stringify({ error: "Invalid or revoked download token" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // 2. Validate Expiry & Max Downloads
    const isExpired = new Date(record.expires_at) < new Date();
    const currentDownloads = record.download_count || 0;
    const maxDownloads = record.max_downloads || 5;

    if (isExpired || currentDownloads >= maxDownloads) {
      return new Response(
        JSON.stringify({
          error: "Download link has expired or reached the maximum download limit (5/5). Contact support@weselldigital.com for a reset.",
        }),
        {
          status: 410,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // 3. Generate 60-second Signed URL from Supabase Storage API
    const candidateBuckets = [
      record.storage_bucket,
      env.DIGITAL_PRODUCTS_BUCKET,
      "digital-vault",
      "digital-products",
    ].filter(Boolean) as string[];

    let signedUrl: string | null = null;
    let successfulBucket = "";

    const cleanPath = (record.storage_path || "")
      .replace(/^digital-vault\//, "")
      .replace(/^digital-products\//, "");

    for (const b of candidateBuckets) {
      if (signedUrl) break;
      try {
        const signEndpoint = `${supabaseUrl}/storage/v1/object/sign/${b}/${cleanPath}`;
        const signRes = await fetch(signEndpoint, {
          method: "POST",
          headers,
          body: JSON.stringify({ expiresIn: 60 }),
        });

        if (signRes.ok) {
          const signData = (await signRes.json()) as { signedURL?: string };
          if (signData.signedURL) {
            signedUrl = signData.signedURL;
            successfulBucket = b;
            break;
          }
        }
      } catch (err) {
        console.warn(`[Vault Edge] Failed sign attempt on bucket ${b}:`, err);
      }
    }

    if (!signedUrl) {
      return new Response(
        JSON.stringify({ error: "Failed to generate delivery link from vault" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // 4. Increment download count (fire-and-forget or awaited)
    try {
      await fetch(`${supabaseUrl}/rest/v1/download_entitlements?id=eq.${record.id}`, {
        method: "PATCH",
        headers: { ...headers, Prefer: "return=minimal" },
        body: JSON.stringify({ download_count: currentDownloads + 1 }),
      });
    } catch (err) {
      console.warn("[Vault Edge] Counter increment error:", err);
    }

    // 5. 302 Redirect directly to secure Supabase storage signed endpoint
    const downloadRedirectUrl = `${supabaseUrl}/storage/v1${signedUrl}`;
    return Response.redirect(downloadRedirectUrl, 302);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Internal Vault Error";
    return new Response(JSON.stringify({ error: "Internal Vault Error", details: msg }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
