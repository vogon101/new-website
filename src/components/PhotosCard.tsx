import React from "react";
import {PhotoDefinition} from "../sections/PhotosSection";
import {SectionCard} from "./SectionCard";
import {getPhotoGetter} from "../utils";

export interface PhotosCardProps {
    definition: PhotoDefinition
    index: number
}

export function PhotosCard(props: PhotosCardProps) {

    const def = props.definition

    const getPhoto = getPhotoGetter(def.dir);

    return (
        <a href={"/photos/" + props.index}>
            <SectionCard image={getPhoto(def.headerimg)} imgMaxHeight={500}>
                <h3>{def.name}</h3>
            </SectionCard>
        </a>
    )

}
