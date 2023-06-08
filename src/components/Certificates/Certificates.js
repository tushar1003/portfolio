import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "./CertificateCard";
import Particle from "../Particle";
import sih from "../../Assets/sih certificate.jpeg";
import gs from "../../Assets/gs.jpg"
import jp from "../../Assets/jp.jpg"
import ods from "../../Assets/ods.jpg"
import uds from "../../Assets/uds.jpg"
import oods from "../../Assets/oods.jpg"
import ml0 from "../../Assets/ml0.jpg"
import ml1 from "../../Assets/ml1.jpg"
import ml2 from "../../Assets/ml2.jpg"
import py from "../../Assets/py.jpg"

import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>

        <h1 className="project-heading">
          My Recent <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few certificates I've recieved recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={sih}
              isBlog={false}
              title="SIH Winner 2022"
              description="I am proud to have been a part of the winning team in the prestigious Smart India Hackathon (SIH) 2022, where we worked on solving the challenging problem statement DR-705. Our team's dedication and hard work paid off, as we were declared the winners of the competition."
              ghLink="https://drive.google.com/file/d/192GdwWEnFppwyX4hImM-4W1J6rXuIXZx/view?usp=sharing"
              // demoLink="https://discord-clone-ten-rust.vercel.app/"
            />
          </Col>

           <Col md={4} className="project-card">
            <CertificateCard
              imgPath={gs}
              isBlog={false}
              title="Software Engineering Virtual Experience JP Morgan"
              description="Over the period of January 2022 to February 2022, Tushar Bhatia has completed practical task modules in:
              Interface with a stock price data feed
              Use JPMorgan Chase frameworks and tools
              Display data visually for traders"
              ghLink="https://insidesherpa.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_JPMorgan%20Chase_GQpQ8ZZDmP4JPJYk4_1643681076325_completion_certificate.pdf"
              // demoLink="https://frontend-gold-chi.vercel.app/" 
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={jp}
              isBlog={false}
              title="Engineering Virtual Program Goldman Sachs"
              description="Over the period of January 2022, Tushar Bhatia has completed practical task modules in:
              Crack leaked password database"
              ghLink="https://insidesherpa.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_GQpQ8ZZDmP4JPJYk4_1643124413358_completion_certificate.pdf"
              // demoLink="https://frontend-gold-chi.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={ods}
              isBlog={false}
              title="Ordered Data Structures"
              description="In this course,I learned new data structures for efficiently storing and retrieving data that is structured in an ordered sequence. Such data includes an alphabetical list of names, a family tree, a calendar of events or an inventory organized by part numbers"
              // ghLink="https://github.com/tushar1003/movies-app"
              ghLink="https://coursera.org/share/3200ba65854080716966c66052585835"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={oods}
              isBlog={false}
              title="Object-Oriented Data Structures in C++"
              description="This course teaches learners how to write a program in the C++ language, including how to set up a development environment for writing and debugging C++ code and how to implement data structures as C++ classes. It is the first course in the Accelerated CS Fundamentals specialization, and subsequent courses in this specialization will be using C++ as the language for implementing the data structures covered in class."
              ghLink="https://coursera.org/share/74cac22776bce232e3959152e678f1e8"         
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={uds}
              isBlog={false}
              title="Unordered Data Structures"
              description="The Unordered Data Structures course covers the data structures and algorithms needed to implement hash tables, disjoint sets and graphs. These fundamental data structures are useful for unordered data."
              // ghLink="https://github.com/tushar1003/play-with-text"
              ghLink="https://coursera.org/share/f190d459d56d4394ccdc851ed3da06b0"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={ml0}
              isBlog={false}
              title="Mathematics for Machine Learning: Linear Algebra"
              description="In this course on Linear Algebra we look at what linear algebra is and how it relates to vectors and matrices. Then we look through what vectors and matrices are and how to work with them, including the knotty problem of eigenvalues and eigenvectors, and how to use these to solve problems."
              ghLink="https://coursera.org/share/979d389085968ee9dcf81f17d5a2fa8f"
              // demoLink="https://coursera.org/share/f190d459d56d4394ccdc851ed3da06b0"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={ml1}
              isBlog={false}
              title="Mathematics for Machine Learning: Multivariate Calculus"
              description="This course offers a brief introduction to the multivariate calculus required to build many common machine learning techniques. "
              // ghLink="https://github.com/tushar1003/play-with-text"
              ghLink="https://coursera.org/share/9886783d3569e5070428c99bbb76057a"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={ml2}
              isBlog={false}
              title="Mathematics for Machine Learning: PCA"
              description="This intermediate-level course introduces the mathematical foundations to derive Principal Component Analysis (PCA), a fundamental dimensionality reduction technique."
              // ghLink="https://github.com/tushar1003/play-with-text"
              ghLink="https://coursera.org/share/b0b090da20a82f77cfe6294ae95e2c3a"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={py}
              isBlog={false}
              title="Crash Course on Python- GOOGLE"
              description="This course is designed to teach you the foundations in order to write simple programs in Python using the most common structures. "
              // ghLink="https://github.com/tushar1003/react-to-do"
              ghLink="https://react-to-jogqg4187-tushar1003.vercel.app/"
            />
          </Col>

           
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
