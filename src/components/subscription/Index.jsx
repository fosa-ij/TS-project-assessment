import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { Button } from "react-bootstrap";
import './index.css'
import image from '../../assets/sub-image.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Subscription = () => {
  return (
    <div>
      <section className="sub-section">
        <section className="sub-details">
          <div className="sub-header">
            <h2>Ready to clear the path to perfect communication?</h2>
          </div>
          <div className="sub-list">
            <ul>
              <li className="mb-2">
                <FontAwesomeIcon className="text-primary me-1" icon={faCheckCircle} /> 30 days free trial
              </li>
              <li className="mb-2">
                <FontAwesomeIcon className="text-primary me-1" icon={faCheckCircle} /> Cancel at any time
              </li>
              <li className="mb-2">
                <FontAwesomeIcon className="text-primary me-1" icon={faCheckCircle} /> Access to all features
              </li>
              <li className="mb-2">
                <FontAwesomeIcon className="text-primary me-1" icon={faCheckCircle} /> Peronalized onboarding
              </li>
            </ul>
          </div>
          <div className="sub-btn">
            <Button
              className="me-2 rounded-5 border border-secondary bg-white"
              variant="white"
            >
              Talk to sales
            </Button>
            <Button className="me-2 rounded-5" variant="primary">
              Start your free trial
            </Button>
          </div>
        </section>
        <section className="sub-image">
          <img src={image} alt="" />
        </section>
      </section>
    </div>
  );
};

export default Subscription;
