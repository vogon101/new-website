import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import {Col, Row, Container, Nav} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faAngleDoubleDown, faRss} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {FadeInSection} from "./FadeInContainer";

function App() {
    function DownArrow(section: String, name: String) {
        return (
            <a href={"#" + section} className="section-bottom">
                <div><FontAwesomeIcon icon={faAngleDoubleDown} size="2x"/></div>
            </a>
        );

    }

    return (
        <div className="App">
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand href="#home" className="fp-text-dark">Freddie Poser</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href="https://twitter.com/freddie_poser"><FontAwesomeIcon className="fp-text-dark"
                                                                                        icon={faTwitter}
                                                                                        size="2x"/></Nav.Link>
                    <Nav.Link href="https://github.com/vogon101"><FontAwesomeIcon className="fp-text-dark"
                                                                                  icon={faGithub} size="2x"/></Nav.Link>
                    <Nav.Link href="https://linkedin.com/in/freddie-poser"><FontAwesomeIcon className="fp-text-dark"
                                                                                            icon={faLinkedin}
                                                                                            size="2x"/></Nav.Link>
                    <Nav.Link href="https://blog.vogonjeltz.com"><FontAwesomeIcon className="fp-text-dark" icon={faRss}
                                                                                  size="2x"/></Nav.Link>
                </Navbar.Collapse>
            </Navbar>
            <header className="App-header" id="home">
                <h1>Freddie Poser</h1>
                <FadeInSection>
                    <Container className="subheader">
                        <Col sm={12}>
                            <p className="subheader">Politics & Computers</p>
                        </Col>
                    </Container>
                </FadeInSection>
                {DownArrow("about", "")}
            </header>
            <div className="Section fp-text-dark" id="about">
                <Container>
                    <FadeInSection>
                        <Container>
                            <h1>About Me</h1>
                            <Row>
                                <Col sm={12}>
                                    <p>
                                        This is something about me here.
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </FadeInSection>
                    {DownArrow("contact", "Contact Me")}
                </Container>
            </div>

            <div className="Section fp-text-dark" id="contact">
                <FadeInSection>
                    <Container>
                        <h1>Contact Me</h1>
                        <p>
                            This is something about me here.
                        </p>
                    </Container>
                </FadeInSection>
            </div>

        </div>
    );
}

export default App;
