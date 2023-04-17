import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Discord Clone"
              description="Introducing DiscordClone! Built using ReactJS, Firebase, and Material UI, it's a versatile and user-friendly communication platform that mimics the popular Discord app. Stay connected, chat in real-time, and collaborate effortlessly with this sleek and modern Discord clone."
              ghLink="https://github.com/tushar1003/discord-clone"
              demoLink="https://discord-clone-ten-rust.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="MapAuth"
              description="Passwords are ubiquitous today on any platform, on possibly any website. But to remember so difficult passwords and that too on numerous websites seems daunting and therefore you can devise a project illustrating graphical password strategy. This will allow the user to set passwords in the form of graphical presentation in a certain pattern and later use that pattern to login o the system."
              ghLink="https://github.com/MapAuth"
              demoLink="https://frontend-gold-chi.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Movies App"
              description="Introducing MoviesApp! Built using ReactJS, Firebase, and Material UI, it's a comprehensive movie and TV series catalog app that offers custom search functionality. Discover, bookmark, and binge-watch your favorite movies and TV shows with this sleek and powerful MoviesApp."
              ghLink="https://github.com/tushar1003/movies-app"
              demoLink="https://movies-app-ruby-rho.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Daily Dose"
              description="Introducing Daily-Dose news app! Built using ReactJS and Tailwind CSS, it's a fast and user-friendly news application that offers a clean and modern interface for reading news articles from various sources with features like search, categories, and article bookmarks."
              ghLink="https://github.com/tushar1003/daily-dose"         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Play-with-text"
              description="Play-with-text gives you a way to analyze your text quickly and efficiently. Be it word count, character count or number count.

              Play-with-text is a free character counter tool that provides instant character count & word count statistics for a given text. Play-with-text reports the number of words and characters. Thus it is suitable for writing text with word/ character limit."
              ghLink="https://github.com/tushar1003/play-with-text"
              demoLink="https://play-with-text.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="TO_DO APP"
              description="I built a sleek and efficient To-Do application using ReactJS and Tailwind CSS, allowing users to create, manage, and prioritize tasks with ease. The application features a responsive design, intuitive user interface, and seamless integration with local storage for persistent data storage."
              ghLink="https://github.com/tushar1003/react-to-do"
              demoLink="https://react-to-jogqg4187-tushar1003.vercel.app/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
