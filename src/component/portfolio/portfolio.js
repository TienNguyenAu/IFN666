import React from 'react'
import './portfolio.css'
import Portfolio1 from '../../assets/portfolio-1.png'
import Portfolio2 from '../../assets/portfolio-2.png' 
import Portfolio3 from '../../assets/portfolio-3.png' 
import Go from '../../assets/go.png'


const Portfolio = () => {
  return (
    <section id="port">
        <h2 className="prtTitle">My Portfolio</h2>
        <span className="prtDes">I'm a seasoned web app developer dedicated to crafting exceptional digital experiences. <br/>With expertise in both front-end and back-end development, I specialize in building user-friendly and scalable web applications. <br/>Explore my portfolio to see how I can bring your ideas to life!<br/></span>
        <div className="prtImgs">
          <img src={Portfolio1} alt="" className="prtImg"/>
          <img src={Portfolio2} alt="" className="prtImg"/>
          <img src={Portfolio3} alt="" className="prtImg"/>  
        </div>
        <button className="prtBtn">
        <img src={Go} alt="" className="prtBtnImg"/> See More
      </button>
    </section>
  )
}

export default Portfolio