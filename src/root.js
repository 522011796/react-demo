import React, { Component } from 'react';
import getRoutes from './routes.js';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import { Provider } from 'react-redux';
export default class Root extends Component {
    render() {
        const { store } = this.props
        return (
            <Provider store={store}>
                <Router>
                    {getRoutes(store)}
                </Router>
            </Provider>
        )
    }
}