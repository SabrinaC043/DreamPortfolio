
import f3Logo from '../../assets/images/fantastic3.png';
import sabrina from '../../assets/images/sabrina.jpg'
// import sabrina from '../../assets/images/sabrina.png';
import mySql from '../../assets/images/mySql.png';
import mernLogo from '../../assets/images/mernLogo.png';
import dichotomy from '../../assets/images/dichotomy.png';
import violadavis from '../../assets/images/violadavis.jpeg';
import './aboutsab.css';



export default function About() {

    return (

        <section className='aboutSab' >
            <div className="midSection">
                <div className="porfolioImg">
                    <img className="sabrina my-3" src={sabrina} alt="software developer" />
                </div>


                <section className="introSummary">
                    <div className="about mt-3">
                        <p> Hi, Sabrina Carrion here and this is my portfolio for my striking career in Software Development. With over a decade of pharmaceutical technology and startup-experience, I have prepared for the level of excellence and accuracy required to execute as a Software Developer. </p> <p>My past career as a Learning and Development Specialist positioned me to collaborate with folks from the software development field, cyber security and data compliance. </p>
                        <p>I discovered Software developers were always learning new information and practiced coding daily to hone their skills. This is what grabbed my heart and paved a new way for a great career. I believe in constantly learning and making code functional and elegant.</p>
                    </div>



                    <div className='skills mt-5' >
                        <h5><i>Striking Skills</i></h5>


                        <img src={f3Logo} alt="htmljslogo" width={80} />

                        <img src={mySql} alt="mySQL" width={70} />


                        <img src={mernLogo} alt="mernLogo" width={100} />



                    </div>
                </section>
            </div>
            <section className="core">
                <section className="favorites my-2 mx-2">
                    <div>
                        {/* <h6>Lorem Ipsum </h6> */}

                    </div>
                    <img src={dichotomy} alt="dichotomy of leadership book" width={100} />

                    <img src={violadavis} alt="finding me autobiography" width={100} />
                </section>
                <section className="mission">
                    <p>Mission</p>
                    <p> My mission is to contribute to society in a meaningful way by pursuing my passion as a full stack developer. </p>
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
                            Software Trainer
                        </li>

                    </ul>
                </section>
            </section>
        </section >
    )
}
