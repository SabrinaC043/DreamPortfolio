
import devResume from '../../assets/images/sabrinadeveloperresume2023.pdf';
import resume from '../../assets/images/devImgRes.png';
import "./resume.css";
import { BsFillLightningFill } from "react-icons/bs";
export default function Resume() {

    return (
        <div className="resumePage">
            <section className="centerResume">
                <a className="buttonResume" href={devResume} download="Sabrina Carrion Software Developer">
                    <BsFillLightningFill /> Download Sabrina's Resume </a>
                <div className="pdfResume">
                    <img className="resumeImg" src={resume} alt="sabrina resume"></img>

                </div>
                <div className="quote">
                    <i> " Discipline is the bridge between goals and accomplishment."
                        -Mother Theresa
                    </i>
                </div>
            </section>
        </div>

    );
}