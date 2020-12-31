import React from "react";
import PropTypes from "prop-types";

const SingleAccordion = ({ isAccordionOpen, toggleAccordion }) => {
  return (
    <section id="main-container">
      <div style={{ width: "30%" }}>
        <h2>Questions And Answers About Login</h2>
      </div>
      <div id="accordion-wrapper">
        <div className="accordion-inner-wrapper">
          <div className="title-and-button">
            <h3>
              <strong>Question to be answered and answered?</strong>
            </h3>
          </div>
          <div className="button-wrapper">
            <button id="button" onClick={toggleAccordion}>
              {isAccordionOpen ? "-" : "+"}
            </button>
          </div>
        </div>

        <div style={{ width: "32vw" }}>
          {isAccordionOpen && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              neque voluptate quidem dolores repellendus voluptatum dolorum
              reprehenderit, saepe dicta similique architecto, facilis maxime
              illo doloremque.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

SingleAccordion.propTypes = {};

export default SingleAccordion;
