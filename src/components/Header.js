import React from 'react'
import '../components/header.css';
import Logo from "../images/logo.svg";
import Buttons from "../components/Buttons"

function Header() {
  return (
    <div className='Header'>
      <img src={Logo} alt=""  className='logo-img'/>
      <h2>A history of everything you copy</h2>
      <p>Clipboard allows you to tract and organize everything you copy, instantly acess your clipboard on all your devices.</p>
      <Buttons/>

    <div className='header-article'>
      <h2>Keep track of your snippets</h2>
      <p>Clipboard instantly stores any item copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and IOS apps will help you organize everything.</p>
    </div>

    </div>
  )
}

export default Header