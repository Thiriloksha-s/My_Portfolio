import React from 'react';
import Picture from "../assets/pro.avif";
import './css/About.css';

const About = () => {
  return (
    <section id="About" className='about-container'>
      <div className="about-content">
        <img src={Picture} alt="Profile" className='about-image'/> 
        <div className="about-text">
          <p>
            I am an Electronics and Communication Engineering student with a strong analytical mindset and a passion for problem-solving. My journey in technology has led me to explore full-stack development, focusing on programming and cloud computing. I am passionate about continuous learning in data structures, algorithms, and backend development and enjoy collaborating on innovative projects.
          </p><br/>
          <p>
            I thrive in collaborative environments and seek roles that challenge me to innovate, improve, and make a meaningful impact.
          </p><br/>
          <a 
            href="https://drive.google.com/file/d/1a9mKFvT5L0pfy8kH8eiZMItksvjE7IG5/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
