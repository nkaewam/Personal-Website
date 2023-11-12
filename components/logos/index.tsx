import { SVGProps } from "react";

export type SVGHoverableLogoElement = React.FC<
  SVGProps<SVGSVGElement> & {
    showOriginalOnHover?: boolean;
  }
>;
