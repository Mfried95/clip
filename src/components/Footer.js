import React from 'react'
import "../components/Footer.css"
import Buttons from "../components/Buttons"
import Google from "../images/logo-google.png"
import Ibm from "../images/logo-ibm.png"
import Mircrosoft from "../images/logo-microsoft.png"
import Hp from "../images/logo-hp.png"
import Vector from "../images/logo-vector-graphics.png"
import Logo from "../images/logo.svg"
import facebook from "../images/icon-facebook.svg"
import twitter from "../images/icon-twitter.svg"
import instagram from "../images/icon-instagram.svg"



function Footer() {
  return (

<footer>
<div className='logo-grid'>
        <img src={Google} alt="" />
        <img src={Ibm} alt="" />
        <img src={Mircrosoft} alt="" />
        <img src={Hp} alt="" />
        <img src={Vector} alt="" />
    </div>

    <article>
      <h2>Clipboard for iOS and Mac OS</h2>
      <p>Avalible for free on the App Store. 
      Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clipboard.</p>
    </article>
    
    <Buttons/>

    <nav>
      

      <div className='nav-links'>
      <img src={Logo} alt="" />
        <a href="#"><li>FAQs</li></a>
        <a href="#"><li>Contact Us</li></a>
        <a href="#"><li>Privacy Policy</li></a>
        <a href="#"><li>Press Kit</li></a>
        <a href="#"><li>Install Guide</li></a>
  
      </div>
      

      <div className='social-icons'>
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
        <img src={instagram} alt="" />
      </div>

    </nav>

</footer>

  

  )
}

export default Footer