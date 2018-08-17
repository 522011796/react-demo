import React, { Component } from 'react';
import { Icon } from 'antd';
import './../css/common.css'
import axios from 'axios'
import marked from 'marked';
import ModalDetail from "./common/modal";
import hljs from 'highlight.js';
import 'highlight.js/styles/arta.css';

class Home extends Component {
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
    closeModal(){
        this.setState({
            modalStatus: false
        });
    }
    render() {
        let list = null;
        if(this.state.isFirst === true && this.state.contentList.length > 0){
            list = (<div>
                {
                    this.state.contentList.map((item,index) =>
                        <div style={{marginTop:'20px',marginLeft:'15px'}} key={index}>
                            <div>
                                <span className='list-item-title'onClick={() => this.setModalStatus(item.id)}>
                                    {item.title}
                                </span>
                                <div className='list-item-value'>
                                    {this.removeAllHtml(marked(item.content.substring(0,100)+'......'))}
                                    {/*<div dangerouslySetInnerHTML = {{ __html:marked(item.content.substring(0.10)) }}></div>*/}
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
                }
                <ModalDetail selModalDetail={this.state.modalStatus} selModalId={this.state.id}  childModal={()=>this.closeModal()}></ModalDetail>
            </div>)
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
        marked.setOptions({
            highlight: code => hljs.highlightAuto(code).value,
        });
    }
    componentDidUpdate(){

    }
}


export default Home