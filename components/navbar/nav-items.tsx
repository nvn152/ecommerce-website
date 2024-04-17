"use client";

import { PRODUCTS_CATEGORIES } from "@/config";
import { useEffect, useRef, useState } from "react";
import { NavItemsCategory } from "./nav-item-category";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

export const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>();

  const navRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(navRef, () => setActiveIndex(null));

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };

    document.addEventListener("keydown", handler);

    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <div ref={navRef} className="flex gap-4 h-full ">
      {PRODUCTS_CATEGORIES.map((item, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };

        const isOpen = activeIndex === i;

        return (
          <NavItemsCategory
            isAnyOpen={activeIndex !== null}
            category={item}
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={i}
          />
        );
      })}
    </div>
  );
};
