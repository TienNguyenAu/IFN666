import React from 'react'
import './portfolio.css'
import Portfolio1 from '../../assets/portfolio-1.png'
import Go from '../../assets/go.png'
import Getrepo from './getrepo'




const Portfolio = () => {
  return (
    <section id="port">
        <h2 className="prtTitle">My Portfolio</h2>
        <span className="prtDes">I'm a seasoned web app developer dedicated to crafting exceptional digital experiences. <br/>With expertise in both front-end and back-end development, I specialize in building user-friendly and scalable web applications. <br/>Explore my portfolio to see how I can bring your ideas to life!<br/></span>
        <div className="prtImgs">
          <img src={Portfolio1} alt="" className="prtImg"/>
        </div>
        <button className="prtBtn" onClick={() => window.location.href = "https://github.com/TienNguyenAu"}>
          <img src={Go} alt="" className="prtBtnImg"/> See More
        </button>
      <Getrepo/>
    </section>
  )
}

export default Portfolio