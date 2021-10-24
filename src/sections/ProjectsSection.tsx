import {ProjectItem} from "../components/ProjectItem";
import mlimg from "../img/ml.png"
import scalaimg from "../img/scala.png"
import votrimg from "../img/votr.png"

function ProjectsSection() {

    return (
        <div className="gallery">
            <ProjectItem image={mlimg} title="Machine Learning" text="Projects with machine intelligence and AI"
                         linkHref="https://learning.vogonjeltz.com/"/>
            <ProjectItem image={scalaimg} title="Scaly" text="A Scala to pyc compiler"
                         linkHref="https://github.com/vogon101/Scaly"/>
            <ProjectItem image={votrimg} title="Votr" text="An app for the 2015 General Election"
                         linkHref="https://votr.vogonjeltz.com"/>
        </div>
    );

}

export {ProjectsSection}