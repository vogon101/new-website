import React from 'react';
import './App.css';

import {PersonalWS} from "./PersonalWS";
import {BrowserRouter, Route} from "react-router-dom";
import {PhotosWS} from "./photography/PhotosWS";
import {Helmet} from "react-helmet";
import {FPNavbar} from "./components/FPNavbar";

function App() {

    const appRef = React.createRef<HTMLDivElement>()

    return (
        <BrowserRouter>
            <div className="App" ref={appRef}>

                <Route exact path="/">
                    <PersonalWS appRef={appRef}/>
                </Route>
                <Route path="/photos">
                    <PhotosWS/>
                </Route>
                <Route>
                    <div>
                        <Helmet>
                            <title>Freddie Poser</title>
                        </Helmet>
                        <FPNavbar/>
                        Not Found
                    </div>
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
