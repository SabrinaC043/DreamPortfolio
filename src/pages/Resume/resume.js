
import devResume from '../../assets/images/devResume.pdf';
import resume from '../../assets/images/resume1.png';
import "./resume.css";
import { BsFillLightningFill } from "react-icons/bs";
export default function Resume() {

    return (
        <div className="resumePage">
            <div className="quote">
                <i> "As long as I have air in my lungs, I pursue excellence and world changing feats. Even if I do not change the world, I change myself. I am great and beyond capable of reaching my goals."
                    -Sabrina
                </i>
            </div>
            <section className="centerResume">

                <div className="pdfResume">
                    <img className="resumeImg" src={resume} alt="sabrina resume"></img>
                    <a className="buttonResume" href={devResume} download="Sabrina Carrion Software Developer Resume"><BsFillLightningFill /> Sabrina Software Developer</a>
                </div>

            </section>
        </div>

    );
}