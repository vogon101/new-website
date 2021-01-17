import React from "react";
import progimg from "./img/programming.webp"
import profilePic from "./img/rome.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode, faDatabase, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faGit, faGitAlt, faJava, faJs, faPhp, faPython, faReact} from "@fortawesome/free-brands-svg-icons";
import {Language} from "./Language";
import {FadeInSection} from "./FadeInContainer";

function SkillsSection() {
    return (<div className="section-content">
        <div className="section-content-large align-left">
            <h1>Skills & Achievements</h1>

        </div>
        <div className="section-content-small section-card">
            <img src={progimg} alt="Me!" className=""/>
            <div className="section-card-bottom align-left">
                <h3>Programming</h3>
                <div>
                    <Language icon={faPython} name="Python" ability="Very Experienced"/>
                    <Language icon={faJava} name="Java" ability="Highly Proficient"/>
                    <Language icon={faCode} name="Scala" ability="Very Experienced"/>
                    <Language icon={faPhp} name="PHP" ability="Proficient"/>
                    <Language icon={faReact} name={"React & TypeScript"}/>
                    <Language icon={faCode} name="C"/>
                </div>
                <br/>
                <h4>Tools</h4>
                <div>
                    <Language icon={faDatabase} name="SQL"/>
                    <Language icon={faGitAlt} name="Git"/>
                </div>
            </div>


        </div>

    </div>)

}

export {SkillsSection};