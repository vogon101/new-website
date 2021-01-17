import React, {ReactNode} from "react"
import progimg from "../img/programming.webp";
import {Language} from "./Language";
import {faGitAlt, faJava, faPhp, faPython, faReact} from "@fortawesome/free-brands-svg-icons";
import {faCode, faDatabase} from "@fortawesome/free-solid-svg-icons";

interface CardProps {

    children: ReactNode
    image: string
    imgMaxHeight?: number

}

function SectionCard(props: CardProps) {

    return (
        <div className="section-content-small section-card">
            <img src={props.image} style={props.imgMaxHeight ? {height : props.imgMaxHeight} : {}} alt="" className=""/>
            <div className="section-card-bottom align-left">
                {props.children}
            </div>
        </div>
    )


}

export {SectionCard}