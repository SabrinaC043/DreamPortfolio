
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import f3Logo from '../assets/images/fantastic3.png';
import reactLogo from '../assets/images/reactIcon.png';
import mernLogo from '../assets/images/mernLogo.png';

export default function About() {
    return (
        <Container fluid className='mt-3'>
            <Row>
                <Col md={4} className="about">
                    <p>I am elated to be able to share insight as to who Sabrina Carrion is and how my life journey has brought me into the striking career of Software Development. Having been in the healthcare and pharmaceutical industry for over 9 years in pharmaceutical startups. My career as a Learning and Development Specialist, granted the opportunity to collaborate with folks from the Software Development field. I was blown away at the idea of working to contribute to the community and business as a Software Developer. </p>
                    <p>I discovered Software developers were always learning new information and practiced coding daily to hone their skills. I believe in constantly learning and with a growth mindset, nothing is impossible! Dive into this app for more insight into my Software Development achievements.</p>

                    <Container fluid >
                        <h5>Striking Skills</h5>
                        <Row>
                            <Col md={2} className='m-3'>
                                <img src={f3Logo} width={80} />
                            </Col>
                            <Col md={2} className='m-3'>
                                <img src={reactLogo} width={50} />
                            </Col>
                            <Col md={2} className='m-3'>
                                <img src={mernLogo} width={100} />
                            </Col>

                        </Row>
                    </Container>
                </Col>
                <Col md={{ span: 4, offset: 4 }} className='about'>2 of 2</Col>
            </Row>
        </Container>
    )
}