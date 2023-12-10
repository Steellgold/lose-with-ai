"use client";

import { Card, CardBody, Tab, Tabs, cn } from "@nextui-org/react";
import { useState, type ReactElement } from "react";
import { RegisterTab } from "./lib/register";
import { LoginTab } from "./lib/login";

export const Page = (): ReactElement => {
  const [selected, setSelected] = useState<string>("sign-in");

  return (
    <div className="mx-auto max-w-[500px]">
      <Card className={cn("max-w-full w-[500px]", {
        "h-[500px]": selected === "sign-up",
        "h-[400px]": selected === "sign-in"
      })}>
        <CardBody className="overflow-hidden">
          <Tabs fullWidth size="md" aria-label="Tabs form" selectedKey={selected} onSelectionChange={(key) => setSelected(key)}>
            <Tab key="sign-in" title="Login">
              <LoginTab setSelected={setSelected} />
            </Tab>

            <Tab key="sign-up" title="Sign up">
              <RegisterTab setSelected={setSelected} />
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
};

export default Page;