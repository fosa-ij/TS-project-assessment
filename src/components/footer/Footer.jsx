import React from 'react'
import './footer.css'
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCopy, faCopyright } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../assets/header-svg/logo.svg'
import appleStore from '../../assets/footer-svg/appleStore.svg'
import googlePlay from '../../assets/footer-svg/googlePlay.svg'

const Footer = () => {
  return (
    <div>
        <section className='footer-1'>
            <div className='header'>
                <h3><img src={logo} alt="" /> ClearLink</h3>
                <p>ClearLink is your gateway to effortless, high-quality video conferencing. Join us in shaping the future of communication!</p>
            </div>
            <div className="footer-list">
                <h4>Product</h4>
                <ul>
                    <li>Overview</li>
                    <li>Features</li>
                    <li>Solutions</li>
                    <li>Tutorials</li>
                    <li>Pricing</li>
                </ul>
            </div>
            <div className="footer-list">
                <h4>Company</h4>
                <ul>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Press</li>
                    <li>News</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="footer-list">
                <h4>Resouces</h4>
                <ul>
                    <li>Blog</li>
                    <li>Events</li>
                    <li>Help Center</li>
                    <li>Tutorials</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className="footer-list">
                <h4>Legal</h4>
                <ul>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Cookies</li>
                    <li>Licences</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='footer-socials'>
                <h4>Get the app</h4>
                <img src={appleStore} alt="" />
                <img src={googlePlay} alt="" />
            </div>
        </section>
        <section className='footer-2'>
            <div><p><FontAwesomeIcon icon={faCopyright} /> 2023 ClearLink. All rights reserved.</p></div>
            <div className='social-icons'>
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faGithub} />
                <FontAwesomeIcon icon={faYoutube} />
            </div>
        </section>
    </div>
  )
}

export default Footer