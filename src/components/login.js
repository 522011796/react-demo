import React, { Component } from 'react';
import './login.css'
import { Tabs,Input,Button } from 'antd';
const TabPane = Tabs.TabPane;

//=====组件=====

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            mainStyle:{}
        };
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
                                    <Input size='large' placeholder="" />
                                </div>
                                <div style={{marginTop:'10px'}}>
                                    <Input size='large' placeholder="" />
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

    goLogin(){
        window.location.href="/"
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