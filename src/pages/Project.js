import social from "../assets/images/socialSpace.png";
import conImg from "../assets/images/connectKid.png";
import Container from 'react-bootstrap/Container';
// import Carousel from 'react-bootstrap/Carousel';
import notAvg from "../assets/images/notYour.png";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


export default function Project() {
    return (
        <Container>

            <Card className="col-4 my-2" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={social} />
                <Card.Body>
                    <Card.Title>Space Invaders</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="https://dylangriess.github.io/Project1-Social-Calendar/" variant="primary">Space Invaders Project</Card.Link>
                </Card.Body>
            </Card>

            <Card className="col-4" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={notAvg} />
                <Card.Body>
                    <Card.Title>Not Your Average Bookies</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="https://github.com/myang5t3r/NotYourAverageBookies" variant="primary">Bookies Project</Card.Link>
                </Card.Body>
            </Card>

            <Card className="col-4 my-2" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={conImg} />
                <Card.Body>
                    <Card.Title>ConnectKid</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="https://thawing-woodland-41631.herokuapp.com/" variant="primary">ConnectKid Project</Card.Link>
                </Card.Body>
            </Card>
        </Container>

    );
}


