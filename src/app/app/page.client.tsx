/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useUser } from "@/lib/providers";
import { Card, CardHeader, cn } from "@nextui-org/react";
import { Howl } from "howler";
import Image from "next/image";
import type { ReactElement } from "react";
import { useRef } from "react";
import { useHover } from "usehooks-ts";
import { Generate } from "./generate";
import { useGetPrograms } from "@/lib/actions/progs";
import { PageLoadingLayout } from "./page.loading";
import { useGetUser } from "@/lib/actions/user";
import { ProgramsTable } from "./programs-table";

type Position = "TOP" | "RIGHT" | "BOTTOM" | "LEFT";

const classWithRotate = (rotate: number, isHovered: boolean, pos: Position): string => cn("absolute", {
  "transition duration-500 ease-in-out transform hover:translate-y-1 right-12": isHovered,
  "rotate-90": rotate === 90,
  "rotate-180": rotate === 180,
  "rotate-270": rotate === 270,
  "hidden": !isHovered,
  "bottom-0 right-0": pos === "RIGHT",
  "top-0 right-0": pos === "TOP",
  "top-0 left-0": pos === "LEFT",
  "bottom-0 left-0": pos === "BOTTOM"
});

export const GenerationsPage = (): ReactElement => {
  const { user } = useUser();
  if (!user) return <PageLoadingLayout />;

  const userData = useGetUser(user.id);
  if (!userData) return <PageLoadingLayout />;

  const sound = new Howl({ src: "/jon-meyers.mp3", volume: 10 });
  const hoverRef = useRef(null);
  const isHovered = useHover(hoverRef);

  const programs = useGetPrograms(user.id);
  if (!programs) return <PageLoadingLayout />;

  const playJonMeyers = (): void => {
    console.log("play");
    sound.play();
  };

  return (
    <>
      <Image alt="Jon Meyers" src="/jon-meyers.png" width={150} height={100} className={classWithRotate(90, isHovered, "TOP")} />
      <Image alt="Jon Meyers" src="/jon-meyers.png" width={350} height={100} className={classWithRotate(90, isHovered, "RIGHT")} />
      <Image alt="Jon Meyers" src="/jon-meyers.png" width={150} height={100} className={classWithRotate(180, isHovered, "BOTTOM")} />
      <Image alt="Jon Meyers" src="/jon-meyers.png" width={350} height={100} className={classWithRotate(270, isHovered, "LEFT")} />

      <h1 className={cn("text-6xl font-bold text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2", {
        "transition duration-500 ease-in-out transform hover:-translate-y-1 -rotate-45 scale-150": isHovered,
        "hidden": !isHovered
      })}>
        Let{"'"}s get into it
        <span className="text-secondary-500 text-2xl block">
          Don{"'"}t be afraid it won{"'"}t stay like this forever, on the other hand {"\""}Let{"'"}s get into it{"\""} will stay in your head forever
        </span>
      </h1>

      <div className="mx-auto max-w-[500px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-center text-2xl font-bold">
            <span className="text-secondary-500 cursor-pointer select-none" onClick={playJonMeyers} onContextMenu={(e) => {
              e.preventDefault();
              playJonMeyers();
            }} onMouseEnter={playJonMeyers} ref={hoverRef}>
              Let{"'"}s get&nbsp;
            </span>
            started!</h1>
          <p className="text-center text-small">Start <strong>now</strong> to generate your sports programs to lose weight!</p>
        </div>
      </div>

      <br />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <div className="flex flex-row items-center justify-between w-full">
              <div>
                <p className="text-tiny uppercase font-bold">Generations</p>
                <small className="text-default-500">You have {programs.data?.length ?? 0} generations.</small>
              </div>

              <Generate />
            </div>
          </CardHeader>
        </Card>

        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Credits</p>
            <small className="text-default-500">You have {userData?.data?.credit ?? 0} credits.</small>
          </CardHeader>
        </Card>

        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Your preffered sport</p>
            <small className="text-default-500">Muscle building</small>
          </CardHeader>
        </Card>
      </div>

      <br />

      <div className="max-w-full">
        <ProgramsTable programs={programs.data} />
      </div>
    </>
  );
};

export default GenerationsPage;