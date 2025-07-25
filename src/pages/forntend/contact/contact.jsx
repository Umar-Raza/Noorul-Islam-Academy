import { Clock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

export const Contact = () => {
  return (
    <div className="container mb-4 contactPage" id="contact">
      <div className="row">
        <div className="col mt-5 mb-4">
          <div className="text-center">
            <h1 className="display-4 fw-bold text-dark">Contact Us</h1>
            <div className="bottomLine mx-auto mb-3"></div>
            <p className="text-muted lead">
              We would love to hear from you! Please reach out with any questions or feedback.
            </p>
          </div>
        </div>
      </div>
      <div className="row g-0">
        {/* Call Today */}
        <div className="col-lg-3 col-md-6">
          <div className="contact-card text-center">
            <div className="icon-wrapper mb-3 rounded-circle">
              <Phone size={40} className="contact-icon " />
            </div>
            <h5 className="card-title">CALL TODAY</h5>
            <a href="tel:+923187001026" className="text-dark phone">+923187001026</a>
          </div>
        </div>
        {/* Address */}
        <div className="col-lg-3 col-md-6">
          <div className="contact-card text-center">
            <div className="icon-wrapper mb-3 rounded-circle ">
              <Mail size={40} className="contact-icon" />
            </div>
            <h5 className="card-title">EMAIL US</h5>
            <a href="mailto:Hafizmuhammadsufyansarwar@gmail.com" className="text-dark email">Hafizmuhammadsufyansarwar@gmail.com</a>
          </div>
        </div>

        {/* Email Us */}
        <div className="col-lg-3 col-md-6">
          <div className="contact-card text-center">
            <div className="icon-wrapper mb-3 rounded-circle">
              <MapPin size={40} className="contact-icon" />
            </div>
            <h5 className="card-title">ADDRESS</h5>
            <p className="card-text">
              Pakistan Punjab,
              <br />
              Faisalabad
            </p>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="col-lg-3 col-md-6">
          <div className="contact-card text-center">
            <div className="icon-wrapper mb-3 rounded-circle">
              <Clock size={40} className="contact-icon" />
            </div>
            <h5 className="card-title">OPENING HOURS</h5>
            <p className="card-text">
              Mon — Fri 10:00 - 23:00
              <br />
              Sat-Sun- 10:00 - 19:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
