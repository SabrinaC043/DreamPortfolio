
import f3Logo from '../../assets/images/fantastic3.png';
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
                {/* <div className="portfolioImg">
                    {/* <img className="sabrina" src={sabrina} alt="sabrina" /> */}
                {/* </div> */}

                <section className="introSummary">
                    <div className="about mt-3">
                        <p>I am elated to share insight as to who Sabrina Carrion is and my striking career in Software Development. With over a decade of pharmaceutical technology and startup-experience, I have prepared for the level of excellence and accuracy required to execute as a Software Developer. </p> <p>My past career as a Learning and Development Specialist positioned me to collaborate with folks from the software development field. After viewing their codes and platform bugs, etc. I was eager to unravel more about this exciting and creative industry. </p>
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
                <section className="favorites my-2 mx-2">
                    <div>
                        {/* <h6>Lorem Ipsum </h6> */}

                    </div>
                    <img src={dichotomy} alt="dichotomy of leadership book" width={100} />

                    <img src={violadavis} alt="finding me autobiography" width={100} />
                </section>
                <section className="mission">
                    <p>Mission</p>
                    <p> My mission is to contribute to society in a meaningful way by pursuing my passion as an application developer. </p>
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
        </section >
    )
}
