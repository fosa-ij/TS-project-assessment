import React from "react";
import "./info.css";
import InfoText from "./InfoText";
import {
  faCoffee,
  faCamera,
  faVoicemail,
  faCameraAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar, faClock } from "@fortawesome/free-regular-svg-icons";
import avatar from "../../assets/info-svg/avatar.svg";
import freehand from "../../assets/info-svg/Hand-drawn arrow.svg";

function Info() {
  return (
    <div className="info-section">
      <section className="info-heading">
        <h4>The clearLink Advantage</h4>
        <h2>Why choose ClearLink?</h2>
        <p>
          In a world where connection is everything, clearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </p>
      </section>
      <section className="info-main">
        <section className="text">
          <div className="info-up-down">
            <InfoText
              header={"Crystal-clear HD video"}
              p={
                "No more pixelation or blurriness - just stunning, lifelike clarity that brings your team closer in meetings."
              }
              icon={faCameraAlt}
            />
            <InfoText
              header={"Noise-canceling audio"}
              p={
                "Say goodbye to destractions with our advanced audio tech for crisp interruption-free conversations"
              }
              icon={faVoicemail}
            />
          </div>
          <div className="info-up-down">
            <InfoText
              header={"Scheduling made easy"}
              p={
                'Streamline your agenda with ClearLink"s intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.'
              }
              icon={faCalendar}
            />
            <InfoText
              header={"Bank-grade security"}
              p={
                "Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders."
              }
              icon={faClock}
            />
          </div>
        </section>
        <section className="image">
          <div className="freehand">
            <img src={freehand} alt="" />
          </div>
          <div className="all-avatar">
            <img src={avatar} alt="" />
          </div>
        </section>
      </section>
    </div>
  );
}

export default Info;
