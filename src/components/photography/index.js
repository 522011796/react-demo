import React, { Component } from 'react';
import { List, Avatar } from 'antd';
import './../../css/common.css'
import './index.css'
import axios from "axios/index";
import moment from 'moment';
import marked from "marked";
import ModalDetail from "./../common/modal";
import 'highlight.js/styles/arta.css';

class Photography extends Component {
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
                type:2
            }
        };
        axios.get('/art',data).then(result => {
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
            list = <List
                itemLayout="horizontal"
                dataSource={this.state.contentList}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar style={{height:'80px',width:'200px',borderRadius:'0px'}} src={item.mainPic} />}
                            title={<a href="javascript:void(0)" onClick={() => this.setModalStatus(item.id)}>{item.title}</a>}
                            description={
                                <div>
                                    <div>{this.removeAllHtml(marked(item.content.substring(0,100)+'......'))}</div>
                                    <div style={{fontSize:'12px',textAlign:'right'}}>
                                        <span>{item.author}</span>
                                        <span style={{marginLeft:'5px'}}>{moment(item.sendTime).format('YYYY-MM-DD HH:mm:ss')}</span>
                                    </div>
                                </div>
                            }
                        />
                    </List.Item>
                )}
            />
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


export default Photography