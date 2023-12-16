"use client";

import { useUser } from "@/lib/providers";
import { Button, Card, CardBody, CardHeader, Divider, Input, Link } from "@nextui-org/react";
import { Howl } from "howler";

export const Page = () => {
  const { user } = useUser();
  const generations = 0;

  const playJonMeyers = () => {
    const sound = new Howl({ src: "/jon-meyers.mp3" });
    sound.play();
  }

  return (
    <>
      <div className="mx-auto max-w-[500px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-center text-2xl font-bold">
            <span className="text-secondary-500 cursor-pointer select-none" onClick={playJonMeyers}>
              Let{"'"}s get&nbsp;
            </span>
            started!</h1>
          <p className="text-center text-small">Here{"'"}s a quick overview of your account and generations.</p>
        </div>
      </div>

      <br />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Generations</p>
            <small className="text-default-500">You have {generations} generations.</small>
          </CardHeader>
        </Card>

        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Credits</p>
            <small className="text-default-500">You have 0 credits.</small>
          </CardHeader>
        </Card>

        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Email</p>
            <small className="text-default-500">{user?.email}</small>
          </CardHeader>
        </Card>
      </div>

      <br />
    </>
  );
};

export default Page;