import { Card, Skeleton } from "@nextui-org/react";
import type { ReactElement } from "react";

export const PageLoadingLayout = (): ReactElement => {
  return (
    <div className="mx-auto">
      <div className="flex flex-col gap-2">
        <div className="justify-center items-center flex flex-col gap-2">
          <Skeleton className="rounded-lg w-96">
            <div className="h-11 rounded-lg bg-default-300" />
          </Skeleton>

          <Skeleton className="rounded-lg w-6/12">
            <div className="h-2 rounded-lg bg-default-300" />
          </Skeleton>
        </div>
      </div>

      <br />

      <div className="flex flex-row justify-center items-center gap-3">
        <Card className="w-60">
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300" />
          </Skeleton>
        </Card>

        <Card className="w-60">
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300" />
          </Skeleton>
        </Card>

        <Card className="w-60">
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300" />
          </Skeleton>
        </Card>
      </div>
    </div>
  );
};