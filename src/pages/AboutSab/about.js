
import f3Logo from '../../assets/images/fantastic3.png';
import sabrina from '../../assets/images/sabrina.png';
import mySql from '../../assets/images/mySql.png';
import mernLogo from '../../assets/images/mernLogo.png';
import dichotomy from '../../assets/images/dichotomy.png';
import violadavis from '../../assets/images/violadavis.jpeg';
import './aboutsab.css';



export default function About() {

    return (

        <section className='aboutSab' >
            <div className="midSection">
                <div className="portfolioImg">
                    <img className="sabrina" src={sabrina} alt="sabrina" width={100} />
                </div>
                <section className="favorites">
                    <div className="dichotomy">
                        <img src={dichotomy} alt="dichotomy of leadership book" width={100} />
                    </div>
                    <div className="findingMe">
                        <img src={violadavis} alt="finding me autobiography" width={100} />
                    </div>
                </section>
                <section className="introSummary">
                    <div className="about mt-3">
                        <p>I am elated to share insight as to who Sabrina Carrion is and how my life journey has brought me into the striking career of Software Development. Over a decade of pharmaceutical technology startups and pharmaceutical experience, has prepared me for the level of excellence required to execute as a Software Developer. </p> <p>My career as a Learning and Development Specialist, granted the opportunity to collaborate with folks from the software development field. I was eager to unravel more about this exciting and creative industry. </p>
                        <p>I discovered Software developers were always learning new information and practiced coding daily to hone their skills. This is what grabbed my heart and paved a new way for a great career. I believe in constantly learning and with a growth mindset, nothing is impossible! Dive into this app for more insight into my Software Development achievements.</p>
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
        </section>
    )
}
