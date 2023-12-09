// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import type { PropsWithChildren, ReactElement } from "react";

export const Providers = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
};