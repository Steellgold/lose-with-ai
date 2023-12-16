import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createClient } from "@/lib/utils/supabase/server";
import { prisma } from "@/lib/utils/db/prisma";
import { getAMail, getAName } from "@/lib/utils/user-utils";

export const GET = async(request: NextRequest): Promise<NextResponse> => {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    const supabase = createClient(cookies());
    await supabase.auth.exchangeCodeForSession(code);

    const u = await supabase.auth.getUser();

    const user = await prisma.user.findUnique({ where: { email: u.data.user?.email } });
    if (!user) {
      await prisma.user.create({
        data: {
          id: u.data.user?.id,
          email: getAMail(u.data.user),
          credit: 2,
          name: getAName(u.data.user)
        },
      });
    }
  }

  return NextResponse.redirect(requestUrl.origin);
};