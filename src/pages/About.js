import React, { Component } from 'react';
import './About.css';
import profilePic from '../assets/75235E9D-53BC-44A9-8427-2DF10DCF0729.jpeg'; // Correct path to your image

export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="social_links">
          <a href="https://www.linkedin.com/in/kunsang-t-017b36209/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/ktsering2003" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://vermillion-fudge-e569f3.netlify.app/" target="_blank" rel="noopener noreferrer">Portfolio</a>
        </div>
        <div className="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profilePic}
              alt="Profile Pic"
            />
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Kunsang Tsering</div>
            <div className="brief_description">
              I’d like to introduce myself, I’m Kunsang Tsering. As I am passionate about technology, I also bring a unique cultural background being both Tibetan and Nepali. Currently pursuing a Bachelor's degree in Computer Science with a minor in Graphic and Interaction Design at Queens College. My academic journey is fueled by a love for learning, and I'm a firm believer in how technology can bring people together. My recent internship highlighted the positive impact tech can have on lives, especially in enhancing accessibility for those with visual impairments. I love blending creativity with technology through my design minor. Overall, I'm just excited about the chance to contribute my skills to your team's projects, ready for new challenges, and eager for the journey ahead.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
