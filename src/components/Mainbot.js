import React from 'react'
import ipadImg from "../images/image-devices.png"
import '../components/mainbot.css';


import Lists from "../images/icon-blacklist.svg"
import text from "../images/icon-text.svg"
import preview from "../images/icon-preview.svg"

function Mainbot() {
  return (
    <div>
        <article className='mainbot-container'>
            <h2>Access Clipboard anywhere</h2>
            <p>Whether you're on the go, or at your coimputer, you can access all your Cliopboard snippets in a few simple clicks.</p>
            <div className='image-container'>
            <img src={ipadImg} alt="" />
            </div>
            
            <h2>Supercharge your workflow</h2>
            <p>We've got the tools to boost your productivity</p>
        </article>

        <div className="workflow-container">
            <div>
                <img src={Lists} alt="" />
                <h3>Create blacklists</h3>
                <p>Ensure sensitive information never makes its way to your clipboard by excluding cetrain sources.</p>
            </div>

            <div>
                <img src={text} alt="" />
                <h3>Create blacklists</h3>
                <p>Ensure sensitive information never makes its way to your clipboard by excluding cetrain sources.</p>
            </div>

            <div>
                <img src={preview} alt="" />
                <h3>Create blacklists</h3>
                <p>Ensure sensitive information never makes its way to your clipboard by excluding cetrain sources.</p>
            </div>

        </div>

    </div>
  )
}

export default Mainbot