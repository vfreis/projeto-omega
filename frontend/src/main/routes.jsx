import React from "react";
import {Router, Route, Navigate} from "react-router";



import Todo from "../todo/todo";
import About from "../about/about";

function RoutesApp() {

    <Router >
        <Route path="/todos" component={Todo} />
        <Route path="/about" component={About} />
        <Navigate from='*' to='/todos'/>
    </Router>
}

export default RoutesApp