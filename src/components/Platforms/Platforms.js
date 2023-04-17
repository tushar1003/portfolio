import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Particle from '../Particle'
import PlatformCard from './PlatformCard'
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import leetcode from "../../Assets/leetcode.png";
import codechef from "../../Assets/codechef.png";
import codeforces from "../../Assets/codeforces.png";
const Platforms = () => {
  return (
    <div>
      <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
           <strong className="purple">Coding Platforms </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few coding Platforms where I code.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <PlatformCard
              imgPath={leetcode}
              isBlog={false}
              title="Leetcode"
              description="Solving over 700+ problems on LeetCode has not only been a significant accomplishment for me, but it has also instilled in me a deep sense of confidence in my coding abilities. I am continuously striving to improve my skills and take on more challenging coding problems to further enhance my expertise in DSA."
              ghLink="https://leetcode.com/tushar_0602/"
            //   demoLink="https://discord-clone-ten-rust.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <PlatformCard
              imgPath={codechef}
              isBlog={false}
              title="CodeChef"
              description="As an enthusiastic coder, I have invested countless hours in honing my skills and pushing my boundaries in the world of competitive programming. CodeChef has been a significant part of my journey, and achieving a 4-star rating is a testament to my dedication and hard work."
              ghLink="https://www.codechef.com/users/tushar_0510"
            //   demoLink="https://frontend-gold-chi.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <PlatformCard
              imgPath={codeforces}
              isBlog={false}
              title="Codeforces"
              description="As a dedicated pupil at Codeforces, I am constantly honing my coding skills and pushing myself to excel in the world of competitive programming. Through my participation in various Codeforces contests and challenges, I have gained invaluable experience in solving complex problems, optimizing algorithms, and writing efficient code."
              ghLink="https://codeforces.com/profile/tushar_10"
            //   demoLink="https://movies-app-ruby-rho.vercel.app/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
    </div>
  )
}

export default Platforms
