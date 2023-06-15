import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { map } from 'lodash';
import Routes  from "./routes";
import routes from "./routes";

export function Navigation() {
    return (
        <Router>
            <Switch>
                {map(routes, (route, index) => (
                    <routes 
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
            </Switch>
        </Router>
    );
}