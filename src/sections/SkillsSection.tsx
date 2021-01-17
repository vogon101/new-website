import React from "react";
import progimg from "../img/programming2.png"
import unionimg from "../img/union.jpg"
import {faCode, faDatabase} from "@fortawesome/free-solid-svg-icons";
import {faGitAlt, faJava, faPhp, faPython, faReact} from "@fortawesome/free-brands-svg-icons";
import {Language} from "../components/Language";
import {SectionCard} from "../components/SectionCard";

function SkillsSection() {
    return (<div className="section-content">

        <SectionCard image={progimg} more imgMaxHeight={200} sidebar={
            <div className="align-left">
                Heck
            </div>
        } sidebarImage={progimg}>
            <div>
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
        </SectionCard>

        <SectionCard image={unionimg} imgMaxHeight={200}>
            <h3>Politics & Public Speaking</h3>
        </SectionCard>

        <SectionCard image={progimg} more imgMaxHeight={200} sidebar={
            <div>Goodbye</div>
        } sidebarDirection="left">
            <h3>Other</h3>
        </SectionCard>

    </div>)

}

export {SkillsSection};