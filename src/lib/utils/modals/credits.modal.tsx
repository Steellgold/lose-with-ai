/* eslint-disable @typescript-eslint/no-misused-promises */
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Card, cn } from "@nextui-org/react";
import type { Component } from "../component";
import { ArrowRight } from "lucide-react";
// eslint-disable-next-line camelcase
import { Josefin_Sans } from "next/font/google";
import { useRouter } from "next/navigation";
import { z } from "zod";

type Props = {
  isOpen: boolean;
  onOpenChange: () => void;
  onOpen: () => void;
}

const josefin = Josefin_Sans({ subsets: ["latin"] });

export const CreditsModal: Component<Props> = ({ isOpen, onOpenChange }) => {
  const router = useRouter();

  const hrefLink = async({ type }: { type: "10" | "20" }): Promise<void> => {
    const res = await fetch("/api/stripe/gen", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ type })
    });

    const sc = z.object({
      url: z.string()
    }).safeParse(await res.json());

    if (!sc.success) return;

    router.push(sc.data.url);
  };

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
                    <h5 className={cn("text-default-700 font-bold", josefin.className)}>10 credits</h5>
                    <p className="text-default-600 text-sm">The best value pack of credits for only <strong>$2.99</strong></p>
                  </div>

                  <Button color="secondary" variant="solid" isIconOnly onClick={() => hrefLink({ type: "10" })}>
                    <ArrowRight size={18} />
                  </Button>
                </div>

                <hr className="my-3" />

                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h5 className={cn("text-default-700 font-bold", josefin.className)}>20 credits</h5>
                    <p className="text-default-600 text-sm">Even more value for only <strong>$5.99</strong></p>
                  </div>

                  <Button color="secondary" variant="solid" isIconOnly onClick={() => hrefLink({ type: "20" })}>
                    <ArrowRight size={18} />
                  </Button>
                </div>
              </Card>
            </ModalBody>

            <ModalFooter>
              <Button color="secondary" onClick={onClose}>Close</Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};