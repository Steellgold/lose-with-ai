import type { User } from "@prisma/client";
import { createClient as createServerClient } from "./supabase/server";
import { cookies } from "next/headers";
import { prisma } from "./db/prisma";
import { redirect } from "next/navigation";
import { env } from "../env.mjs";

export const auth = async(): Promise<User | false> => {
  const supabase = createServerClient(cookies());
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return false;
  const userData = await prisma.user.findUnique({ where: { id: user.id } });
  if (!userData) return false;
  return userData;
};