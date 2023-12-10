import Image from "next/image";
import type { ReactElement } from "react";

export const Logo = (): ReactElement => {
  return <Image src="/assets/logo.png" width={32} height={32} alt="Logo" />;
};