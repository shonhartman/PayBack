import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import DebtSelector from "./DebtSelector";
import NotFound from "./NotFound";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={DebtSelector} />
            <Route path="/debt/:debtId" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router;