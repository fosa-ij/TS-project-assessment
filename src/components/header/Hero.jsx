import React from "react";
import "./header.css";
import { Button } from "react-bootstrap";
import Avatar from "../../assets/avatar/hero-svg/Avatar.svg";
import Avatar1 from "../../assets/avatar/hero-svg/Avatar (1).svg";
import Avatar2 from "../../assets/avatar/hero-svg/Avatar (2).svg";
import Avatar3 from "../../assets/avatar/hero-svg/Avatar (3).svg";
import Avatar4 from "../../assets/avatar/hero-svg/Avatar (4).svg";
import ba1 from "../../assets/avatar/hero-svg/big-avatar/image 8.svg";
import ba2 from "../../assets/avatar/hero-svg/big-avatar/image 21.svg";
import ba3 from "../../assets/avatar/hero-svg/big-avatar/image 72.svg";
import ba4 from "../../assets/avatar/hero-svg/big-avatar/image 100.svg";
import ba5 from "../../assets/avatar/hero-svg/big-avatar/image 103.svg";
import ba6 from "../../assets/avatar/hero-svg/big-avatar/image 108.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAssistiveListeningSystems,
  faBolt,
  faCamera,
  faCloudBolt,
  faMicrophone,
  faRobot,
  faStar,
  faTelevision,
} from "@fortawesome/free-solid-svg-icons";
import { faMessage, faSmile } from "@fortawesome/free-regular-svg-icons";

function Hero() {
  return (
    <div className="hero-section ">
      <section className="hero-text-section">
        <div className="hero-text">
          <h1>
            Uniting the world, <br /> one video call at a time
          </h1>
          <p className="text-secondary mt-3">
            Experience the future of communication with ClearLink - where
            crystal-clear video conferencing meets unparalleled simplicity.
          </p>
        </div>
        <div className="hero-btn-section">
        <Button className='me-4 rounded-5' variant="primary">Start your free trial</Button>
          <span className="text-primary"><FontAwesomeIcon className="me-1" icon={faRobot} /> Discover AI assistant</span>
        </div>
        <div className="hero-ratings">
          <div>
            <img src={Avatar} alt="" />
            <img className="small-avatar-two" src={Avatar1} alt="" />
            <img className="small-avatar-three" src={Avatar2} alt="" />
            <img className="small-avatar-four" src={Avatar3} alt="" />
            <img className="small-avatar-five" src={Avatar4} alt="" />
          </div>
          <div className="ratings">
            <div className="five-star">
              <FontAwesomeIcon className="text-warning" icon={faStar} />
              <FontAwesomeIcon className="text-warning" icon={faStar} />
              <FontAwesomeIcon className="text-warning" icon={faStar} />
              <FontAwesomeIcon className="text-warning" icon={faStar} />
              <FontAwesomeIcon className="text-warning" icon={faStar} />
              <span>5.0</span>
            </div>
            <span>from 3,000+ reviews</span>
          </div>
        </div>
      </section>
      <section className="hero-image-section">
        <div className="hero-big-avatar">
          <div className="ba-container one">
            <img src={ba2} alt="" />
          </div>
          <div className="ba-container two">
            <img src={ba4} alt="" />
          </div>
          <div className="ba-container three">
            <img src={ba1} alt="" />
          </div>
        </div>
        <div className="hero-big-avatar">
          <div className="ba-container four">
            <img src={ba3} alt="" />
          </div>
          <div className="ba-container five">
            <img src={ba6} alt="" />
          </div>
          <div className="ba-container six">
            <img src={ba5} alt="" />
          </div>
        </div>
        <div className="hero-icons">
          <div>
            <FontAwesomeIcon className="hero-icon" icon={faMicrophone} />
            <FontAwesomeIcon className="hero-icon" icon={faCamera} />
            <FontAwesomeIcon className="hero-icon" icon={faTelevision} />
            <FontAwesomeIcon className="hero-icon" icon={faSmile} />
            <FontAwesomeIcon className="hero-icon" icon={faMessage} />
            <FontAwesomeIcon className="hero-icon" icon={faBolt} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
