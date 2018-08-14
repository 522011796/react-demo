import React, { Component } from 'react';
import { Icon } from 'antd';
import './../css/common.css'
import axios from 'axios'

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            contentList: [],
            isFirst:false
        };
    }
    init(){
        var data = {
            params:{
                type:1
            }
        };
        axios.get('/artical',data).then(result => {
            this.setState({
                contentList: result.data.data,
                isFirst:true
            });
        });
    }
    render() {
        let list = null;
        if(this.state.isFirst === true && this.state.contentList.length > 0){
            list = this.state.contentList.map((item,index) =>
                <div style={{marginTop:'20px',marginLeft:'15px'}} key={index}>
                    <div>
                        <div className='list-item-title'>{item.title}</div>
                        <div className='list-item-value'>
                            {item.content}
                        </div>
                        <div className='list-item-author'>
                            <span>ricky</span>
                            <span><Icon type="message" style={{marginLeft:'5px'}}/>0</span>
                            <span><Icon type="heart" style={{marginLeft:'5px'}}/>{item.like}</span>
                        </div>
                    </div>
                    <div className='line'></div>
                </div>
            )
        }else if(this.state.isFirst === true && this.state.contentList.length === 0){
            list = <div className='text-center'>
                <img src={require('./../assets/none.png')} alt="" className='none-data'/>
            </div>
        }

        return (
            <div style={{marginTop:'20px',marginLeft:'15px'}}>
                {list}
            </div>
        );
    }
    componentDidMount() {
        this.init();
    }
}


export default Home