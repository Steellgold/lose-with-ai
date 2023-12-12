import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, DropdownItem, Card, CardHeader, Divider, Input, Badge, cn } from "@nextui-org/react";
import { Component } from "../component";
import { ArrowRight } from "lucide-react";
import { Josefin_Sans } from "next/font/google";

type Props = {
  isOpen: boolean
  onOpenChange: () => void
  onOpen: () => void
}

const josefin = Josefin_Sans({ subsets: ["latin"] });

export const CreditsModal: Component<Props> = ({ isOpen, onOpenChange, onOpen }) => {
  return (
    <Modal backdrop={"blur"} isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Need more credits?</ModalHeader>
            <ModalBody>
              <Card radius="none" className="p-3">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h5 className={cn("text-default-700 font-bold", josefin.className)}>100 credits</h5>
                    <p className="text-default-600 text-sm">The best value pack of credits for only <strong>€4.99</strong></p>
                  </div>

                  <Button color="secondary" variant="solid" isIconOnly>
                    <ArrowRight size={18} />
                  </Button>
                </div>
              </Card>
            </ModalBody>

            <ModalFooter>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
