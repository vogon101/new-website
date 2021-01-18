import React from "react";
import {PhotoDefinition} from "../sections/PhotosSection";
import {SectionCard} from "./SectionCard";
import {PHOTOS_BASE, PHOTOS_EXT} from "../setup";

export interface PhotosCardProps {
    definition: PhotoDefinition
}

export function PhotosCard(props: PhotosCardProps) {

    const def = props.definition

    const base = PHOTOS_BASE + def.dir + "/"

    function getPhoto(num: number) {
        return `${base}${num.toString().padStart(2, "0")}${PHOTOS_EXT}`
    }

    return (
        <SectionCard image={getPhoto(def.headerimg)} imgMaxHeight={500}>
            <h3>{def.name}</h3>
        </SectionCard>
    )

}
