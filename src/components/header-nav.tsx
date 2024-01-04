"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function HeaderNav() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path.split("?")[0];

  const navs = [
    {
      href: "/",
      label: "home",
    },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-4">
        {navs.map((nav) => (
          <NavigationMenuItem key={nav.href}>
            <Link
              href={nav.href}
              className={cn(isActive(nav.href) && "underline")}
            >
              {nav.label}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
