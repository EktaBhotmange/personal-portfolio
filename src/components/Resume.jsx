import "../styles/Resume.css";

function Resume() {
  return (
    <section className="resume" id="resume">
      <h2>Resume</h2>

      <p className="resume-subtitle">
        A quick overview of my qualifications and experience.
      </p>

      <div className="resume-container">
        <iframe
          src="/Resume.pdf"
          title="Resume Preview"
          className="resume-frame"
        ></iframe>
      </div>

      <div className="resume-actions">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="download-btn"
        >
          Open Resume
        </a>

        <a
          href="/resume.pdf"
          download
          className="download-btn secondary"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;