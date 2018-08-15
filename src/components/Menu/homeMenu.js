import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

import './homeMenu.css'
import FontAwesome from 'react-fontawesome';

/**
 * 0、获取和传递组件值，用props
 * 1、
 */
class HomeMenu extends Component {
    state = {
        sliderMenu : ''
    }
    selSilder(silder) {
        this.setState({sliderMenu: silder});
        //保存选中的位置记录
        localStorage.setItem("silderMenu", silder);
    }
    initState(){
        let silder = localStorage.getItem("silderMenu");
        this.setState({sliderMenu: silder ? silder : 'home'});
    }
    render() {
        return (
            <div style={{textAlign:'left',marginLeft:'0px'}}>
                {this.props.sliderMenu === 'menu1' &&
                    <ul className='menu-ul'>
                        <Link to="/" className={this.state.sliderMenu === 'home' ? 'color-a5a5a5 font-size12 menu-active' : 'color-a5a5a5 font-size12'} onClick={() => this.selSilder('home')}>
                            <li>
                                <Icon type="desktop" className='menu-ul-icon'/>IT技术
                            </li>
                        </Link>
                        <Link to="/photography" className={this.state.sliderMenu === 'photography' ? 'color-a5a5a5 font-size12 menu-active' : 'color-a5a5a5 font-size12'} onClick={() => this.selSilder('photography')}>
                            <li>
                                <Icon type="camera-o" className='menu-ul-icon'/>摄影、游记
                            </li>
                        </Link>
                        <Link to="/music" className={this.state.sliderMenu === 'music' ? 'color-a5a5a5 font-size12 menu-active' : 'color-a5a5a5 font-size12'} onClick={() => this.selSilder('music')}>
                            <li>
                                <FontAwesome name='music' className='menu-ul-icon'/>音乐笔记
                            </li>
                        </Link>
                    </ul>}
                {this.props.sliderMenu === 'menu2' &&
                    <ul className='menu-ul'>
                        <Link to="/Home2" className={this.state.sliderMenu === 'home2' ? 'color-a5a5a5 font-size12 menu-active' : 'color-a5a5a5 font-size12'} onClick={() => this.selSilder('home2')}>
                            <li>
                                <Icon type="home" className='menu-ul-icon'/>主页2
                            </li>
                        </Link>
                        <Link to="/About2" className={this.state.sliderMenu === 'about2' ? 'color-a5a5a5 font-size12 menu-active' : 'color-a5a5a5 font-size12'} onClick={() => this.selSilder('about2')}>
                            <li>
                                <Icon type="home" className='menu-ul-icon'/>关于我们2
                            </li>
                        </Link>
                        <Link to="/News2" className={this.state.sliderMenu === 'news2' ? 'color-a5a5a5 font-size12 menu-active' : 'color-a5a5a5 font-size12'} onClick={() => this.selSilder('news2')}>
                            <li>
                                <Icon type="home" className='menu-ul-icon'/>新闻页面2
                            </li>
                        </Link>
                    </ul>}
            </div>
        );
    }

    //DOM加载完成后执行，同上面的注释
    componentDidMount() {
        this.initState();
    }
    componentWillReceiveProps(){
        this.initState();
    }

}


export default HomeMenu