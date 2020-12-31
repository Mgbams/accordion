import React, { useState } from "react";
import SingleAccordion from "./SingleAccordion";

const AccordionLists = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    console.log("show");
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div>
      <SingleAccordion
        isAccordionOpen={isAccordionOpen}
        toggleAccordion={toggleAccordion}
      />
    </div>
  );
};

export default AccordionLists;
