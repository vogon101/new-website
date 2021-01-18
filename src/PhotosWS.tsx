import React, {useEffect, useState} from "react";
import {FPNavbar} from "./components/FPNavbar";
import {PhotoDefinition, PhotosSection} from "./sections/PhotosSection";
import {FadeInSection} from "./components/FadeInContainer";
import {PHOTOS_BASE, PHOTOS_INDEX} from "./setup";

function PhotosWS() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState(Array<PhotoDefinition>());

    useEffect(() => {
        fetch(PHOTOS_BASE + PHOTOS_INDEX)
            .then(response => response.json())
            .then(jsonData => {
                setIsLoaded(true)
                setItems(jsonData["photos"])
            })
            .catch(error => {
                console.error(error)
            })
    }, [])


    return (
        <div>
            <FPNavbar/>
            <div className="Section">
            <FadeInSection>
            {isLoaded ? <PhotosSection photos={items}/>: <div>Loading</div>}
            </FadeInSection>
            </div>
        </div>
    )

}

export {PhotosWS}