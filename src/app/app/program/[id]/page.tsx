import type { ReactElement } from "react";
import { auth } from "@/lib/utils/auth";
import { prisma } from "@/lib/utils/db/prisma";
import { ProgramPage } from "./program";

type Props = {
  params: {
    id: string;
  };
};

const Program = async({ params }: Props): Promise<ReactElement> => {
  const userData = await auth();
  if (!userData) return <>You are not logged in!</>;

  const programData = await prisma.program.findUnique({
    where: {
      id: params.id
    }
  });

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <ProgramPage program={programData} />
  );
};

export default Program;