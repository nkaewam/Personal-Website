import React from "react";
import AWS from "./logos/aws";
import SCB10X from "./logos/scb10x";
import Agoda from "./logos/agoda";
import SalaryHero from "./logos/salary-hero";
import Link from "next/link";

type Props = {};

const AssociatedCompanies = (props: Props) => {
  return (
    <div className="relative flex space-x-6 items-center md:space-x-8">
      <Link
        href="https://aws.amazon.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AWS className="w-auto h-6 md:h-7" />
      </Link>
      <Link
        href="https://scb10x.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SCB10X className="w-auto h-8 md:h-9" />
      </Link>
      <Link
        href="https://salary-hero.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SalaryHero className="w-auto h-6 md:h-7" />
      </Link>

      <Link
        href="https://www.agoda.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Agoda className="w-auto h-8 md:h-9" />
      </Link>
    </div>
  );
};

export default AssociatedCompanies;
