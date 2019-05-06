import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Redirect } from "react-router-dom";
import About from "./application/pages/about/AboutPage";
import Implementation from "./application/pages/data/ImplementationPage";
import Header from "./application/components/header/Header";
import "./index.scss";


ReactDOM.render(
    <BrowserRouter>
        <>
            <Header/>
            <main>
                <Route exact path="/" render={() => <Redirect to="/about"/>} />
                <Route path="/about" component={About} />
                <Route path="/implementation" component={Implementation} />
            </main>
        </>
    </BrowserRouter>,
    document.getElementById("app"));