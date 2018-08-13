import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import { Layout } from 'antd';

import Login from './../login';
import Home from './../home';
import About from './../about';
import News from './../news';

const { Header } = Layout;
class App extends Component {
  render() {
    var h = document.documentElement.clientHeight || document.body.clientHeight;
    var mainStyle = {
        height:h-60
    };
    return (
      <div>
          <Layout>
              <Header className='app-head'></Header>
              <div className='app-content' style={mainStyle}>
                <div className='app-left-menu'>
                    <ul>
                        <li>
                            <Link to="/">登录</Link>
                        </li>
                        <li>
                            <Link to="/Home">主页</Link>
                        </li>
                        <li>
                            <Link to="/About">关于我们</Link>
                        </li>
                        <li>
                            <Link to="/News">新闻页面</Link>
                        </li>
                    </ul>
                </div>
                <div className='app-right-menu'>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/Home" component={Home}/>
                    <Route path="/About" component={About}/>
                    <Route path="/News" component={News}/>
                </div>
                <div style={{clear:'both'}}></div>
              </div>
          </Layout>
      </div>
    );
  }
}

export default App;
