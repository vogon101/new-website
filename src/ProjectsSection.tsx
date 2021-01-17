import {ProjectItem} from "./ProjectItem";
import profilePicture from "./img/rome.jpg"
import mlimg from "./img/ml.png"
import bwimg from "./img/bw.jpg"
import scalaimg from "./img/scala.png"

function ProjectsSection() {

    return (
        <div className="gallery">
            <ProjectItem image={mlimg} title="Machine Learning" text="Projects with machine intelligence and AI"
                         linkHref="https://learning.vogonjeltz.com/"/>
            <ProjectItem image={scalaimg} title="Scaly" text="A Scala to pyc compiler" linkHref="https://github.com/vogon101/Scaly"/>
        </div>
    );

}

export {ProjectsSection}