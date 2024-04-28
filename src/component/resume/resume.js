import React from 'react';
import jobData from './jobdata';
import './resume.css';
import { Button } from '@mui/material';
import resumeFile from '../../assets/TIEN NGUYEN_Resume_IT.pdf';

const Resume = () => {
    const handleDownload = () => {
        alert('Downloading Resume?');
        const anchor = document.createElement('a');
        anchor.href = resumeFile;
        anchor.download = "Tien_resume"; 
        anchor.click();
      };

  return (
    <section id="resume">
        <span className="resumeTile">My Resume<br/></span>
        <span className="resumeDes">Accomplished professional with extensive experience in IT. 
            Proficient in HTML / CSS /JS.</span>
        <div className="section-container">
        <section className="career-history">
            <h2>IT Career History</h2>
            {jobData.map((job, index) => (
                <div className="jobEntry" key={index}>
                <h3>{job.title}</h3>
                <p>{job.company}, {job.location}</p>
                <p>{job.startDate} - {job.endDate}</p>
                <ul>
                    {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                    ))}
                </ul>
                </div>
            ))}
        </section>

        <div className="section-container">
        <section className="skills">
          <h2>Skills</h2>
          <ul className="skill">
            <li>Visual Studio Code</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Html</li>
            <li>Css</li>
            <li>ReactJS</li>
          </ul>
        </section>

        <section className="qualifications">
          <h2>Qualifications</h2>
          <ul className="quali">
            <li>Bachelor, Information Technology, HUTECH University, 2021</li>
            <li>Master, Information Technology, QUT, Present</li>
          </ul>
        </section>
      </div>
    </div>
    <div className="download-button">
        <Button variant="contained" color="primary" onClick={handleDownload}>
          Download Resume
        </Button>
      </div>
    </section>
  );
};

export default Resume;
