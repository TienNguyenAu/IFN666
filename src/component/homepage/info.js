import React from 'react';
import './info.css';
import Bg  from '../../assets/Infophoto.png'
import Hire from '../../assets/human.png'
import {Link} from 'react-scroll';


const Info = () => {
  return (
    <section id='intro'>
      <div className="introContent">
        <span className="hello">Hello!!</span>
        <span className="introText">I'm <span className="introName"> Thinh Tien Nguyen</span><br/>Software Developer</span>
        <p className="introPara">Welcome! I'm a software developer specializing in Front end development.<br/>Explore my portfolio to see my latest projects and how I can help you.</p>
        <Link><button className="btn"><img src={Hire}alt="Hire Me" className="btnImg" />Hire Me</button></Link>
      </div>
      <img src={Bg} alt="profile" className="bg" />
    </section>
  )
}

export default Info