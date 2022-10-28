import social from "../../assets/images/socialSpace.png";
import regex from '../../assets/images/regex.png';
import conImg from "../../assets/images/connectKid.png";
import Container from 'react-bootstrap/Container';
// import Carousel from 'react-bootstrap/Carousel';
import notAvg from "../../assets/images/notYour.png";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './project.css';

export default function Project() {
    return (
        <section className="projects" >
            <section className="cardsLeft">
                <Card className="col-4 my-2" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={social} />
                    <Card.Body>
                        <Card.Title>Space Invaders</Card.Title>
                        <Card.Text>
                            A local app that has a calendar and the ability to create and save events and messages. Events such as breweries, live concerts and etc. There is an add "Event Section" at the bottom for the user to save past events with there own memories/details.


                        </Card.Text>
                        <Card.Link href="https://dylangriess.github.io/Project1-Social-Calendar/" variant="primary">Social Space Invaders</Card.Link>
                    </Card.Body>
                </Card>

                <Card className="col-4 my-2" style={{ width: '18rem' }}>
                    <Card.Img variant="middle" src={notAvg} />
                    <Card.Body>
                        <Card.Title>Not Your Average Bookies</Card.Title>
                        <Card.Text>
                            We designed a website for all the readers of the world to spend less time searching for a book and more time reading. We asked ourselves, what is the hardest part about reading? The foundational importance is promoting literacy in America in order to assist in securing a better future for the children.
                        </Card.Text>
                        <Card.Link href="https://github.com/myang5t3r/NotYourAverageBookies" variant="secondary">Bookies</Card.Link>
                    </Card.Body>
                </Card>
            </section>
            <section className="cardsRight">
                <Card className="col-4 my-2" style={{ width: '18rem' }}>
                    <Card.Img variant="bottom" src={regex} />
                    <Card.Body>
                        <Card.Title>Regular Expressions</Card.Title>
                        <Card.Text>
                            In this tutorial, I will be explaining the regular expression or regex expression for an email.
                        </Card.Text>
                        <Card.Link href="https://gist.github.com/SabrinaC043/f9f2b3b53251e459a741e49ef9c01179" variant="quaternary">Regular Expressions Tutorial</Card.Link>
                    </Card.Body>
                </Card>

                <Card className="col-4 my-2" style={{ width: '18rem' }}>
                    <Card.Img variant="bottom" src={conImg} />
                    <Card.Body>
                        <Card.Title>ConnectKid</Card.Title>
                        <Card.Text>
                            ConnectKid is an application that parents can utilize in order to connect with other parents' and children within their community. This application works with parents' schedules and allows for virtual meetups and in person events. All of the events are child friendly and focus on inclusivity so there are autism and wheelchair accessible events and focuses on promoting interpersonal skills.
                        </Card.Text>
                        <Card.Link href="https://thawing-woodland-41631.herokuapp.com/" variant="tertiary">ConnectKid</Card.Link>
                    </Card.Body>
                </Card>

            </section>
        </section>


    );
}


