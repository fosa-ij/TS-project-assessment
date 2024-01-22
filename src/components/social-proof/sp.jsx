import React from "react";
import './sp.css'
import automatic from '../../assets/social-proof-svg/Automattic svg.svg'
import coinbase from '../../assets/social-proof-svg/Coinbase svg.svg'
import dropbox from '../../assets/social-proof-svg/Dropbox svg.svg'
import intercom from '../../assets/social-proof-svg/Intercom svg.svg'
import marvel from '../../assets/social-proof-svg/Marvel svg.svg'
import shopify from '../../assets/social-proof-svg/Shopify.com svg.svg'

function SocialProof() {
  return (
    <div className="sp-section">
      <div>
        <p>
          Join 1,500+ companies already video conferencing the ClearLink way
        </p>
      </div>
      <div className="sp-image-section">
        <img src={shopify} alt="" />
        <img src={coinbase} alt="" />
        <img src={dropbox} alt="" />
        <img src={intercom} alt="" />
        <img src={marvel} alt="" />
        <img src={automatic} alt="" />
      </div>
    </div>
  );
}

export default SocialProof;
