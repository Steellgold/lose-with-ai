import { Sport, Sports } from "@/lib/utils/types/names";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Select, SelectItem, SelectedItems, Textarea, Switch, cn } from "@nextui-org/react";
import dayjs from "dayjs";
import { Sparkles } from "lucide-react";
import { ReactElement, cloneElement } from "react";

export const Generate = (): ReactElement => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return <>
    <Button size="sm" onPress={onOpen}>
      <Sparkles size={16} />
      New
    </Button>
  
    <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">New program</ModalHeader>
              <ModalBody>
                <Input placeholder="Program name" label="Name" variant="bordered" />
                <Select
                  items={Sports}
                  placeholder="Select sports"
                  description={"Icons are not always representative of the selected sport/program"}
                  defaultSelectedKeys={["CYCLING"]}
                  classNames={{
                    trigger: "h-12",
                  }}
                  renderValue={(items: SelectedItems<Sport>) => {
                    if (!items.length) return <>Nothing phone</>;
                      return items.map((item) => (
                        <div className="flex gap-2 items-center">
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
                      <SelectItem key={item.id} value={item.id} textValue={item.name}>
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

                <Textarea placeholder="Program description" label="Description" variant="bordered" />

                <div className="flex flex-col gap-2">
                  <div className="flex gap-1">
                    <Input placeholder="Start date" label="Start date" variant="bordered" type="date" defaultValue={dayjs().format("YYYY-MM-DD")} />
                    <Input placeholder="End date" label="End date" variant="bordered" type="date" />
                  </div>
                  <p className="text-default-400 text-tiny p-1">Leave the end date empty if the program is ongoing</p>
                </div>

                <Switch classNames={{
                  base: cn(
                    "inline-flex flex-row-reverse w-full max-w-md bg-content1 hover:bg-content2 items-center",
                    "justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent"
                  ),
                  wrapper: "p-0 h-4 overflow-visible",
                  thumb: cn("w-6 h-6 border-2 shadow-lg",
                    "group-data-[hover=true]:border-secondary",
                    "group-data-[pressed=true]:w-7",
                    "group-data-[selected]:group-data-[pressed]:ml-4",
                  )
                }} size="sm" color="secondary">
                  <div className="flex flex-col">
                    <p className="text-medium">Public</p>
                    <p className="text-tiny text-default-400">
                      Anyone can see this program and its content (workouts, exercises, etc.)
                    </p>
                  </div>
                </Switch>
              </ModalBody>
              
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="secondary" onPress={onClose}>
                  Create
                </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  </>;
}