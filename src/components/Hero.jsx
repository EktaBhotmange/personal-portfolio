import "../styles/Hero.css";
import profile from "../assets/profile.jpg";
// import Resume from "./Resume";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">
        <h1>Hi, I'm Ekta Bhotmange</h1>

        <h2>Computer Engineering Student</h2>

        <p>
          Aspiring Software Developer passionate about
          building modern web applications and solving
          real-world problems.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="project-btn">
              View Projects
          </a>
          <a href="#resume" className="resume-btn">
              Resume
          </a>
          
        </div>

      <div className="hero-socials">
          <a href="https://github.com/EktaBhotmange" target="_blank" rel="noreferrer">
        <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/ekta-bhotmange-313ab4326/" target="_blank" rel="noreferrer">
        <FaLinkedin />
        </a>
         
        <a href="https://leetcode.com/u/b_ekta/" target="_blank" rel="noreferrer">
        <SiLeetcode />
        </a>

        <a href="https://www.hackerrank.com/profile/b_ektaa20" target="_blank" rel="noreferrer">
        <SiHackerrank />
        </a>

        <a href="mailto:b.ektaa20@gmail.com">
        <FaEnvelope />
        </a>
      </div>


      </div>

      <div className="hero-image">
        <div className="profile-ring">
        <img src={profile} alt="Profile" />
      </div>
      </div>

    </section>
  );
}

export default Hero;