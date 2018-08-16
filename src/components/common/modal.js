import React, { Component } from 'react';
import { Modal } from 'antd';
import axios from "axios/index";
import marked from 'marked';
/**
 0、获取和传递组件值，用props
 1、selHeaderMenu：同子组件headerjs进行通信的函数，不需要在自身组件中定义，只需要在子组件中定义
 2、子组件传递过来的menu值，通过selHeader函数进行改变
 3、Appjs自身作为父组件，向子组件homeMenujs传递menu值
 **/
class ModalDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            visibleModel: false,
            modelId:'',
            title:'',
            content:''
        };
    }
    handleOk = (e) => {
        this.setState({
            visibleModel: false,
            modelId:''
        });
    }
    handleCancel = (e) => {
        this.setState({
            visibleModel: false,
            modelId:''
        });
        this.props.childModal();
    }
    render() {
        return (
            <div>
                <Modal
                    width='800px'
                    style={{ top: 10 }}
                    title={this.state.title}
                    visible={this.state.visibleModel}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <div dangerouslySetInnerHTML = {{ __html:marked(this.state.content) }}></div>
                </Modal>
            </div>
        );
    }
    componentDidMount() {

    }
    componentWillReceiveProps(nextProps){
        var _self = this;
        if (this.state.visibleModel !== nextProps.selModalDetail) {
            var data = {
                params:{
                    type:1,
                    id:nextProps.selModalId
                }
            };
            if(nextProps.selModalDetail === false){
                return;
            }
            axios.get('/artical/detail',data).then(result => {
                //console.log(result.data.data[0].title);
                _self.setState({
                    title: result.data.data[0].title,
                    content: result.data.data[0].content
                });
                _self.setState({
                    visibleModel: nextProps.selModalDetail,
                    modelId: nextProps.selModalId
                });
            });
        }
    }
}

export default ModalDetail;
