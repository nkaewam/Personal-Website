import React from "react";

type Props = {};

const Description = (props: Props) => {
  return (
    <p className="font-extralight text-lg md:text-xl">
      An aspiring{" "}
      <span className="font-bold bg-gradient-to-r to-yellow-100 via-yellow-200 from-orange-200 text-transparent bg-clip-text animate-gradient">
        Solutions Architect & Developer
      </span>{" "}
      with over 3 years of experience in software engineering field. A senior at
      Robotics & AI Engineering at Chulalongkorn University class of 2024.
    </p>
  );
};

export default Description;
