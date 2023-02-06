import React, { useState } from 'react';
import social from '../../assets/images/socialSpace.png';
import regex from '../../assets/images/regex.png';
import conImg from "../../assets/images/connectKid.png";
import Carousel from 'react-bootstrap/Carousel';
import notAvg from "../../assets/images/notYour.png";
import Badge from 'react-bootstrap/Badge';
// import Card from 'react-bootstrap/Card';
import './project.css';

export default function Project() {
    const [index, setIndex] = useState(0);
    const pickSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    return (

        <section className="projects" >
            <section className="optionBadges">
                <Badge bg="dark"> Summary

                </Badge>
            </section>
            <Carousel activeIndex={index} onSelect={pickSelect}>
                <Carousel.Item>
                    <img
                        className="carouselCards col-7 mx-2 w-100"
                        src={social}
                        alt="Space Invaders social project slide one" />
                    <Carousel.Caption>
                        <h2> Project Slides</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carouselCards col-7 mx-2 w-100"
                        src={notAvg}
                        alt="Not your average book project slide two"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carouselCards col-7 mx-2 w-100"
                        src={conImg}
                        alt="Connect Kid project slide three"
                    />

                </Carousel.Item>
            </Carousel>
        </section>

    );



            /* <section className="cardsLeft">
                <Card className="col-4 my-2" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={social} />
                    <Card.Body>
                        <Card.Title>Space Invaders</Card.Title>
                        <Card.Text>
                            A social app with the ability to create and save events and messages to a calendar. Events such as breweries, live concerts and ticketMaster linked right in. There is an add "Event Section" at the bottom for the user to save past events with there own memories/details.


                        </Card.Text>
                        <Card.Link href="https://dylangriess.github.io/Project1-Social-Calendar/" variant="primary">Social Space Invaders</Card.Link>
                    </Card.Body>
                </Card>

                <Card className="col-4 my-2" style={{ width: '18rem' }}>
                    <Card.Img variant="middle" src={notAvg} />
                    <Card.Body>
                        <Card.Title>Not Your Average Bookies</Card.Title>
                        <Card.Text>
                            Website designed for all readers with the goal of spending less time searching for a book and more time reading. We asked ourselves, what is the hardest part about reading? The act itself, it has foundational importance is promoting literacy in America in order to assist in securing a better future for the children.
                        </Card.Text>
                        <Card.Link href="https://github.com/myang5t3r/NotYourAverageBookies" variant="secondary">Bookies</Card.Link>
                    </Card.Body>
                </Card>
            </section> */}
{/* <section className="cardsRight">
                <Card className="col-4 my-2" style={{ width: '18rem' }}>
                    <Card.Img variant="bottom" src={regex} />
                    <Card.Body>
                        <Card.Title>Regular Expressions</Card.Title>
                        <Card.Text>
                            In this tutorial, we will review "regular expressions" or 'regex' for an email address.
                        </Card.Text>
                        <Card.Link href="https://gist.github.com/SabrinaC043/f9f2b3b53251e459a741e49ef9c01179" variant="quaternary">Regular Expressions Tutorial</Card.Link>
                    </Card.Body>
                </Card>

                <Card className="col-4 my-2" style={{ width: '18rem' }}>
                    <Card.Img variant="bottom" src={conImg} />
                    <Card.Body>
                        <Card.Title>ConnectKid</Card.Title>
                        <Card.Text>
                            Parent app in order to connect with other parents' and children within their community for social events. This application works with parents' schedules and allows for virtual meetups and in person events. All of the events are child friendly and focus on inclusivity so there are autism and wheelchair accessible events. With the goal of honing interpersonal skills.
                        </Card.Text>
                        <Card.Link href="https://thawing-woodland-41631.herokuapp.com/" variant="tertiary">ConnectKid</Card.Link>
                    </Card.Body>
                </Card>

            </section> */}
