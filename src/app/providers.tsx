// app/providers.tsx
"use client";

import { UserProvider } from "@/lib/providers";
import { NextUIProvider } from "@nextui-org/react";
import type { PropsWithChildren, ReactElement } from "react";
import { Toaster } from "sonner";

export const Providers = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <NextUIProvider>
      <UserProvider>
        <Toaster />
        {children}
      </UserProvider>
    </NextUIProvider>
  );
};