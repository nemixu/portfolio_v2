import React, { useState } from "react";
import "../styles/ContactStyles.css";

function Contact() {
  return (
    <section id="contact" className="pt-5 mb-5">
      <div class="container-fluid contact-container">
        <div class="row">
          <div class="col-12">
            <h2 className="heading-color fz-md text-center font-weight-bold pb-3">
              What's Next?
            </h2>
            <h2 class="fz-heading text-center font-weight-bold pb-3 heading-sizing contact-heading">
              Get In Touch
            </h2>
          </div>
          <div class="col-12 text-center">
            <p class="mx-5 text-left pb-3 intro-paragraph text-white">
              I am always open to new opportunities in the software engineering
              field and am eager to collaborate on exciting projects. If you
              have a project in mind or are looking for a skilled software
              engineer, please feel free to reach out by clicking below. I look
              forward to hearing from you.
            </p>
            <a
              rel="noopener"
              href="mailto:s.r.seagrave@gmail.com"
              class="button-main text-white mr-3 text-center"
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
