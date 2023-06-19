import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { map } from 'lodash';
import routes from "./routes";

export function Navigation() {
    return (
        <Router>
        
            {map(routes, (route, index) => (
                <Route 
                    key = {index}
                    path = {route.path}
                    exact = {route.exact}
                    render = {(props) => (
                        <route.layout>
                            <route.component {...props} />
                        </route.layout>
                    )}
                />
            ))}
     
        </Router>
    );
}