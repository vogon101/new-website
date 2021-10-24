import React from 'react';
import './App.css';

import {PersonalWS} from "./PersonalWS";
import {BrowserRouter, Route} from "react-router-dom";
import {PhotosWS} from "./photography/PhotosWS";

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

            </div>
        </BrowserRouter>
    );
}

export default App;
