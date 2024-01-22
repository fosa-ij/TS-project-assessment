import React from 'react'
import './header.css'
import { Button } from 'react-bootstrap'
import Avatar from '../../assets/avatar/hero-svg/Avatar.svg'
import Avatar1 from '../../assets/avatar/hero-svg/Avatar (1).svg'
import Avatar2 from '../../assets/avatar/hero-svg/Avatar (2).svg'
import Avatar3 from '../../assets/avatar/hero-svg/Avatar (3).svg'
import Avatar4 from '../../assets/avatar/hero-svg/Avatar (4).svg'
import ba1 from '../../assets/avatar/hero-svg/big-avatar/image 8.svg'
import ba2 from '../../assets/avatar/hero-svg/big-avatar/image 21.svg'
import ba3 from '../../assets/avatar/hero-svg/big-avatar/image 72.svg'
import ba4 from '../../assets/avatar/hero-svg/big-avatar/image 100.svg'
import ba5 from '../../assets/avatar/hero-svg/big-avatar/image 103.svg'
import ba6 from '../../assets/avatar/hero-svg/big-avatar/image 108.svg'

function Hero () {
  return (
    <div className='hero-section '>
        <section className="hero-text-section">
            <div className='hero-text'>
                <h1>Uniting the world, <br /> one video call at a time</h1>
                <p>Experience the future of communication with ClearLink - where crystal-clear video conferencing meets unparalleled simplicity.</p>
            </div>
            <div className='hero-btn-section'>
                <Button>Start your free trial</Button>
                <span>Discover AI assistant</span>
            </div>
            <div className='hero-ratings'>
                <div>
                    <img src={Avatar} alt="" />
                    <img src={Avatar1} alt="" />
                    <img src={Avatar2} alt="" />
                    <img src={Avatar3} alt="" />
                    <img src={Avatar4} alt="" />
                </div>
                <div>
                    <div className="5-star"></div>
                    <span>from 3,000+ reviews</span>
                </div>
            </div>
        </section>
        <section className="hero-image-section">
            <div className="hero-big-avatar">
                <div className='ba-container'><img src={ba2} alt="" /></div>
                <div className='ba-container'><img src={ba4} alt="" /></div>
                <div className='ba-container'><img src={ba1} alt="" /></div>
            </div>
            <div className="hero-big-avatar">
                <div className='ba-container'><img src={ba3} alt="" /></div>
                <div className='ba-container'><img src={ba6} alt="" /></div>
                <div className='ba-container'><img src={ba5} alt="" /></div>
            </div>
            <div className="hero-icons">
                <p>icons</p>
            </div>
        </section>
    </div>
  )
}

export default Hero