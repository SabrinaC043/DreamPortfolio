
import f3Logo from '../../assets/images/fantastic3.png';
import sabrina from '../../assets/images/sabrina.jpg';
import mySql from '../../assets/images/mySql.png';
import mernLogo from '../../assets/images/mernLogo.png';
import './aboutsab.css';


export default function About() {

    return (
        <section className='aboutSab' >
            <div className="portfolioImg">
                <img src={sabrina} alt="sabrina" width={80} />
            </div>
            <section className="introSummary">
                <div className="about mt-3">
                    <p>I am elated to be able to share insight as to who Sabrina Carrion is and how my life journey has brought me into the striking career of Software Development. With my pharmaceutical industry experience; and over 9 years in pharmaceutical technology startups. </p> <p>My career as a Learning and Development Specialist, granted the opportunity to collaborate with folks from the Software Development field. I was blown away at the idea of working to contribute to the community and business as a Software Developer. </p>
                    <p>I discovered Software developers were always learning new information and practiced coding daily to hone their skills. I believe in constantly learning and with a growth mindset, nothing is impossible! Dive into this app for more insight into my Software Development achievements.</p>
                </div>



                <div className='skills mt-5' >
                    <h5><i>Striking Skills</i></h5>


                    <img src={f3Logo} alt="htmljslogo" width={80} />

                    <img src={mySql} alt="mySQL" width={70} />


                    <img src={mernLogo} alt="mernLogo" width={100} />



                </div>
            </section>
            <section className="core">
                <section className="mission">
                    <p>Mission</p>
                    <p> My mission is to contribute to society in a meaningful way by leading others through the academic discipline of pedagogy. With the goal of learning and applying pharmaceutical technologies and coding. </p>
                </section>
                <section className="values">
                    <p> Values</p>
                    <ul>
                        <li>
                            Drive
                        </li>
                        <li>
                            Authenticity
                        </li>

                        <li>
                            Integrity
                        </li>
                        <li>
                            Leader
                        </li>

                    </ul>
                </section>
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

        </section >
    )
}
