import React from "react";
import { useHover } from "@uidotdev/usehooks";
import { ImageTint } from "./img-tint";

type Props = {
  src: string;
  alt: string;
  className: string;
};

const LogoImage = ({ src, alt, className }: Props) => {
  const [ref, hovering] = useHover();

  const color = hovering ? null : "#A5A5A5";
  return (
    <div ref={ref}>
      <ImageTint
        src={src}
        alt={alt}
        className={className}
        color={color}
        height="0"
        width="0"
        sizes="100vw"
        cache
      />
    </div>
  );
};

export default LogoImage;
