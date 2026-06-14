import "../styles/Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <div className="contact-container">

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p>b.ektaa20@gmail.com</p>
        </div>

        <div className="contact-card">
          <FaGithub className="contact-icon" />
          <h3>GitHub</h3>
          <a
            href="https://github.com/EktaBhotmange"
            target="_blank"
            rel="noreferrer"
          >
            Visit My Profile
          </a>
        </div>

        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <h3>LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/ekta-bhotmange-313ab4326/"
            target="_blank"
            rel="noreferrer"
          >
            Let's Connect
          </a>
        </div>

        <div className="contact-card">
          <FaPhone className="contact-icon" />
          <h3>Mobile No.</h3>
          <p>7666817449</p>
        </div>
        

      </div>
    </section>
  );
}

export default Contact;