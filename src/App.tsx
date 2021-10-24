import React from 'react';
import './App.css';

import {PersonalWS} from "./PersonalWS";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {PhotosWS} from "./photography/PhotosWS";
import {NotFoundPage} from "./components/NotFoundPage";

function App() {

    const appRef = React.createRef<HTMLDivElement>()

    return (
        <div className="App" ref={appRef}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <PersonalWS appRef={appRef}/>
                    </Route>
                    <Route path="/photos" component={PhotosWS}/>
                    <Route path="*" exact>
                        <NotFoundPage/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
