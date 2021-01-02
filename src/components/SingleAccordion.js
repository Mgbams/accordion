import React from "react";
import PropTypes from "prop-types";

const SingleAccordion = ({
  isAccordionOpen,
  toggleAccordion,
  showAccordion,
  id,
  title,
  info,
}) => {
  return (
    <section id="main-container">
      <div id="accordion-wrapper">
        <div className="accordion-inner-wrapper">
          <div className="title-and-button">
            <h3>
              <strong>{title}</strong>
            </h3>
          </div>
          <div className="button-wrapper">
            <button id="button" onClick={toggleAccordion}>
              {isAccordionOpen && showAccordion.id === id ? "-" : "+"}
            </button>
          </div>
        </div>

        <div style={{ width: "30vw" }}>
          {showAccordion.id === id && isAccordionOpen ? (
            <p>{info}</p>
          ) : (
            !isAccordionOpen
          )}
        </div>
      </div>
    </section>
  );
};

SingleAccordion.propTypes = {};

export default SingleAccordion;
