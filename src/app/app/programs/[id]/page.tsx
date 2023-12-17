"use client";

import { useGetProgram } from "@/lib/actions/progs";
import { useUser } from "@/lib/providers";
import type { ReactElement } from "react";

type Props = {
  params: {
    id: string;
  };
};

export const ProgramPage = ({ params }: Props): ReactElement => {
  const { user } = useUser();
  const program = useGetProgram(params.id);
  if (!user) return <>You are not logged in!</>;
  if (!program.data) return <>This program does not exist!</>;

  console.log(program.data?.userId, user.id);

  if (program.data?.userId !== user.id) {
    return <>You do not have access to this program!</>;
  }

  return (
    <>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:px-12">
        <h3 className="text-4xl mb-2 font-extrabold tracking-tight leading-none text-gray-950 md:text-5xl lg:text-6xl">
          {program.data?.name}
        </h3>
      </div>

      <div className="mx-auto max-w-[600px]">
      </div>
    </>
  );
};

export default ProgramPage;