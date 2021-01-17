import React from "react";
import Navbar from "react-bootstrap/Navbar";
import {Nav} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faRss} from "@fortawesome/free-solid-svg-icons";

function PhotosWS() {

    const dirs = new Map([
        ["test", 0]
        ]    )

    return (
        <div>
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand href="#home" className="fp-text-dark">Freddie Poser</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
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

        </div>
    )

}

export {PhotosWS}