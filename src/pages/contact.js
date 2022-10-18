import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,

    // faEnvelope,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
    return (
        <Container fluid className="mt-3">
            <Row>
                <Col md={4} className="contactMe">
                    <ul>
                        <li>
                            <a href="mailto:SabrinaCarrion43@gmail.com">Email Sabrina </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/SabrinaC043"
                                className="gitHub social"
                            >
                                <FontAwesomeIcon icon={faGithub} size="2x" />{" "}
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.linkedin.com/in/sabrina-carrion-b1260a71/"
                                className="linkedin social"
                            >
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
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
