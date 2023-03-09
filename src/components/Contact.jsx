import React, { useState } from "react";
import "../styles/ContactStyles.css";

function Contact() {
  return (
    <section id="contact" className="pt-5 mb-5">
      <div className="container-fluid contact-container">
        <div className="row">
          <div className="col-12">
            <h2 className="fz-heading text-center font-weight-bold pb-3 heading-sizing contact-heading">
              Get In Touch
            </h2>
          </div>
          <div className="col-12 text-center">
            <p className="mx-5 text-left pb-3 intro-paragraph text-white">
              I am always open to new opportunities in the software engineering
              field and am eager to collaborate on exciting projects. If you
              have a project in mind or are looking for a skilled software
              engineer, please feel free to reach out by clicking below. I look
              forward to hearing from you.
            </p>
            <a
              rel="noopener"
              href="mailto:s.r.seagrave@gmail.com"
              className="button-main text-white mr-3 text-center"
            >
              Say Hi!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
