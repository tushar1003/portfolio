import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import laptopImg from '../../Assets/about.jpeg';
import topperImg from '../../Assets/topper.jpeg';
import upsee from '../../Assets/upsee.jpg';
import leetcode from '../../Assets/leetcode.png';
import { ImPointRight } from 'react-icons/im';

function Achievements() {
  return (
    <Container fluid className='about-section'>
      <Particle />
      <Container>
        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <Col
            md={7}
            style={{
              justifyContent: 'center',
              paddingTop: '30px',
              paddingBottom: '50px',
            }}
          >
            <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
              Smart India Hackathon 2022{' '}
              <strong className='purple'> National Winner</strong>
            </h1>
            <blockquote className='blockquote mb-0'>
              <p style={{ textAlign: 'justify' }}>
                My team and I achieved a remarkable feat by winning the{' '}
                <span className='purple'>Smart India Hackathon 2022</span> , a
                prestigious national-level competition where students from
                across the country participate. Representing our nodal centre at
                GIET University, Gunupur, Odisha, we developed an innovative
                solution for{' '}
                <span className='purple'>problem statement DR705 </span>
                Our solution,{' '}
                <span className='purple'>
                  MAPAUTH a graphical password authentication technique,{' '}
                </span>
                showcases our coding skills, problem-solving abilities, and
                teamwork. Our victory in this highly competitive hackathon was a
                result of our relentless efforts and dedication to excellence.
                It showcased our ability to excel under pressure and deliver
                cutting-edge solutions. Being recognized as the winners at our
                nodal centre filled us with immense pride and joy.
              </p>
              <p style={{ color: 'rgb(155 126 172)' }}>
                “The creation of something new is not accomplished by the
                intellect, but by the play instinct arising from inner
                necessity. The creative mind plays with the object it loves.”
              </p>
              <footer className='blockquote-footer'>Carl Jung </footer>
            </blockquote>
            {/* <Aboutcard /> */}
          </Col>
          <Col
            md={5}
            style={{ paddingTop: '60px', paddingBottom: '50px' }}
            className='about-img'
          >
            <img src={laptopImg} alt='about' className='img-fluid' />
          </Col>
        </Row>

        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <Col
            md={5}
            style={{ paddingTop: '60px', paddingBottom: '50px' }}
            className='about-img'
          >
            <img src={topperImg} alt='about' className='img-fluid' />
          </Col>

          <Col
            md={7}
            style={{
              justifyContent: 'center',
              paddingTop: '30px',
              paddingBottom: '50px',
            }}
          >
            <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
              University Topper{' '}
              <strong className='purple'> @HBTU KANPUR</strong>
            </h1>
            <blockquote className='blockquote mb-0'>
              <p style={{ textAlign: 'justify' }}>
                As a student, I have always been committed to academic
                excellence and have consistently strived to achieve the highest
                standards of performance. One of my proudest accomplishments was
                being the{' '}
                <span className='purple'>
                  Topper of my university, HBTU Kanpur,
                </span>{' '}
                during my first year of graduation. This achievement holds
                special significance as I achieved this distinction in{' '}
                <span className='purple'>
                  all 13 branches of the university,
                </span>{' '}
                showcasing my versatility and dedication to excellence across
                diverse fields of study. My academic success was evident in my
                outstanding grades, which were the highest among all the
                students in my university. This accomplishment reflects my
                strong work ethic, determination, and perseverance in pursuing
                excellence in my studies. It also highlights my ability to
                consistently deliver exceptional results, even in a competitive
                academic environment.
              </p>
              <p style={{ color: 'rgb(155 126 172)' }}>
                “You can't get there by bus, only by hard work and risk and by
                not quite knowing what you're doing. What you'll discover will
                be wonderful. What you'll discover will be yourself.”
              </p>
              <footer className='blockquote-footer'>Alan Alda, actor </footer>
            </blockquote>
            {/* <Aboutcard /> */}
          </Col>
        </Row>

        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <Col
            md={7}
            style={{
              justifyContent: 'center',
              paddingTop: '30px',
              paddingBottom: '50px',
            }}
          >
            <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
              AIR 76 <strong className='purple'> @UPSEE 2020</strong>
            </h1>
            <blockquote className='blockquote mb-0'>
              <p style={{ textAlign: 'justify' }}>
                In 2020, I achieved a remarkable accomplishment by securing an
                impressive{" "}
                <span className='purple'>
                  All India Rank (AIR) of 76 and a City Rank of 4{' '}
                </span>{' '}
                in the prestigious{' '}
                <span className='purple'>
                  Uttar Pradesh State Entrance Examination (UPSEE).
                </span>{' '}
                This achievement is a testament to my hard work, determination,
                and academic prowess. Competing against a large number of
                candidates from across the state, I successfully secured a high
                rank in this highly competitive examination. This achievement
                reflects my exceptional problem-solving skills, analytical
                abilities, and dedication to academic excellence.Being ranked
                76th at the national level and 4th in my city in the UPSEE is a
                significant milestone for me.
              </p>
              <p style={{ color: 'rgb(155 126 172)' }}>
                “Hard work spotlights the character of people: some turn up
                their sleeves, some turn up their noses, and some don’t turn up
                at all.”
              </p>
              <footer className='blockquote-footer'>Sam Ewing, author</footer>
            </blockquote>
            {/* <Aboutcard /> */}
          </Col>
          <Col
            md={5}
            style={{ paddingTop: '60px', paddingBottom: '50px' }}
            className='about-img'
          >
            <img src={upsee} alt='about' className='img-fluid' />
          </Col>
        </Row>

        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <Col
            md={5}
            style={{ paddingTop: '60px', paddingBottom: '50px' }}
            className='about-img'
          >
            <img src={leetcode} alt='about' className='img-fluid' />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: 'center',
              paddingTop: '30px',
              paddingBottom: '50px',
            }}
          >
            <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
              Consistent Problem Solver{' '}
              <strong className='purple'> @Leetcode </strong>
            </h1>
            <blockquote className='blockquote mb-0'>
              <p style={{ textAlign: 'justify' }}>
                I am proud to share that I have been consistently solving
                problems on LeetCode since March 2022 and have successfully
                solved over  <span className='purple'>1000+ problems</span> across various coding platforms. This
                achievement reflects my unwavering commitment to improving my{" "}
                <span className='purple'>problem-solving skills and my passion for coding</span>. With
                consistent practice and dedication, I have honed my coding
                abilities by solving a wide range of coding problems on LeetCode
                as well as other coding platforms. These problems have covered
                diverse topics such as <span className='purple'>algorithms, data structures, databases,
                and more,</span> helping me gain a deep understanding of various
                programming concepts. 
              </p>
              <p style={{ color: 'rgb(155 126 172)' }}>
              “The formulation of the problem is often more essential than its solution, which may be merely a matter of mathematical or experimental skill.”
              </p>
              <footer className='blockquote-footer'>Albert Einstein</footer>
            </blockquote>
            {/* <Aboutcard /> */}
          </Col>
        </Row>

        {/* <Techstack /> */}

        {/* <Toolstack /> */}

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default Achievements;
