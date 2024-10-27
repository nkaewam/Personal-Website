import React from "react";
import Link from "next/link";
import LinkedIn from "./logos/linkedin";
import GitHub from "./logos/github";
import Medium from "./logos/medium";

type Props = {};

const Links = (props: Props) => {
  return (
    <div className="flex space-x-4 items-center">
      <Link
        href="https://www.linkedin.com/in/nonthapat-k-54605b118/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedIn className="w-auto h-5" />
      </Link>
      <Link
        href="https://github.com/nkaewam"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub className="w-auto h-5" />
      </Link>
      <Link
        href="https://medium.com/@tontan2545"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Medium className="w-auto h-5" />
      </Link>
    </div>
  );
};

export default Links;
