import React from 'react'
import './about.css'
//import Uxui from '../../assets/uxui.png'
import Web from '../../assets/website.png'
import Phone from '../../assets/android.png'

const About = () => {
  return (
    <section id="abouts">
        <span className="aboutTitle">What I do?<br/></span>
        <span className="aboutDes">With a focus on simplicity and efficiency<br/>I create impactful solutions to complex problems.</span>
        <div className="aboutBars">
            <div className="aboutBar">
                <img src={Web} alt="" className="aboutImg"/>
                <div className="aboutText">
                    <h2>Website</h2>
                    <p>With expertise in HTML, CSS, JavaScript, and more, I specialize in translating ideas into dynamic and visually stunning websites.</p>
                </div>
            </div>
            <div className="aboutBar">
                <img src={Phone} alt="" className="aboutImg"/>
                <div className="aboutText">
                    <h2>App</h2>
                    <p> Specializing in iOS, Android, and cross-platform development, I excel at building dynamic mobile applications that captivate users.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About