import React, { useState } from "react";
import SingleAccordion from "./SingleAccordion";
import data from "../data";

const AccordionLists = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [question, setQuestion] = useState(data);
  const [showAccordion, setShowAccordion] = useState(data[0]);

  const toggleAccordion = (id) => {
    setIsAccordionOpen(!isAccordionOpen);
    console.log(isAccordionOpen);
    for (let k = 0; k < question.length; k++) {
      if (question[k].id === id) {
        setShowAccordion(question[k]);
        if (showAccordion.id === id) {
          setIsAccordionOpen(!isAccordionOpen);
        }
      }
    }
  };

  return (
    <div className="accordion-lists-wrapper">
      <div id="questions-and-answers-title">
        <h2>Questions And Answers About Login</h2>
      </div>
      <div id="reviews-container">
        {data.map((review) => {
          let { id } = review;
          return (
            <SingleAccordion
              key={id}
              isAccordionOpen={isAccordionOpen}
              toggleAccordion={() => toggleAccordion(id)}
              {...review}
              showAccordion={showAccordion}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AccordionLists;
