
import f3Logo from '../../assets/images/fantastic3.png';
import mySql from '../../assets/images/mySql.png';
import reactLogo from '../../assets/images/reactIcon.png';
import mernLogo from '../../assets/images/mernLogo.png';
import dichotomy from '../../assets/images/dichotomy.png';
import Carousel from 'react-bootstrap/Carousel';
import viola from '../../assets/images/violadavis.jpeg';
import brothers from '../../assets/images/brothers.jpeg';
import { useState } from 'react';
import './aboutsab.css';

export default function About() {

    return (
        <section className='aboutSab'>

            <section className="introSummary">
                <div className="about mt-3">
                    <p>I am elated to be able to share insight as to who Sabrina Carrion is and how my life journey has brought me into the striking career of Software Development. Having been in the healthcare and pharmaceutical industry for over 9 years in pharmaceutical startups. </p> <p>My career as a Learning and Development Specialist, granted the opportunity to collaborate with folks from the Software Development field. I was blown away at the idea of working to contribute to the community and business as a Software Developer. </p>
                    <p>I discovered Software developers were always learning new information and practiced coding daily to hone their skills. I believe in constantly learning and with a growth mindset, nothing is impossible! Dive into this app for more insight into my Software Development achievements.</p>
                </div>

                <div className='skills mt-5' >
                    <h5><i>Striking Skills</i></h5>


                    <img src={f3Logo} width={80} />

                    <img src={mySql} width={70} />


                    <img src={mernLogo} width={100} />



                </div>
            </section>
            <section className="mission">


                <p>Mission and Values</p>

            </section>
            {/* <Col md={{ span: 4, offset: 4 }} className='favoritessection'>
                    <Carousel>
                        <Carousel.Item interval={10000}>
                            <img
                                className="mt-5 d-block w-100"
                                src={brothers}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={10000}>
                            <img
                                className="mt-5 d-block w-100"
                                src={dichotomy}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={10000}>
                            <img
                                className="mt-5 d-block w-100"
                                src={viola}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col> */}

        </section>
    )
}




{/* <p> Mission and Values</p>
                    <br>
                    </br>
                    <p> Favorite Books</p>
                    <img src={dichotomy} width={100} height={100} /> */}