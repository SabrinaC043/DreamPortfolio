
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import devResume from '../assets/images/devResume.png';

export default function Resume() {

    return (

        <Container fluid className='mt-3'>
            <Row>
                <Col md={4} className='editsize'>
                    <p>Testing Resume </p>
                    <img src={devResume} width={50} height={50} />
                    <Container fluid className='m-2'>


                    </Container>
                </Col>
                <Col md={{ span: 4, offset: 4 }} className='what here'>What to put here?</Col>
            </Row>
        </Container>


    );
}