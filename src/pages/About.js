
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import nodeLogo from '../assets/images/nodeLogo.png'

export default function About() {
    return (
        <Container fluid className='mt-3'>
            <Row>
                <Col md={4} className="about">
                    <p>I am elated to be able to share insight as to who Sabrina Carrion is and how my life’s journey has brought me into the striking career of Software Development. Having been in the healthcare and pharmaceutical industry for over 9 years, and working for pharmaceutical startups. My career  in Learning and Development, granted the opportunity to collaborate with folks from the Software Development field, I was blown away at the idea of working to contribute to the community and business as a Developer. </p>
                    <p>I discovered developers,  were always learning new information and practiced to hone their skills daily. To always learn and develop is what enchanted me into pursuing the striking career of Software Development.</p>

                    <Container fluid >
                        <h2>Skills That I Killed</h2>
                        <Row>
                            <Col md={2} className='m-3'>
                                <img src={nodeLogo} width={80} />
                            </Col>
                            <Col md={2} className='m-3'>
                                <img src={nodeLogo} width={80} />
                            </Col>
                            <Col md={2} className='m-3'>
                                <img src={nodeLogo} width={80} />
                            </Col>
                            <Col md={2} className='m-3'>
                                <img src={nodeLogo} width={80} />
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col md={{ span: 4, offset: 4 }} className='about'>2 of 2</Col>
            </Row>
        </Container>
    )
}