-- ==============================================================================
-- innerescapes.com // Database Migration: Secure Delivery Vault & Entitlements
-- Instance: xzwacojnaiohlomiutvc.supabase.co
-- ==============================================================================

-- 1. Ensure private digital-vault bucket exists
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'digital-vault',
  'digital-vault',
  false,
  52428800, -- 50MB
  ARRAY['application/zip', 'application/pdf', 'application/octet-stream']
)
ON CONFLICT (id) DO NOTHING;

-- 2. Digital Entitlements table mapped to existing bigint orders.id
CREATE TABLE IF NOT EXISTS public.download_entitlements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id bigint REFERENCES public.orders(id) ON DELETE CASCADE,
  stripe_session_id text NOT NULL,
  spoke_id text NOT NULL DEFAULT 'innerescapes',
  token text UNIQUE NOT NULL,
  storage_path text NOT NULL DEFAULT 'innerescapes/inner-escapes-core-v1.zip',
  max_downloads integer DEFAULT 5,
  download_count integer DEFAULT 0,
  expires_at timestamptz NOT NULL DEFAULT (now() + interval '48 hours'),
  created_at timestamptz DEFAULT now()
);

-- Indices for rapid lookup at the Edge
CREATE INDEX IF NOT EXISTS idx_entitlements_token ON public.download_entitlements(token);
CREATE INDEX IF NOT EXISTS idx_entitlements_session ON public.download_entitlements(stripe_session_id);

-- 3. Row Level Security
ALTER TABLE public.download_entitlements ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Service role full access on entitlements" ON public.download_entitlements;
CREATE POLICY "Service role full access on entitlements"
  ON public.download_entitlements
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
