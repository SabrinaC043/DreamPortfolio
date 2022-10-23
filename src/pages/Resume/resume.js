
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import devResume from '../../assets/images/devResume.pdf';
import resume from '../../assets/images/resume1.png';
import "./resume.css";
import { BsFillLightningFill } from "react-icons/bs";
export default function Resume() {

    return (

        <Container className='mt-3'>
            <Row>
                <Col md={5} className='resumeDirection'>
                    <p>Testing Resume </p>
                    <img className="resume" src={resume} alt="sabrina resume"></img>
                    <a className="buttonResume" href={devResume} download="Sabrina Carrion Software Developer Resume"><BsFillLightningFill />Sabrina's Resume</a>
                    <Container className='m-2'>
                        {/* <img src={resume} alt="sabrina resume"></img> */}
                    </Container>
                </Col>
                <Col md={{ span: 3, offset: 3 }} className='what here'>What to put here?</Col>
            </Row>
        </Container>


    );
}