import React, { useState } from "react";
import "./project.css";

//carousel/cards imports and buttons
import conImg from "../../assets/images/connectKid.png";
import Carousel from "react-bootstrap/Carousel";
import notAvg from "../../assets/images/notYour.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// project summary image imports
import social from "../../assets/images/socialSpace.png";
import socialSlide from "../../assets/images/socialslide.png";
import bookChart from "../../assets/images/bookChart.png";
import codeKid from "../../assets/images/codeKid.png";
import android from '../../assets/images/android.png';


import notYourGenre from "../../assets/images/notYourGenre.png";
var space = "https://dylangriess.github.io/Project1-Social-Calendar/";
var books = "https://github.com/myang5t3r/NotYourAverageBookies";
var kid = "";


export default function Project() {
    const [index, setIndex] = useState(0);
    const pickSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <section className="projects">
            <Carousel activeIndex={index} onSelect={pickSelect}>
                <Carousel.Item>
                    <img
                        className="carouselCards col-7 mx-2 w-100"
                        src={social}
                        alt="Space Invaders social project slide one"
                    />
                    <Carousel.Caption>
                        <h2> Project Slides</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carouselCards my-2 w-100"
                        src={notAvg}
                        alt="Not your average book project slide two"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carouselCards mx-2 my-2 w-100"
                        src={conImg}
                        alt="Connect Kid project slide three"
                    />
                </Carousel.Item>
            </Carousel>
            <section className="projectSummaries my-2 mx-5">
                <h3>Project Summaries</h3>

                <span className="introductionCards">
                    <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={socialSlide} />
                        <Card.Body>
                            <Card.Title>Space Invaders</Card.Title>
                            <Card.Text>
                                Developer focused on front end CSS and HTML components to
                                integrate tables and dropdowns utilizing Bootstrap. Met deadline
                                with AGILE methodology implememtation.
                            </Card.Text>

                            <Button
                                onSelect={pickSelect}
                                href="https://dylangriess.github.io/Project1-Social-Calendar/"
                                variant="primary"
                                src={space}
                            >
                                {" "}
                                Social Calendar
                            </Button>

                            <Button
                                variant="secondary"
                                href="https://docs.google.com/presentation/d/1JaeyTNP4SBnC7YoqGUrEraO2fO4N0fXJtholC6xtKG0/view"
                            >
                                Slides
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={bookChart} />
                        <Card.Body>
                            <Card.Title>Not Your Average Book </Card.Title>
                            <Card.Text>
                                Developer focused on front end CSS and HTML components to
                                integrate tables and dropdowns utilizing Handlebars and
                                Bootstrap. Overcame learning curve when linking front end to
                                back end through seeded data.
                            </Card.Text>
                            <Button
                                onSelect={pickSelect}
                                href="https://github.com/myang5t3r/NotYourAverageBookies/"
                                variant="primary"
                                src={books}
                            >
                                Books
                            </Button>

                            <Button
                                variant="secondary"
                                href="https://docs.google.com/presentation/d/1wjY8qQjeEi5Balw52prBQnAtRsiHsLfOK_QaR-1NIpw/view"
                            >
                                Slides
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: "18rem" }}>
                        <Card.Body>
                            <Card.Img variant="middle" width="200px" src={codeKid} />
                            <Card.Title> Connect Kid </Card.Title>
                            <Card.Text>
                                Developer focused on back end development specifically with
                                creating seeds files, manipulation of models and defining
                                typeDefs as well as Resolvers.
                            </Card.Text>
                            <Button
                                onSelect={pickSelect}
                                href="https://github.com/SabrinaC043/ConnectKid"
                                variant="primary"
                            >
                                ConnectKid
                            </Button>
                            <Button
                                onSelect={pickSelect}
                                href="https://docs.google.com/presentation/d/12XxNXT-uhpiqUjY4bggf-EDnKqGiD86Yo_-AZ2Ur2NU/edit#slide=id.p"
                                variant="secondary"
                            >
                                Slides
                            </Button>
                        </Card.Body>
                    </Card>
                </span>
            </section>
            <section className="businessFocus  my-2 col-3">
                <h3> Business Projects</h3>
                <h4>VocabApp</h4>
                <img className="icons" src={android} />

                <h6>
                    Type: Android Application
                    Launch Date: TBD
                </h6>
                <text> Educational application that is going to be launched into Google Marketplace. Game based design with matching and vocabulary recall for practical and fun learning.
                </text>
            </section>
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
                </section> */
}
{
    /* <section className="cardsRight">
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
    
                </section> */
}
