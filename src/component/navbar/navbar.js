import React, { useState } from 'react';
import'./navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/chat-box.png';
import Burger from '../../assets/burgerbtn.png';


function Navbar({ onNavbarClick }) {
  const [showMenu, setShowMenu] = useState (false);
  return (
    <nav className="navbar"> {/* Navigation  Bar for website*/}
      <img src={logo} alt="logo" className="logo" onClick={() => onNavbarClick('info')}/>
      <div className="desktopMenu">
        <a className="desktopMenuListItem" activeClass="active" to="intro"  onClick={() => onNavbarClick('info')}>Home</a>
        <a className="desktopMenuListItem" activeClass="active" to="abouts"  onClick={() => onNavbarClick('about')}>About</a>
        <a className="desktopMenuListItem" activeClass="active" to="resume"  onClick={() => onNavbarClick('resume')}>Résume</a>
        <a className="desktopMenuListItem" activeClass="active" to="port"  onClick={() => onNavbarClick('portfolio')}>Portfolio</a>
      </div>
      <button className="desktopMenuBtn" onClick={() => onNavbarClick('contact')}>
             <img src={contactImg} alt="" className="desktopMenuIMG" /> Contact Me
      </button>

      <img src={Burger} alt="menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/> {/* Navigation  Bar for smaller screen*/}
      <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
        <a className="ListItem" onClick={()=>{setShowMenu(false);onNavbarClick('info')}} activeClass="active" to="intro" >Home</a>
        <a className="ListItem" onClick={()=>{setShowMenu(false);onNavbarClick('about')}} activeClass="active" to="abouts" >About</a>
        <a className="ListItem" onClick={()=>{setShowMenu(false);onNavbarClick('resume')}} activeClass="active" to="resume" >Résume</a>
        <a className="ListItem" onClick={()=>{setShowMenu(false);onNavbarClick('portfolio')}} activeClass="active" to="port" >Portfolio</a>
        <a className="ListItem" onClick={()=>{setShowMenu(false);onNavbarClick('contact')}} activeClass="active" to="contact" >Contact Me</a>
      </div>
      </nav>
  )
}

export default Navbar