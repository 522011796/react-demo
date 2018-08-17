import React, { Component } from 'react';
import './../../css/common.css'
import './index.css'
import axios from "axios/index";

import marked from "marked";
import ModalDetail from "./../common/modal";
import hljs from 'highlight.js';
import 'highlight.js/styles/arta.css';

class Music extends Component {
    constructor(props){
        super(props);
        this.state = {
            contentList: [],
            isFirst:false,
            modalStatus:false,
            valuttest:'',
            id:''
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
    removeAllHtml = function (html) {
        return html.replace(/<[^>]+>/g, '');
    };
    setStateAsync(state) {
        return new Promise(resolve => {
            this.setState(state, resolve)
        })
    }
    async setModalStatus(id){
        await this.setStateAsync({
            modalStatus: true,
            id:id
        });
    }
    closeModal(){
        this.setState({
            modalStatus: false
        });
    }
    render() {
        let list = null;
        if(this.state.isFirst === true && this.state.contentList.length > 0){
            list = this.state.contentList.map((item,index) =>
                <div className='item-list' key={index}  onClick={() => this.setModalStatus(item.id)}>
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
                <ModalDetail selModalDetail={this.state.modalStatus} selModalId={this.state.id}  childModal={()=>this.closeModal()}></ModalDetail>
            </div>
        );
    }

    componentDidMount() {
        this.init();
    }

}


export default Music