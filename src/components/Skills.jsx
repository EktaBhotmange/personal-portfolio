import "../styles/Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaJava,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiPython,
  SiMongoose,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiC,
  SiPostman
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
      ],
    },

    {
      title: "Backend",
      skills: [
        { name: "MongoDB", icon: <SiMongoose /> },
        { name: "Node.Js", icon: <SiNodedotjs /> },
        { name: "Express.Js", icon: <SiExpress /> },
        { name: "SQL", icon: <SiMysql /> },
      ],
    },

    {
      title: "Languages",
      skills: [
        { name: "C", icon: <SiC /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Python", icon: <SiPython /> },
      ],
    },


    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: <VscCode /> },
        { name: "postman", icon: <SiPostman /> },
      ],
    },

    {
      title: "Core Skills",
      skills: [
        { name: "DSA", icon: "🧩" },
        { name: "OOP", icon: "🏗️" },
        { name: "Problem Solving", icon: "💡" },
        { name: "Responsive Design", icon: "📱" },
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div className="skill-section" key={index}>
            <h3>{category.title}</h3>

            <div className="skills-grid">
              {category.skills.map((skill, i) => (
                <div className="skill-card" key={i}>
                  <div className="skill-icon">{skill.icon}</div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;