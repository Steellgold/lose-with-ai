import type { ReactElement } from "react";
import { GenerationsPage } from "./page.client";
import { auth } from "@/lib/utils/auth";
import { getProgramsQuery } from "@/lib/actions/progs";
import { HydrationBoundary } from "@/lib/providers";
import { getUserQuery } from "@/lib/actions/user";

const AppHome = async(): Promise<ReactElement> => {
  const userData = await auth();
  if (!userData) return <>You are not logged in!</>;

  return (
    <HydrationBoundary queries={[getProgramsQuery(userData.id), getUserQuery(userData.id)]}>
      <GenerationsPage />
    </HydrationBoundary>
  );
};

export default AppHome;