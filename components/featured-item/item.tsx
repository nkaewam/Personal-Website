"use client";
import React, { ReactElement, useCallback } from "react";
import { useHover } from "@uidotdev/usehooks";
import Link from "next/link";
import GitHub from "@/components/logos/github";
import Medium from "@/components/logos/medium";
import AWS from "@/components/logos/aws";

type Props = {
  source: "GITHUB" | "MEDIUM" | "AWS";
  name: string;
  description: string;
  url: string;
};

const Item = ({ name, url, description, source }: Props) => {
  const [ref, hover] = useHover();
  const props = Object.fromEntries(
    Object.entries({
      fill: hover ? "hsl(--var(primary-foreground))" : undefined,
      showOriginalOnHover: false,
    }).filter(([_, value]) => value !== undefined)
  );

  const getLogo = useCallback(
    (source: Props["source"]): ReactElement => {
      switch (source) {
        case "GITHUB":
          return <GitHub {...props} className="w-auto h-10 md:h-12" />;
        case "MEDIUM":
          return <Medium {...props} className="w-auto h-7 md:h-9" />;
        case "AWS":
          return <AWS {...props} className="w-auto h-7 md:h-9" />;
      }
    },
    [source, hover]
  );

  const logo = getLogo(source);

  return (
    <Link
      href={url}
      ref={ref}
      className="group flex border-border space-x-4 items-center border-[1px] mx-3 h-20 px-6  transition-all text-logo duration-150 hover:bg-primary hover:text-white hover:cursor-pointer md:mx-6 md:h-24 md:px-8"
    >
      {logo}
      <div className="text-xs max-w-[150px] group-hover:text-primary-foreground md:text-sm md:max-w-[250px]">
        <p className="font-bold line-clamp-1 w-full">{name}</p>
        <p className="overflow-ellipsis leading-[1.1] line-clamp-2 w-full">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default Item;
