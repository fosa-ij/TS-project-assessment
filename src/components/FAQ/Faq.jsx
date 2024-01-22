import React from "react";
import './faq.css'
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
  return (
    <div className="support-section">
      <section className="support-title">
        <h5>Support</h5>
        <h2>FAQs</h2>
        <p>
          Everything you need to know about the product and billing. Can't find
          the answer you're looking for? Please chat to our friendly team.
        </p>
      </section>
      <section className="support-main">
      <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>How many participants can join a ClearLink video conference?</Accordion.Header>
        <Accordion.Body>
        ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Can I use ClearLink on multiple devices?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Is ClearLink compatible with other video conferencing platforms?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>How does ClearLink ensure the security of my video conferences?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Do I need to download any software to use ClearLink?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>What kind of customer support does ClearLink provide?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </section>
    </div>
  );
};

export default Faq;
