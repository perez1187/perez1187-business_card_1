import { useState } from 'react'
import './App.css'
import logo from "./assets/picture1.png"
import email_icon from "./assets/icon.png"
import linkedin_icon from "./assets/linkedin.png"


function App() {
  return (
    <body>
      <div className='container'> 
        <div className='option1'>
          <div className='option1-content'> 
            
            <div className='option1-photo'>
              <img src={logo} alt= "logo"></img>
            </div> {/* option1-photo*/}

            <div className='option1-name'>
              Laura Smith
            </div>
            
            <div className='option1-language'>
              Frontend-Developer
            </div>

            <div className='option1-website'>
              laurasmith.website
            </div>
            
            <div className='option1-buttons'>

              <button className='o1-button-email'>
                <img src={email_icon} alt= "email_icon"></img>
                <div className='o1-button-email-name'> Email</div>
              </button> {/* o1-button-email*/}
              
              <button className='o1-button-linkedin'>
                <img src={linkedin_icon} alt= "linkedin_icon" className='o1-button-linkedin-icon'></img>
                <div className='o1-button-linkedin-name'> Linkedin</div>
              </button> {/* o1-button-linkedin*/}
            
            </div> {/* option1-buttons*/}

            <div className='option1-description'>
              <h4 className='option1-description-h4'> About</h4>
              <p className='option1-description-p'> I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn. </p>
              <h4 className='option1-description-h4'> Interests</h4>
              <p className='option1-description-p'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div> {/* option1-description*/}
            
            
            <div className='option1-footer'>
              <img src={linkedin_icon} alt= "linkedin_icon" className='option1-footer-icon'></img>
              <img src={linkedin_icon} alt= "linkedin_icon" className='option1-footer-icon'></img>
              <img src={linkedin_icon} alt= "linkedin_icon" className='option1-footer-icon'></img>
              <img src={linkedin_icon} alt= "linkedin_icon" className='option1-footer-icon'></img>
            </div>{/* option1-footer*/}

          </div> {/* option1-content*/}
        </div>  {/* option1*/}
        
        <div className='option2'>
          option 2
          </div> {/* option2*/}
        <div className='option3'>
          option3
        </div> {/* option1*/}
        <div className='option4'>1</div>

      </div>{/* container*/}
    </body>
  )
}

export default App
