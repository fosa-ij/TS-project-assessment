import React from 'react'
import './reviews.css'
import shopify from '../../assets/social-proof-svg/Shopify.com svg.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faForward, faStar } from '@fortawesome/free-solid-svg-icons'
import avatar from '../../assets/review-svg/Avatar (5).svg'
import image from '../../assets/review-svg/Contents.svg'

const Reviews = () => {
  return (
    <div>
        <section className="review-section">
            <section className="review-content">
                <section className="review-details">
                    <img src={shopify} alt="" />
                    <div className='review-ratings'>
                        <FontAwesomeIcon className='text-warning' icon={faStar} /> 
                        <FontAwesomeIcon className='text-warning' icon={faStar} /> 
                        <FontAwesomeIcon className='text-warning' icon={faStar} /> 
                        <FontAwesomeIcon className='text-warning' icon={faStar} /> 
                        <FontAwesomeIcon className='text-warning' icon={faStar} /> 
                    </div>
                    <p>ClearLink has upgraded our remote meetings. High-quality video, screen sharing, andtop-notch security make it essential for our team.</p>
                </section>
                <section className="review-user">
                    <div className="review-user-profile">
                        <div className="user-img"><img src={avatar} alt="" /></div>
                        <div className='user-details'>
                            <h4 className='fw-bold'>Sarah Thompson</h4>
                            <p>Project Manager, Shopify</p>
                        </div>
                    </div>
                    <div className="next-review">
                        <FontAwesomeIcon className='me-4 text-black fs-3' icon={faBackward} />
                        <FontAwesomeIcon className='me-4 text-black fs-3' icon={faForward} />
                    </div>
                </section>
            </section>
            <section className="review-image">
                <img src={image} alt="" />
            </section>
        </section>
    </div>
  )
}

export default Reviews