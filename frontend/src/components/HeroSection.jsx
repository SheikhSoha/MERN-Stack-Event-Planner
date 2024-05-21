import React from 'react'
import { Link } from 'react-scroll'

export default function HeroSection() {
  return (
    <section className='hero'>
<img src="/restaurant.jpg" alt="restaurant" />
<div className="item">
  <h3>Dream Maker</h3>
  <div>
    <h1>Your Personal Dream Maker</h1>
    <p>We believe it is all about the BIG DREAM and small details!</p>
    <Link to="contact" spy={true} smooth={true} duration={500}> Book Now</Link>
  </div>
</div>
    </section>
  )
}
