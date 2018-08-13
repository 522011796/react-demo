import React, { Component } from 'react';
import { Icon } from 'antd';
import './../css/common.css'

class Home extends Component {

    render() {
        return (
            <div style={{marginTop:'20px',marginLeft:'15px'}}>
                <div>
                    <div className='list-item-title'>xxxxxxxx</div>
                    <div className='list-item-value'>
                        哈哈啊哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈啊哈哈哈哈哈
                        哈哈啊哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈啊哈哈哈哈哈
                    </div>
                    <div className='list-item-author'>
                        <span>ricky</span>
                        <span><Icon type="mail" style={{marginLeft:'5px'}}/>1</span>
                        <span><Icon type="heart" style={{marginLeft:'5px'}}/>2</span>
                    </div>
                </div>
                <div className='line'></div>

                <div>
                    <div className='list-item-title'>xxxxxxxx</div>
                    <div className='list-item-value'>
                        哈哈啊哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈啊哈哈哈哈哈
                        哈哈啊哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈啊哈哈哈哈哈
                    </div>
                    <div className='list-item-author'>
                        <span>ricky</span>
                        <span><Icon type="mail" style={{marginLeft:'5px'}}/>1</span>
                        <span><Icon type="heart" style={{marginLeft:'5px'}}/>2</span>
                    </div>
                </div>
                <div className='line'></div>
            </div>
        );
    }

    componentDidMount() {

    }

}


export default Home