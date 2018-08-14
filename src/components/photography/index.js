import React, { Component } from 'react';
import { List, Avatar } from 'antd';
import './../../css/common.css'
import './index.css'
import axios from "axios/index";
import moment from 'moment';

class Photography extends Component {
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
                            title={<a href="https://ant.design">{item.title}</a>}
                            description={
                                <div>
                                    <div>{item.content}</div>
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
            </div>
        );
    }

    componentDidMount() {
        this.init();
    }

}


export default Photography