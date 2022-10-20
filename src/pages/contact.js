import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
        <Container fluid className="mt-3">
            <Row>
                <Col md={4} className="contactMe">
                    <ul>
                        <li>
                            <a href="mailto:SabrinaCarrion43@gmail.com"
                                className="email social"
                            > <MdEmail size="50px" />
                            </a>
                        </li>



                        <li>
                            <a
                                href="https://github.com/SabrinaC043"
                                className="gitHub social"
                            >
                                <FaGithub size="50px" />
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.linkedin.com/in/sabrina-carrion-b1260a71/"
                                className="linkedin social"
                            >
                                <FaLinkedin size="50px" />
                            </a>
                        </li>
                    </ul>
                </Col>
                <Col md={{ span: 4, offset: 4 }} className="Brainstorm">
                    2 of 2
                </Col>
            </Row>
        </Container>
    );
}
