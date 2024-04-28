import React from 'react'
import './contact.css'
import Hutech from '../../assets/hutech.png'
import Qut  from '../../assets/qut.png'
import ContactForm from './contactform'


const Contact = () => {
  
  return (
    <section id="contactPage">
        <div id="education">
            <h1 className="eduTitle">Education</h1>
            <p className="eduDes">I have had the opportunity to learn at a diverse Tenological Universities.</p>
            <div className="eduImgs">
                <img src={Hutech} alt="eduImg" className="eduImg"/>
                <img src={Qut} alt="eduImg" className="eduImg"/>
            </div>
        </div>

        <div id="contact">
        <h1 className="eduTitle">Contact Me</h1>
            <p className="eduDes">I have had the opportunity to learn at a diverse Tenological Universities.</p>
            <div className="contactForm">
              <ContactForm/>
            </div>
        </div>
    </section>
  )
}

export default Contact