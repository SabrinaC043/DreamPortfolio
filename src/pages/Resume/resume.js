
import devResume from '../../assets/images/devResume.pdf';
import resume from '../../assets/images/resume1.png';
import "./resume.css";
import { BsFillLightningFill } from "react-icons/bs";
export default function Resume() {

    return (
        <div className="resumePage">
            <section className="centerResume">

                <div className="pdfResume">
                    <img className="resumeImg" src={resume} alt="sabrina resume"></img>
                    <a className="buttonResume" href={devResume} download="Sabrina Carrion Software Developer Resume"><BsFillLightningFill /> Sabrina Software Developer</a>
                </div>
            </section>
        </div>

    );
}