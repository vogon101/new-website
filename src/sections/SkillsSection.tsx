import React from "react";
import progimg from "../img/programming2.png"
import unionimg from "../img/union.jpg"
import cameraimg from "../img/camera.jpg"
import {
    faCalculator,
    faChartLine,
    faCode, faComment,
    faDatabase,
    faGraduationCap, faMicroscope, faPlay,
    faTable, faUniversity, faVoteYea
} from "@fortawesome/free-solid-svg-icons";
import {
    faGitAlt,
    faGithub,
    faJava,
    faLinux,
    faPhp,
    faPython,
    faReact,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";
import {Language} from "../components/Language";
import {SectionCard} from "../components/SectionCard";
import {Ili} from "../components/Ili";
import {Ia} from "../components/Ia";

function SkillsSection() {
    return (<div className="section-content">

        <SectionCard image={progimg} more imgMaxHeight={200} sidebar={
            <div className="align-left section-content-valign">
                <div className="section-content-valign-top">
                    <p>
                        I've been programming for ten years. I've worked in over a dozen languages on projects varying
                        in size from a few lines to tens of thousands.
                    </p>
                    <hr/>
                    <h4>Python Libraries</h4>
                    <p className="small">
                        I have taken data science and machine learning courses at University as well as used all of
                        these
                        tools in personal projects.
                    </p>
                    <div>
                        <Language icon={faChartLine} name="Matplotlib"/>
                        <Language icon={faCalculator} name="Numpy"/>
                        <Language icon={faTable} name="Pandas"/>
                        <Language icon={faGraduationCap} name="Tensorflow"/>
                        <Language icon={faMicroscope} name="Scikit Learn" noLine/>
                    </div>
                </div>
                <div className="section-content-valign-bottom">
                    <a href="https://github.com/vogon101" className="link-highlight">
                        <Language noLine icon={faGithub} name="See more of my projects on Github"/>
                    </a>
                </div>
            </div>
        }>
            <div>
                <h3>Programming</h3>
                <p className="small font-italic">Languages I have experience in:</p>
                <div>
                    <Language icon={faCode} name="Scala" ability="Very Experienced"/>
                    <Language icon={faPython} name="Python" ability="Highly Proficient"/>
                    <Language icon={faJava} name="Java" ability="Highly Proficient"/>
                    <Language icon={faReact} name="React & TypeScript"/>
                    <Language icon={faPhp} name="PHP"/>
                    <Language icon={faCode} name="C" noLine/>
                </div>
                <br/>
                <h4>Tools</h4>
                <div>
                    <Language icon={faDatabase} name="SQL"/>
                    <Language icon={faGitAlt} name="Git"/>
                    <Language icon={faLinux} name="Linux" noLine/>
                </div>
            </div>
        </SectionCard>

        <SectionCard image={unionimg} imgMaxHeight={200}>
            <h3>Politics & Public Speaking</h3>
            <ul className="fa-ul">
                <Ili icon={faVoteYea}>
                    Chair, <a href="https://cula.org.uk" className="link-highlight">Cambridge University Liberal
                    Association</a>
                    <p className="align-right small font-italic font-weight-bold">2020-21</p>

                </Ili>

                <Ili icon={faUniversity}>
                    University Councillor, <a
                    href="https://www.governance.cam.ac.uk/committees/council/Pages/about.aspx"
                    className="link-highlight">University of Cambridge</a>
                    <p className="align-right small font-italic font-weight-bold">2020-21</p>

                </Ili>

                <Ili icon={faComment}>
                    Cambridge Union Debates
                    <ul>
                        <li>
                            No Confidence
                            <span className="float-right">
                                    <span className="align-right pad-hor"><Ia icon={faPlay}
                                                                      href={"https://www.youtube.com/watch?v=tce1Ad2wI-8"}/></span>
                                    <span className="small font-italic font-weight-bold">Oct 2020</span>
                                </span>
                        </li>
                        <li>
                            THR New Labour
                            <span className="float-right">
                                    <span className="align-right pad-hor"><Ia icon={faPlay}
                                                                      href={"https://www.youtube.com/watch?v=36ct_-qIOmU"}/></span>
                                    <span className="small font-italic font-weight-bold">Feb 2020</span>
                                </span>
                        </li>
                        <li>
                            No Confidence
                            <span className="float-right">
                                    <span className="small font-italic font-weight-bold">Oct 2020</span>
                                </span>
                        </li>
                    </ul>
                </Ili>
                <Ili icon={faComment}>
                    Other Speaking & Press
                    <ul>
                        <li>
                            Interviewed on ITV News Anglia
                            <span className="float-right small font-italic font-weight-bold">Oct 2020</span>
                        </li>
                        <li>
                            Cambridge "No-Brexit" Rally
                            <span className="float-right">
                                    <span className="align-right pad-hor">
                                        <Ia icon={faPlay} href={"https://www.youtube.com/watch?v=pL5IcZuW2RQ"}/>
                                    </span>
                                    <span className="small font-italic font-weight-bold">Oct 2019</span>
                            </span>
                        </li>
                    </ul>
                </Ili>
            </ul>

        </SectionCard>

        <SectionCard image={cameraimg} more imgMaxHeight={200} sidebar={
            <div>Goodbye</div>
        } sidebarDirection="left">
            <h3>Other</h3>
        </SectionCard>

    </div>)

}

export
{
    SkillsSection
};