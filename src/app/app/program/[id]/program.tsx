/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client";

import { Card, CardHeader, Divider } from "@nextui-org/react";
import type { Program } from "@prisma/client";
import { Timer } from "lucide-react";
import type { ReactElement } from "react";

type Props = {
  program: Program;
};

export const ProgramPage = ({ program }: Props): ReactElement => {
  if (!program.data) return <>This program does not exist!</>;

  return (
    <>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:px-12">
        <h3 className="text-4xl mb-2 font-extrabold tracking-tight leading-none text-gray-950 md:text-5xl lg:text-6xl">
          {program.name}
        </h3>
      </div>

      <div className="mx-auto max-w-[600px]">
        <div className="flex flex-col gap-2">
          {JSON.parse(program.data?.toString() ?? "{}").map((p: { title: string; description: string; duration: number }) => (
            <Card key={p.title} className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h1 className="text-2xl font-bold">{p.title}</h1>
                <p>{p.description}</p>

                <Divider className="my-2" />

                <div className="flex flex-row items-center justify-between w-full">
                  <div>
                    <Timer className="inline-block" size={18} />
                    <span className="text-default-500 text-sm"> {(p.duration / 60)} minute{(p.duration ?? 60 / 60) === 1 ? "" : "s"}</span>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};