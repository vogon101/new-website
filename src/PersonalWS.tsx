import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons";
import {FadeInSection} from "./components/FadeInContainer";
import {AboutSection} from "./sections/AboutSection";
import {SkillsSection} from "./sections/SkillsSection";
import {ProjectsSection} from "./sections/ProjectsSection";
import React, {RefObject} from "react";
import {FPNavbar} from "./components/FPNavbar";
import {Helmet} from "react-helmet";

function PersonalWS(props: { appRef: RefObject<HTMLDivElement> }) {

    function DownArrow(section: String) {
        return (
            <a href={"#" + section} className="section-bottom">
                <div><FontAwesomeIcon icon={faAngleDoubleDown} size="2x"/></div>
            </a>
        );

    }

    let timer = setTimeout(() => {
    }, 0)
    React.useEffect(() => {
            window.addEventListener("scroll", (event) => {
                clearTimeout(timer)
                if (!props.appRef.current?.classList.contains("no-hover")) {
                    props.appRef.current?.classList.add("no-hover")
                }
                timer = setTimeout(() => props.appRef.current?.classList.remove("no-hover"), 200)
            }, false)
            return () => clearTimeout(timer)
        }
    )

    return (<div>
        <Helmet>
            <title>Freddie Poser</title>
        </Helmet>
        <FPNavbar/>
        <header className="App-header" id="home">
            <h1>Freddie Poser</h1>
            <FadeInSection>
                <p className="subheader">Computer Science and Management Student</p>
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
    </div>)

}

export {PersonalWS}