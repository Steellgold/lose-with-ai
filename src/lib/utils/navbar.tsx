"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link as NLink, Button, NavbarMenuToggle,
  NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Link from "next/link";
import type { ReactElement } from "react";
import { IconPlayFootball, IconPlayBasketball, IconPlayVolleyball, IconSkateboarding, IconYoga, IconWaterpolo, IconWalk,
  IconTrekking, IconTreadmill, IconRun, IconShiJumping } from "@tabler/icons-react";
import { useRef, useState } from "react";
import { useHover } from "usehooks-ts";


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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  const menuItems = ["Features", "Pricing"];

  return (
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
          <Button as={Link} color="secondary" href="/sign-in" variant="flat">
            Get started
          </Button>
        </NavbarItem>
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
  );
};