import React, {ReactNode} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";

interface CardProps {

    body?: ReactNode
    sidebar?: ReactNode
    image: string
    imgMaxHeight?: number
    children?: ReactNode
    sidebarDirection?: string
    sidebarImage?: string
    more?: boolean
}

function SectionCard(props: CardProps) {

    let sidebar = <span/>
    if (props.sidebar) {
        sidebar = (
            <div
                className={`section-card-slide section-card-slide-${props.sidebarDirection ? props.sidebarDirection : "right"} section-card`}>
                <div className="section-card-contents">
                    {props.sidebarImage ?
                        <div className="section-card-image-container"
                             style={props.imgMaxHeight ? {maxHeight: props.imgMaxHeight} : {}}>
                            <img src={props.image} alt=""
                                 className=""/>
                        </div> : <span/>}
                    <div className="section-card-bottom align-left">
                        {props.sidebar}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="section-content-small section-card">
            {sidebar}
            <div className="section-card-contents">
                <div className="section-card-image-container"
                     style={props.imgMaxHeight ? {maxHeight: props.imgMaxHeight} : {}}>
                    <img src={props.image} alt=""
                         className=""/>
                </div>
                <div className="section-card-bottom align-left section-content-valign">
                    {props.body ? props.body : props.children}
                    {
                        props.more ?
                            <div className="section-content-valign-bottom">
                                {props.sidebarDirection === "left" ?
                                    <FontAwesomeIcon icon={faArrowLeft}/> :
                                    <div className="align-right"><FontAwesomeIcon icon={faArrowRight}/></div>
                                }
                            </div>
                            : <div/>
                    }
                </div>

            </div>
        </div>
    )


}

export {SectionCard}