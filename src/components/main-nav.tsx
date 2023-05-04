"use client";

import * as React from "react";
import Link from "next/link";

export function MainNav({ items }: any) {
  return (
    <div>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item: any, index: number) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm text-foreground"
              }
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
