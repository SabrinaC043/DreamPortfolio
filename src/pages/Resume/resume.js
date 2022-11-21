
import devResume from '../../assets/images/resumeDev.pdf';
import resume from '../../assets/images/resume2022.jpg';
import "./resume.css";
import { BsFillLightningFill } from "react-icons/bs";
export default function Resume() {

    return (
        <div className="resumePage">
            <section className="centerResume">
                <a className="buttonResume" href={devResume} download="Sabrina Carrion software developer">
                    <BsFillLightningFill /> Download Sabrina's Resume </a>
                <div className="pdfResume">
                    <img className="resumeImg" src={resume} alt="sabrina resume"></img>

                </div>
                <div className="quote">
                    <i> " Discipline is the bridge between goals and accomplishment.”"
                        -Mother Theresa
                    </i>
                </div>
            </section>
        </div>

    );
}