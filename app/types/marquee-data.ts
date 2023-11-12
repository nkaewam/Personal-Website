import Item from "@/components/featured-item/item";
import { ComponentProps } from "react";

export type MarqueeData = {
  name: string;
  url: string;
  description: string;
  source: ComponentProps<typeof Item>["source"];
};
