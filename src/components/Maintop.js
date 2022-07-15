import React from 'react'
import "../components/maintop.css"
import Mainimg from "../images/image-computer.png"


function Maintop() {
  return (
    <article className='main-top-section'>

    <div className='image-container'>
      <img src={Mainimg} alt="" />
    </div>

    <div className='top-content'>
    
          <div className='sub-container'>
            <h2>Quick Search</h2>
            <p>Easily search your snippets by content, category, web address, application, and more.</p>
          </div>
          
          <div className='sub-container'>
            <h2>iCloud Sync</h2>
            <p>Instantly saves and syncs snippets across all your devices.</p>
          </div>

          <div className='sub-container'>
            <h2>Complete History</h2>
            <p>Retrieve any snippets from the first momment you started using the app.</p>
          </div>

          </div>

    </article>
  )
}

export default Maintop