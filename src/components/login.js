import React, { Component } from 'react';
import './login.css'
import { Tabs,Input,Button,message } from 'antd';
import axios from "axios/index";
const TabPane = Tabs.TabPane;

//=====组件=====

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            mainStyle:{},
            username:'',
            password:''
        };
    }
    onChangeInput = (e) => {
        let value = e.target.value;
        let type =  e.target.getAttribute("data-type");
        if(type === 'username'){
            this.setState({username: value});
        }else if(type === 'password'){
            this.setState({password: value});
        }
    }
    render() {
        return (
            <div className='loginMain' style={this.state.mainStyle}>
                <div className='loginContent'>
                    <div className='loginTitle'>ricky</div>
                    <div className='loginOpr'>
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="账号" key="1">
                                <div>
                                    <Input size='large' placeholder="" value={this.state.username} data-type='username' onChange={this.onChangeInput}/>
                                </div>
                                <div style={{marginTop:'10px'}}>
                                    <Input size='large' placeholder="" value={this.state.password} data-type='password' onChange={this.onChangeInput}/>
                                </div>
                                <div style={{marginTop:'10px'}}>
                                    <Button size='large' block style={{background:'#41464b',color:'#ffffff',fontSize:'12px'}} onClick={this.goLogin}>登录</Button>
                                </div>
                            </TabPane>
                            <TabPane tab="微信" key="2" disabled></TabPane>
                            <TabPane tab="钉钉" key="3" disabled>钉钉</TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
        );
    }

    goLogin = () =>{
        var data = {
            params:{
                username:this.state.username,
                password:this.state.password
            }
        };
        axios.get('/login',data).then(result => {
            if(result.data.data.length > 0){
                message.success('登录成功，正在跳转页面！');
                window.location.href="/"
            }else{
                message.error('账号或者密码错误！');
            }
        });
    }

    componentDidMount() {
        var h = document.documentElement.clientHeight || document.body.clientHeight;
        this.setState({
            mainStyle : {
                height: h,
                overflowY: 'auto'
            }
        });
    }

}


export default Login