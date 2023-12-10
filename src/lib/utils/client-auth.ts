import type { User as UserResponse } from "@supabase/supabase-js";
import { createClient } from "./supabase/client";
import { redirect } from "next/navigation";
import { env } from "../env.mjs";

export const cauth = async(): Promise<UserResponse | boolean> => {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) throw redirect(env.NEXT_PUBLIC_APP_URL + "/auth");

  return user;
};