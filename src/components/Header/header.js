import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { Avatar } from 'antd';
import axios from "axios/index";

class HeaderMenu extends Component {
    state = {
        headActive:'menu1',
        admin:''
    };
    selMenu(menu,silder){
        /**
         * 获取和传递组件值，用props
         * 流程为：header选中后，得到相应的值，通知父组件Appjs作出改变---->切换到Appjs中查看
         * this.props.selHeadrMenu：表示向父组件Appjs的函数selHeadrMenu传递相关值
         * this.setState({headActive: menu})：修改state的headActive选中值
         */
        this.props.selHeadrMenu(menu,silder);
        this.setState({headActive: menu});
        //保存header选中的位置记录
        localStorage.setItem("headerMenu",menu);
        localStorage.setItem("silderMenu",silder);
    }
    getSession(){
        axios.get('/sessionInfo').then(result => {
            this.setState({
                admin:result.data.data
            });
        });
    }
    render() {
        return (
            <div className='head-class'>
                <div style={{width:'1120px',margin:'0 auto'}}>
                    <div className='head-logo'>
                        logo
                    </div>
                    <div className='head-menu-main'>
                        <div className='head-menu-item'>
                            <Link to="/" >
                            <span className={this.state.headActive === 'menu1' ? 'head-active head-menu-child-item' : 'head-menu-child-item'} onClick={() => this.selMenu('menu1','home')}>
                                菜单一
                            </span>
                            </Link>

                            <Link to="/home2">
                            <span className={this.state.headActive === 'menu2' ? 'head-active head-menu-child-item' : 'head-menu-child-item'} onClick={() => this.selMenu('menu2','home2')}>
                                菜单二
                            </span>
                            </Link>
                        </div>
                        <div style={{position:'absolute',right:'20px',top:'0px',color:'#a5a5a5'}}>
                            <Avatar size="small" icon="user" />
                            {
                                this.state.admin === 'admin' &&
                                <span style={{marginLeft:'5px'}}>admin</span>
                            }
                        </div>
                    </div>
                    <div style={{clear:'both'}}></div>
                </div>
            </div>
        );
    }

    //DOM加载完成后执行，同上面的注释
    componentDidMount() {
        let menu = localStorage.getItem("headerMenu");
        let silder = localStorage.getItem("silderMenu");
        this.props.selHeadrMenu(menu ? menu : 'menu1',silder ? silder : 'home');
        this.setState({headActive: menu ? menu : 'menu1'});
        this.getSession();
    }

}


export default HeaderMenu