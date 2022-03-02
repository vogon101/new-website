import React from "react";
import progimg from "../img/programming2.png"
import unionimg from "../img/union3.jpg"
import cameraimg from "../img/camera.jpg"
import {
    faCalculator,
    faCamera,
    faChartLine,
    faCode,
    faComment,
    faDatabase, faFileAlt,
    faGraduationCap,
    faMicroscope,
    faNewspaper,
    faPlay,
    faRss,
    faTable,
    faUniversity,
    faVoteYea,
    faBuilding, faTv
} from "@fortawesome/free-solid-svg-icons";
import {faGitAlt, faGithub, faJava, faLinux, faPhp, faPython, faReact} from "@fortawesome/free-brands-svg-icons";
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
                    <Language icon={faLinux} name="Linux"/>
                    <Language icon={faFileAlt} name="LateX" noLine/>
                </div>
            </div>
        </SectionCard>

        <SectionCard image={unionimg} more imgMaxHeight={200} sidebar={
            <div className="align-left section-content-valign">
                <div className="section-content-valign-top">
                    <p>
                        Elected twice by the students to sit on the University Council, the governing body of the University of Cambridge, acting as a full trustee of the University, a £3bn charity. During my term, I have focused on:
                    </p>
                    <ul>
                        <li>Pensions - as an unconflicted member I frequently contribute on discussions regarding the national pension scheme (USS) and union negotiations</li>
                        <li>University financial performance and investment – In addition to main Council, I attend the Business Committee, covering financial, investment and governance issues</li>
                    </ul>
                    <hr/>
                    <p>
                        I am an experienced and confident public speaker, having spoken a number of times a the Cambridge Union.
                    </p>


                    <p>
                        I have debated numerous well known and illustrious speakers, including cabinet ministers,
                        experienced journalists and academics.
                    </p>
                    <ul>
                        <li>
                            THR The Obama Years
                            <span className="float-right">
                                    <span className="small font-italic font-weight-bold">Oct 2021</span>
                                </span>
                        </li>
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
                                    <span className="small font-italic font-weight-bold">Oct 2019</span>
                                </span>
                        </li>
                    </ul>

                </div>
                <div className="section-content-valign-bottom">
                    <a href="https://freddieposer.substack.com/" className="link-highlight">
                        <Language noLine icon={faRss} name="Read more on my Substack"/>
                    </a>
                </div>
            </div>
        }>
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
                    <p className="align-right small font-italic font-weight-bold">2020-22</p>

                </Ili>

                <Ili icon={faComment}>
                    Cambridge Union Debates
                </Ili>
                <Ili icon={faVoteYea}>
                    <a href={"https://www.europeanmovement.co.uk/"} className="link-highlight">European Movement UK</a> - National Council Member
                </Ili>
                
                <Ili icon={faBuilding}>
                            Social Media and Volunteer lead for <a className="link-highlight" href={"https://www.pricedout.org.uk/"}>PricedOutUK</a>
                </Ili>
                <Ili icon={faTv}>
                            Appearances on GBNews to discuss housing
                            <span className="float-right">
                                    <span className="align-right pad-hor">
                                        <Ia icon={faPlay} href={"https://www.youtube.com/watch?v=f8TWiUtGVoU"}/>
                                    </span>
                            </span>
                </Ili>
                    
                
                
                <Ili icon={faComment}>
                    Other Speaking & Press
                    <ul>
                        <li>
                            Written for <a href={"https://capx.co/"} className={"link-highlight"}>CapX</a>
                            <span className="float-right">
                                    <span className="align-right pad-hor">
                                        <Ia icon={faNewspaper} href={"https://capx.co/author/freddieposer/"}/>
                                    </span>
                            </span>
                        </li>
                        <li>
                            Interviewed on ITV News Anglia
                        </li>
                        <li>
                            Cambridge "No-Brexit" Rally
                            <span className="float-right">
                                    <span className="align-right pad-hor">
                                        <Ia icon={faPlay} href={"https://www.youtube.com/watch?v=pL5IcZuW2RQ"}/>
                                    </span>
                            </span>
                        </li>
                        <li>
                            Quoted in Evening Standard
                            <span className="float-right">
                                <span className="align-right pad-hor">
                                    <Ia icon={faNewspaper}
                                        href={"https://www.standard.co.uk/insider/lib-dem-london-elections-voting-politics-b944946.html"}/>
                                </span>
                            </span>
                        </li>

                        <li>
                            Interviewed by PA - syndicated by multiple outlets
                            <span className="float-right">
                                <span className="align-right pad-hor">
                                    <Ia icon={faNewspaper}
                                        href={"https://www.theweek.co.uk/news/uk-news/954129/liberal-democrat-party-conference-drop-membership"}/>
                                </span>
                                <span className="pad-hor">
                                    <Ia icon={faNewspaper}
                                        href={"https://www.thenational.scot/news/19575781.libdem-membership-collapses-27-discontent-grows/"}/>
                                </span>
                            </span>
                        </li>

                    </ul>
                </Ili>
            </ul>

        </SectionCard>

        <SectionCard image={cameraimg} imgMaxHeight={200}>
            <h3>Other</h3>
            <ul className="fa-ul">
                <Ili icon={faCamera}>
                    <a href="/photos">Photography</a>
                    <p className="small">
                        I have photographed a number of events in Cambridge as well as done photography for the Liberal
                        Democrats
                    </p>
                </Ili>
                <Ili icon={faChartLine}>
                    Data Analysis & Reporting
                    <p className="small">
                        I have strong data analysis skills built up through both academic courses and professional experience.
                        I am able to create clear and concise reports based on a rigorous understanding of the underlying
                        facts at pace.
                    </p>
                </Ili>
            </ul>
        </SectionCard>

    </div>)

}

export
{
    SkillsSection
};