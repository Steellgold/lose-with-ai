"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link as NLink, Button, NavbarMenuToggle,
  NavbarMenu, NavbarMenuItem, Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem, useDisclosure } from "@nextui-org/react";
import Link from "next/link";
import type { ReactElement } from "react";
import { IconPlayFootball, IconPlayBasketball, IconPlayVolleyball, IconSkateboarding, IconYoga, IconWaterpolo, IconWalk,
  IconTrekking, IconTreadmill, IconRun, IconShiJumping } from "@tabler/icons-react";
import { useRef, useState } from "react";
import { useHover } from "usehooks-ts";
import { createClient } from "./supabase/client";
import { useUser } from "../providers";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Coins, Dumbbell, LogOut, Rows, User } from "lucide-react";
import { CreditsModal } from "./modals/credits.modal";


const random = (): ReactElement => {
  const icons = [<IconPlayFootball key={1} size={24} />, <IconPlayBasketball key={2} size={24} />,
    <IconPlayVolleyball key={3} size={24} />, <IconSkateboarding key={4} size={24} />,
    <IconYoga key={5} size={24} />, <IconWaterpolo key={6} size={24} />,
    <IconWalk key={7} size={24} />, <IconTrekking key={8} size={24} />,
    <IconTreadmill key={9} size={24} />, <IconRun key={10} size={24} />,
    <IconShiJumping key={11} size={24} />];
  return icons[Math.floor(Math.random() * icons.length)];
};

export const SuperMegaCooooolNavbar = (): ReactElement => {
  const supabase = createClient();

  const {isOpen, onOpen, onOpenChange } = useDisclosure();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { user } = useUser();

  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  const menuItems = ["Features", "Pricing"];

  return <>
    <Navbar isBlurred onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" className="flex items-center gap-2">
            <span ref={hoverRef}>{isHover ? random() : random()}</span>
            Lose
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="secondary" href="/auth" variant="flat">
            Get started
          </Button>
        </NavbarItem>

        {user && (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name={user?.email}
                size="sm"
                icon={<User size={24} strokeWidth={1} color="black" />}
              />
            </DropdownTrigger>
            
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{user?.email}</p>
              </DropdownItem>

              <DropdownItem key="generations" endContent={<Dumbbell size={12} />}>My Generations</DropdownItem>
              <DropdownItem key="credits" endContent={<Coins size={12} />} onClick={onOpen}>Credits</DropdownItem>
              <DropdownItem key="logout" color="danger" onClick={() => {
                void supabase.auth.signOut()
                  .then(() => {
                    router.push("/");
                    toast("Logged out successfully!", { icon: <IconPlayFootball size={18} /> });
                  })
                  .catch((error) => toast("Error logging out!", { icon: <IconPlayFootball size={18} />, description: error.message }));
                }} endContent={<LogOut size={12} />}>
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NLink color={ index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"} className="w-full" href="#" size="lg" >
              {item}
            </NLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>

    <CreditsModal isOpen={isOpen} onOpenChange={onOpenChange} onOpen={onOpen} />
  </>;
};