import React, { Component } from 'react';
import './App.css';
import { Layout,Icon } from 'antd';
import RouteConfig from './../../router/index'
import HomeMenu from './../Menu/homeMenu'
import HeaderMenu from '../Header/header'

//const { Header } = Layout;
/**
 0、获取和传递组件值，用props
 1、selHeaderMenu：同子组件headerjs进行通信的函数，不需要在自身组件中定义，只需要在子组件中定义
 2、子组件传递过来的menu值，通过selHeader函数进行改变
 3、Appjs自身作为父组件，向子组件homeMenujs传递menu值
**/
class App extends Component {
  state = {
    headerMenu : '',
    sliderMenu : '',
    mainStyle:{}
  }
  selHeader(menu,slider){
    this.setState({headerMenu: menu,sliderMenu : slider});
  }

  render() {
    return (
      <div>
          <Layout>
              <HeaderMenu selHeadrMenu={(menu,slider)=>this.selHeader(menu,slider)}></HeaderMenu>
              <div className='app-content' style={this.state.mainStyle}>
                <div className='app-left-menu'>
                    <HomeMenu sliderMenu={this.state.headerMenu} sliderLeftMenu={this.state.sliderMenu}></HomeMenu>
                </div>
                <div className='app-right-menu'>
                    <div style={{width:'75%'}}>
                        <RouteConfig></RouteConfig>
                    </div>
                    {/*右侧快捷菜单*/}
                    <div className='app-right-left-content'>
                        <div className='item-title'>
                            最近更新
                        </div>
                        <div className='item-value'>
                            <Icon type="file" />xxxxxxxxxxx
                        </div>
                        <div className='item-value'>
                            <Icon type="file" />xxxxxxxxxxx
                        </div>
                        <div className='item-value'>
                            <Icon type="file" />xxxxxxxxxxx
                        </div>
                    </div>
                </div>
                <div style={{clear:'both'}}></div>
              </div>
          </Layout>
      </div>
    );
  }
  initScreen(){
      var h = document.documentElement.clientHeight || document.body.clientHeight;
      this.setState({
          mainStyle : {
              height: h - 60,
              overflowY: 'auto'
          }
      });
  }
  screenChange() {
    var _self = this;
    window.addEventListener('resize', function () {
        _self.initScreen();
    });
  }
  componentDidMount() {
      this.initScreen();
      this.screenChange();
  }

    componentWillUnmount() {
        var _self = this;
        window.removeEventListener('resize', function () {
            _self.initScreen();
        });
    }
}

export default App;
