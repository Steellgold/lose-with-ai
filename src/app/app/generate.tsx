import { createProgramMutation } from "@/lib/actions/progs";
import { useUser } from "@/lib/providers";
import { readStream } from "@/lib/utils/stream";
import type { Sport } from "@/lib/utils/types/names";
import { Sports } from "@/lib/utils/types/names";
import type { SelectedItems } from "@nextui-org/react";
import { Textarea, Switch, cn, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure,
  Input, Select, SelectItem, Avatar, Spinner, Badge } from "@nextui-org/react";
import { Sparkles } from "lucide-react";
import type { ReactElement } from "react";
import { cloneElement, useState } from "react";

const generateCode = (): string => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < 5; i++) result += chars.charAt(Math.floor(Math.random() * chars.length));
  return result;
};

export const Generate = (): ReactElement => {
  const { user } = useUser();
  const create = createProgramMutation();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isReady, setIsReady] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState<string | null>(null);
  const [isPublic, setIsPublic] = useState(false);
  const [language, setLanguage] = useState<"us" | "fr">("us");
  const [sport, setSport] = useState<number>(0);

  const [_, setResult] = useState("");

  return <>
    <Button size="sm" onPress={onOpen}>
      <Sparkles size={16} />
      New
    </Button>

    <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {isGenerating && "Generating program..." || "New program"}
            </ModalHeader>

            {!isReady && <ModalBody className="relative">
              {isGenerating && <Spinner color="secondary"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" size="lg" />}

              <Input
                placeholder="Program name" label="Name" variant="bordered" disabled={isGenerating} isDisabled={isGenerating}
                onChange={(e) => setName(e.target.value)}
                value={name}
              />

              <Select
                items={Sports}
                placeholder="Select sports"
                description={"Icons are not always representative of the selected sport/program"}
                defaultSelectedKeys={["CYCLING"]}
                disabled={isGenerating}
                isDisabled={isGenerating}
                classNames={{
                  trigger: "h-12"
                }}
                renderValue={(items: SelectedItems<Sport>) => {
                  if (!items.length) return <>Nothing phone</>;
                  return items.map((item) => (
                    <div className="flex gap-2 items-center" key={item.key}>
                      <div className="flex items-center justify-center w-7 h-7 text-white bg-secondary-800 rounded-full p-1.5">
                        {item.data?.icon && cloneElement(item.data?.icon, { className: "w-4 h-4" })}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-small">{item.data?.name}</span>
                        <span className="text-tiny text-default-600">{item.data?.description}</span>
                      </div>
                    </div>
                  ));
                }
                }>
                {(item: Sport) => (
                  <SelectItem
                    key={item.id} value={item.id} textValue={item.name}
                    onClick={() => setSport(Sports.findIndex((sport) => sport.id === item.id))}>
                    <div className="flex gap-2 items-center">
                      <div className="flex items-center justify-center w-7 h-7 text-white bg-secondary-800 rounded-full p-1.5">
                        {cloneElement(item.icon, { className: "w-4 h-4" })}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-small">{item.name}</span>
                        <span className="text-tiny text-default-600">{item.description}</span>
                      </div>
                    </div>
                  </SelectItem>
                )}
              </Select>

              <Select
                label="Select output language"
                placeholder="Select language"
                defaultSelectedKeys={["us"]}
                required
                disabled={isGenerating}
                isDisabled={isGenerating}
              >
                <SelectItem key="us" startContent={<Avatar alt="English" className="w-6 h-6" src="https://flagcdn.com/us.svg" />} onClick={() => {
                  console.log("us");
                  setLanguage("us");
                }}>
                  English
                </SelectItem>

                <SelectItem key="fr" startContent={<Avatar alt="Français" className="w-6 h-6" src="https://flagcdn.com/fr.svg" />} onClick={() => {
                  console.log("fr");
                  setLanguage("fr");
                }}>
                  Français
                </SelectItem>
              </Select>

              <Textarea
                placeholder="Help the AI understand what type of program you want to generate by giving it a description of what you want to do."
                label="Description" variant="bordered"
                disabled={isGenerating} isDisabled={isGenerating}
                onChange={(e) => setDescription(e.target.value)} />

              {/* <div className="flex flex-col gap-2">
                <div className="flex gap-1">
                  <Input
                    placeholder="Start date" label="Start date" variant="bordered" type="date" defaultValue={dayjs().format("YYYY-MM-DD")}
                    disabled={isGenerating} isDisabled={isGenerating}
                    onChange={(e) => setStartDate(dayjs(e.target.value).toDate())}
                  />

                  <Input placeholder="End date" label="End date" variant="bordered" type="date"
                    disabled={isGenerating} isDisabled={isGenerating}
                    onChange={(e) => setEndDate(dayjs(e.target.value).toDate())}
                  />
                </div>
                <p className="text-default-400 text-tiny p-1">Leave dates empty to generate a program without a start and end date, you can however
                  set a start date and leave the end date empty to generate a program that will start now and end when you want.</p>
              </div> */}

              <Badge color="secondary" content="Soon" placement="top-right">
                <Switch classNames={{
                  base: cn(
                    "inline-flex flex-row-reverse w-full max-w-md bg-content1 hover:bg-content2 items-center",
                    "justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent"
                  ),
                  wrapper: "p-0 h-4 overflow-visible",
                  thumb: cn("w-6 h-6 border-2 shadow-lg",
                    "group-data-[hover=true]:border-secondary",
                    "group-data-[pressed=true]:w-7",
                    "group-data-[selected]:group-data-[pressed]:ml-4",)
                }} size="sm" color="secondary" disabled isDisabled isSelected={isPublic} onValueChange={setIsPublic}>
                  <div className="flex flex-col">
                    <p className="text-medium">Public</p>
                    <p className="text-tiny text-default-400">Anyone can see this program and its content (workouts, exercises, etc.)Ba</p>
                  </div>
                </Switch>
              </Badge>
            </ModalBody>}

            {isReady && <ModalBody>
            </ModalBody>}

            <ModalFooter>
              {!isGenerating && <Button onClick={() => {
                setIsReady(false);
                setIsGenerating(false);
                setName("");
                setDescription("");
                setIsPublic(false);
                setLanguage("us");
                setSport(0);
                setResult("");
                onClose();
              }} variant="light" color="danger">
                Close
              </Button>}

              {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
              {!isReady && <Button color="secondary" onPress={async() => {
                setIsGenerating(true);
                console.log({ name, description, isPublic, language, sport });
                console.log(Sports.length);

                setResult(JSON.stringify({
                  name,
                  description,
                  isPublic,
                  language,
                  sport
                }));

                const res = await fetch("/api/generate", {
                  method: "POST",
                  body: JSON.stringify({
                    description,
                    language,
                    sport
                  })
                });

                let result = "";
                await readStream(res.body as ReadableStream, (chunk) => {
                  result += chunk;
                  setResult(result);
                }).finally(() => {
                  setIsGenerating(false);
                  setIsReady(true);

                  setIsCreating(true);
                  create.mutate({
                    name,
                    description,
                    isPublic,
                    type: Sports[sport].id,
                    data: result,
                    linkAccessTo: generateCode(),
                    user: {
                      connect: {
                        id: user?.id
                      }
                    }
                  }, {
                    onSuccess: (data) => {
                      console.log(data);
                      setIsCreating(false);
                    },
                    onError: (error) => {
                      console.log(error);
                      setIsCreating(false);
                    }
                  });
                });
              }} disabled={
                isGenerating
                || !name
                || name.length < 3
                || !description
                || description.length < 10
                || !language
                || !sport
              } isDisabled={
                isGenerating
                || !name
                || name.length < 3
                || !description
                || description.length < 10
                || !language
                || !sport
              } isLoading={isGenerating}>
                Create
              </Button>}

              {isReady && <Button
                color="secondary" as="a" href="/g/test"
                startContent={Sports[sport].icon}
                isLoading={isCreating} disabled={isCreating} isDisabled={isCreating}>
                View
              </Button>}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  </>;
};