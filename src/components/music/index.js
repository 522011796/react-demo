import React, { Component } from 'react';
import './../../css/common.css'
import './index.css'
import axios from "axios/index";

class Music extends Component {
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
                type:3
            }
        };
        axios.get('/music',data).then(result => {
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
                <div className='item-list' key={index}>
                    <div className='item-list-left text-center'>
                        <img src={item.mainPic} alt="" className='img-class'/>
                        <div className='item-list-item-content'>
                            <div className='item-list-text'>
                                {item.title}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else if(this.state.isFirst === true && this.state.contentList.length === 0){
            list = <div className='text-center'>
                <img src={require('./../../assets/none.png')} alt="" className='none-data'/>
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


export default Music