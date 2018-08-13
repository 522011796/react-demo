import React, { Component } from 'react'
//import { Router, Route, IndexRoute } from 'react-router'
import {
    Route,
    Switch
} from 'react-router-dom';

import Home from './../components/home'
import Home2 from './../components/home2'
import News from './../components/news'
import News2 from './../components/news2'
import About from './../components/about'
import About2 from './../components/about2'
import Photography from './../components/photography'
import Goods from './../components/goods'
import Music from './../components/music'

class RouteConfig extends Component {
    render(){
        return(
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/photography" exact component={Photography}/>
                <Route path="/goods" exact component={Goods}/>
                <Route path="/music" exact component={Music}/>
                <Route path="/news" exact component={News}/>
                <Route path="/about" exact component={About}/>
                <Route path="/home2" exact component={Home2}/>
                <Route path="/news2" exact component={News2}/>
                <Route path="/about2" exact component={About2}/>
            </Switch>
        )
    }
}
export default RouteConfig
