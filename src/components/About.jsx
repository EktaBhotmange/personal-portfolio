import "../styles/About.css";
import AboutImg from "../assets/AboutImg.jpg";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-image">
        <img src={AboutImg} alt="AboutImg" />
      </div>

      <div className="about-content">
        <h2>About Me</h2>

        <p>
          I am a Computer Engineering student passionate about
          software development and web technologies. I enjoy
          creating responsive web applications and solving
          real-world problems through technology.
        </p>

        <p>
          Currently, I am focusing on React, JavaScript,
          Data Structures & Algorithms, and building projects
          that strengthen my development skills.
        </p>

      </div>

    </section>
  );
}

export default About;