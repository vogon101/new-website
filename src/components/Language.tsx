import React, {ReactNode} from 'react';
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Badge} from "./Badge";
import {Ili} from "./Ili";

interface LanguageProps {
    icon: IconDefinition
    name: ReactNode
    ability?: string;
    noLine?: boolean;
    date?: ReactNode;
    iconLink?: ReactNode;
    children?:ReactNode;
}

function Language(props: LanguageProps) {


    let badge = <div/>;
    let right = !!(props.ability || props.date || props.iconLink)
    if (props.ability) {
        let color = "#445599"
        switch (props.ability) {
            case "Highly Proficient":
                color = "#22aa55"
                break
            case "Proficient":
                color = "#779933"
        }
        badge = <Badge text={props.ability} color={color}/>
    } else if (props.date) {
        badge = <div className="align-right-float small font-italic font-weight-bold">{props.date}</div>
    } else if (props.iconLink) {
        badge = <>{props.iconLink}</>
    }
    console.log(right)
    badge = right ? <div className="language-right">{badge}</div> : <div/>

    return (<div className={`Language ${props.noLine ? "language-noline" : ""}`}>
            <div className="language-left">
                <FontAwesomeIcon icon={props.icon}/> {props.name}
                {props.children ? <span className="smalltext"><br/>{props.children}</span> : <></>}
            </div>
            {badge}

        </div>
    )

}

export {Language}