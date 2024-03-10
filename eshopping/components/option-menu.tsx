"use client";

import { Icon } from "@iconify-icon/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function OptionMenu() {
  const navLink = [
    { name: "Home", icon: "material-symbols:home", href: "/" },
    { name: "Cart", icon: "mdi:cart", href: "/cart" },
    { name: "My Shop", icon: "lets-icons:shop", href: "/my-shop" },
  ];

  const pathname = usePathname();

  return (
    <div className="z-40 max-md:fixed max-md:bottom-0 max-md:left-0 max-md:w-full flex items-center justify-center max-md:py-4 max-md:bg-zinc-900">
      <div className="option-menu flex cursor-pointer text-base font-light justify-around w-full max-md:w-8/12 md:*:mr-3 *:flex *:items-center *:justify-center *:max-md:flex-col">
        {navLink.map((link) => {
          const isActive = pathname.endsWith(link.href);

          return (
            <Link
              href={link.href}
              key={link.name}
              className={
                isActive
                  ? "font-bold underline cursor-default"
                  : "hover:underline"
              }
            >
              <Icon
                icon={link.icon}
                className="md:mr-1 text-lg max-md:text-3xl"
              />
              <p className="max-md:text-xs">{link.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
