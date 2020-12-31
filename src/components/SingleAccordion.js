import React from "react";
import PropTypes from "prop-types";

const SingleAccordion = (props) => {
  return (
    <section id="main-container">
      <div style={{ width: "30%", border: "1px solid red" }}>
        <h2>Questions And Answers About Login</h2>
      </div>
      <div id="accordion-wrapper">
        <div className="accordion-inner-wrapper">
          <h3>
            <strong>Question to be answered and answered?</strong>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, neque
            voluptate quidem dolores repellendus voluptatum dolorum
            reprehenderit, saepe dicta similique architecto, facilis maxime illo
            doloremque. Hic quibusdam sint suscipit quis. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Maiores corrupti pariatur unde
            libero, culpa consectetur consequatur perspiciatis soluta harum, aut
            molestias animi ut tempore cum quo alias asperiores laboriosam
            corporis!
          </p>
        </div>
        <div className="button-wrapper">
          <button id="button">+</button>
        </div>
      </div>
    </section>
  );
};

SingleAccordion.propTypes = {};

export default SingleAccordion;
