import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './contact.css';

export default function Contact() {
    return (
        <div className=" contactMe mt-3">
            <a href="mailto:SabrinaCarrion43@gmail.com" className="email" >
                <MdEmail size="50px" /> </a>

            <a
                href="https://github.com/SabrinaC043"
                className="gitHub"
            >
                <FaGithub size="50px" />
            </a>

            <a
                href="https://www.linkedin.com/in/sabrina-carrion-b1260a71/"
                className="linkedin"
            >
                <FaLinkedin size="50px" />
            </a>




        </div >
    );
}
