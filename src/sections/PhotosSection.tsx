import React from "react";
import {PhotosCard} from "../components/PhotosCard";
import logo from "../img/watermark-black.png"

export interface PhotoDefinition {
    name: string
    dir: string
    count: number
    headerimg: number
    description: string
}

type PhotosProps = {
    photos: Array<PhotoDefinition>
}

function PhotosSection({photos}: PhotosProps) {

    return (
        <div className="section-content">
            <div className="photos-header-logo-container">
                <img src={logo} className="photos-header-logo" alt="Freddie Poser Photography logo"/>
            </div>
            <h1>Photography Portfolio</h1>
            <div className="photos-section">
                {photos.map((v, i, a) => <PhotosCard definition={v} index={i}/>)}
            </div>
        </div>
    )

}

export {PhotosSection};
