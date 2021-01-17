import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import { Nav} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faAngleDoubleDown, faRss} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {FadeInSection} from "./components/FadeInContainer";
import {AboutSection} from "./sections/AboutSection";
import {ProjectsSection} from "./sections/ProjectsSection";
import {SkillsSection} from "./sections/SkillsSection";

function App() {
    function DownArrow(section: String) {
        return (
            <a href={"#" + section} className="section-bottom">
                <div><FontAwesomeIcon icon={faAngleDoubleDown} size="2x"/></div>
            </a>
        );

    }

    const appRef = React.createRef<HTMLDivElement>()
    let timer = setTimeout(() => {}, 0)

    window.addEventListener("scroll", (event) => {
        clearTimeout(timer)
        if (!appRef.current?.classList.contains("no-hover")) {
            appRef.current?.classList.add("no-hover")
        }
        timer = setTimeout(() => appRef.current?.classList.remove("no-hover"), 200)
    }, false)

    return (
        <div className="App" ref={appRef}>
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
            <header className="App-header" id="home">
                <h1>Freddie Poser</h1>
                <FadeInSection>
                            <p className="subheader">Politics & Computers</p>
                </FadeInSection>
                <div className="force-bottom">
                    {DownArrow("about")}
                </div>
            </header>
            <div className="Section fp-text-dark" id="about">
                <FadeInSection>
                    <AboutSection/>
                </FadeInSection>
                <div className="break-small"/>
                {DownArrow("skill")}
            </div>

            <div className="Section section-dark" id="skill">
                <FadeInSection>
                    <h1>Skills & Achievements</h1>
                    <SkillsSection/>
                </FadeInSection>
                <div className="break-small"/>
                {DownArrow("projects")}
            </div>

            <div className="Section fp-text-dark" id="projects">
                <FadeInSection>
                    <h1>Projects</h1>
                    <ProjectsSection/>
                </FadeInSection>
            </div>

        </div>
    );
}

export default App;
