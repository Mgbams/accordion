import React from "react";
import PropTypes from "prop-types";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const SingleAccordion = ({
  isAccordionOpen,
  toggleAccordion,
  showAccordion,
  id,
  title,
  info,
}) => {
  return (
    <section id="main-container" style={{ padding: "0px" }}>
      <div id="accordion-wrapper">
        <div
          className="accordion-inner-wrapper"
          style={{ paddingBottom: "0px", marginBottom: "-5px" }}
        >
          <div className="title-and-button">
            <span>
              <strong>{title}</strong>
            </span>
          </div>
          <div className="button-wrapper">
            <button id="button" onClick={toggleAccordion}>
              {isAccordionOpen && showAccordion.id === id ? (
                <AiOutlineMinus id="react-icon minus" />
              ) : (
                <AiOutlinePlus id="react-icon plus" />
              )}
            </button>
          </div>
        </div>

        <span style={{ width: "30vw" }}>
          {showAccordion.id === id && isAccordionOpen ? (
            <p>{info}</p>
          ) : (
            !isAccordionOpen
          )}
        </span>
      </div>
    </section>
  );
};

SingleAccordion.propTypes = {};

export default SingleAccordion;
