import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Art Gallery Website",
      tech: "MERN • Tailwind",
      description:
        "A modern art showcase website featuring paintings, portraits, customized gifts and handcrafted artworks.",
      image: "art-gallery.jpg",
      github: "https://github.com/EktaBhotmange/art-gallery-website",
      demo: "#",
    },

    {
      title: "E-Ticket Connect",
      tech: "MERN Stack",
      description:
        "An online ticket booking platform with role-based access for secure functionality and payment processing.",
      image: "eTicketConnect.jpg",
      github: "https://github.com/EktaBhotmange/eTicketConnect-",
    },

    {
      title: "Summarize Me",
      tech: "React • Ai Integration",
      description:
        "Application that provides a clear and concise summary of lengthy articles in 100 words.",
      image: "summarizeMe.jpg",
      github: "https://github.com/EktaBhotmange/summarizeMeProject",
      demo: "https://summarizemeproject.vercel.app/",
    },

    {
      title: "Student Management System",
      tech: "Java • OOP",
      description:
        "A Java application for managing student records, attendance and academic information.",
      image: "/projects/student-management.jpg",
      github: "#",
      demo: "#",
    },

    {
      title: "Student Management System",
      tech: "Java • OOP",
      description:
        "A Java application for managing student records, attendance and academic information.",
      image: "/projects/student-management.jpg",
      github: "#",
      demo: "#",
    },

  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <span className="project-tech">
                {project.tech}
              </span>

              <p>{project.description}</p>

              <div className="project-buttons">
                <a href={project.demo}>Live Demo</a>
                <a href={project.github}>GitHub</a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;