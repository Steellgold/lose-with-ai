import type { ReactElement } from "react";
import { HydrationBoundary } from "@/lib/providers";
import { GenerationsPage } from "./page.client";
import { auth } from "@/lib/utils/auth";
import { getProgramsQuery } from "@/lib/actions/progs";

const Home = async(): Promise<ReactElement> => {
  const userData = await auth();
  if (!userData) return <>You are not logged in!</>;

  return (
    <HydrationBoundary queries={[getProgramsQuery(userData.id)]}>
      <GenerationsPage />
    </HydrationBoundary>
  );
};

export default Home;