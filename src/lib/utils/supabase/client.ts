import { env } from "@/lib/env.mjs";
import { createBrowserClient } from "@supabase/ssr";

export const createClient = (): ReturnType<typeof createBrowserClient> => createBrowserClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);