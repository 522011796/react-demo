import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import App from "./components/App/App";
import Login from "./components/login";

ReactDOM.render(
    <div>
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/" component={App} />
            </Switch>
        </Router>
    </div>
    , document.getElementById('root')
);
registerServiceWorker();
