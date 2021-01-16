import {ProjectItem} from "./ProjectItem";
import profilePicture from "./img/rome.jpg"
import mlimg from "./img/ml.png"
import bwimg from "./img/bw.jpg"

function ProjectsSection() {

    return (
        <div className="gallery">
            <ProjectItem image={mlimg} title="Machine Learning" text="Projects with machine intelligence and AI"
                         linkHref="https://learning.vogonjeltz.com/"/>
            <ProjectItem image={profilePicture} title="Blog" text="" linkHref="https://blog.vogonjeltz.com"/>
        </div>
    );

}

export {ProjectsSection}