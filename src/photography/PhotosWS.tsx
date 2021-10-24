import React, {useEffect, useState} from "react";
import {FPNavbar} from "../components/FPNavbar";
import {PhotoDefinition, PhotosSection} from "../sections/PhotosSection";
import {FadeInSection} from "../components/FadeInContainer";
import {PHOTOS_BASE, PHOTOS_INDEX} from "../setup";
import {Route, useRouteMatch} from "react-router-dom";
import Switch from "react-bootstrap/Switch";
import {PhotoGroupPage} from "./PhotoGroupPage";
import {Helmet} from "react-helmet";

function PhotosWS() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState(Array<PhotoDefinition>());
    const {path, url} = useRouteMatch();

    useEffect(() => {
        fetch(PHOTOS_BASE + PHOTOS_INDEX)
            .then(response => response.json())
            .then(jsonData => {
                console.log(jsonData)
                setItems(jsonData["photos"])
                setIsLoaded(true)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])


    return (

        <div>
            <Helmet>
                <title>Freddie Poser</title>
            </Helmet>
            <FPNavbar/>
            <Switch>
                <Route exact path={path}>
                    <div className="Section">
                        <FadeInSection>
                            {isLoaded ? <PhotosSection photos={items}/> : <div>Loading</div>}
                        </FadeInSection>
                    </div>
                </Route>
                <Route path={`${path}/:sectionID`}>
                    <div className="Section">
                        <FadeInSection>
                            {isLoaded ? <PhotoGroupPage photos={items}/> : <div>Loading</div>}
                        </FadeInSection>
                    </div>
                </Route>
            </Switch>

        </div>
    )

}

export {PhotosWS}