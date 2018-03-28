import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MailContainer, Counter } from './Components';

const NotFoundPage = () => (
  <div>Not found</div>
);

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={MailContainer}/>
                <Route path="/counter" component={Counter}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;