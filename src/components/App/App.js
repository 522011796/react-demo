import React, { Component } from 'react';
import './App.css';
import { Layout,Icon,Button,Drawer,Input,Select } from 'antd';
import RouteConfig from './../../router/index'
import HomeMenu from './../Menu/homeMenu'
import HeaderMenu from '../Header/header'
import axios from "axios/index";

import SimpleMDE from 'react-simplemde-editor';
import "simplemde/dist/simplemde.min.css";

import marked from 'marked';
import qs from 'qs';

//const { Header } = Layout;
/**
 0、获取和传递组件值，用props
 1、selHeaderMenu：同子组件headerjs进行通信的函数，不需要在自身组件中定义，只需要在子组件中定义
 2、子组件传递过来的menu值，通过selHeader函数进行改变
 3、Appjs自身作为父组件，向子组件homeMenujs传递menu值
**/
class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        headerMenu : '',
        sliderMenu : '',
        mainStyle:{},
        contentList: [],
        isFirst:false,
        visible: false,
        textValue:'',
        showHtml:'',
        title:'',
        type:1,
        mainPic:'',
        mainText:'',
        errorTips:''
      };
    }
  selHeader(menu,slider){
    this.setState({headerMenu: menu,sliderMenu : slider});
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  }
  onClose = () => {
    this.setState({
      visible: false,
      textValue:'',
      showHtml:'',
      title:'',
      type:1,
      mainPic:'',
      mainText:'',
      errorTips:''
    });
  }
  handleChange = value => {
    this.setState({ textValue: value });
  }
  subData = () => {
      var params ={
          title :this.state.title,
          content:this.state.textValue,
          type:this.state.type,
          mainPic:this.state.mainPic,
          mainText:this.state.mainText
      }
      //console.log(qs.stringify(params));return;
      axios({
          method: "post",
          url: '/addData/addArticle',
          data: qs.stringify(params),
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          }
      }).then(res => {
          if(res.data.code === 200){
              this.setState({
                  errorTips:'发布成功'
              });
          }else{
              this.setState({
                  errorTips:'发布失败'
              });
          }
      });
  }
  onChangeInput = (e) => {
      let value = e.target.value;
      let type =  e.target.getAttribute("data-type");
      if(type === 'title'){
          this.setState({title: value});
      }else if(type === 'mainPic'){
          this.setState({mainPic: value});
      }else if(type === 'mainText'){
          this.setState({mainText: value});
      }
  }
  handleSelectChange = (value) => {
    //console.log(value); // { key: "lucy", label: "Lucy (101)" }
    this.setState({type: value})
  }
  render() {
    let list = null;
    const Option = Select.Option;
    list = this.state.contentList.map((item,index) =>
      <div className='item-value' key={index}>
        <Icon type="file" />{item.title.substring(0,10)+'...'}
      </div>
    )
    return (
      <div>
          {/*<div>
              <div dangerouslySetInnerHTML = {{ __html:this.state.showHtml }}></div>
          </div>*/}
          <Layout>
              <HeaderMenu selHeadrMenu={(menu,slider)=>this.selHeader(menu,slider)}></HeaderMenu>
              <div className='app-content' style={this.state.mainStyle}>
                <div className='app-left-menu'>
                    <HomeMenu sliderMenu={this.state.headerMenu} sliderLeftMenu={this.state.sliderMenu}></HomeMenu>
                </div>
                <div className='app-right-menu'>
                    <div style={{width:'75%'}}>
                        <RouteConfig></RouteConfig>
                    </div>
                    {/*右侧快捷菜单*/}
                    <div className='app-right-left-content'>
                        <Button block size='small' onClick={this.showDrawer}>
                            <span className='addArticel'>添加文章</span>
                        </Button>
                        <div className='item-title'>
                            最近更新
                        </div>
                        <div>
                            {list}
                        </div>
                    </div>
                </div>
                <div style={{clear:'both'}}></div>
              </div>
          </Layout>
          <Drawer
              title=""
              width='100%'
              placement="right"
              onClose={this.onClose}
              maskClosable={false}
              visible={this.state.visible}
              style={{
                  height: 'calc(100% - 55px)',
                  overflow: 'auto',
                  paddingBottom: 53,
              }}
          >
              <div>
                  <Input placeholder="title" value={this.state.title} data-type='title' onChange={this.onChangeInput} style={{marginBottom:'10px',width:'40%'}}/>
                  <Select defaultValue='1' style={{ width: 120 }} onChange={this.handleSelectChange}>
                      <Option value="1">it技术</Option>
                      <Option value="2">摄影、旅游</Option>
                      <Option value="3">音乐笔记</Option>
                  </Select>
                  <div>
                      <Input placeholder="用于展示列表缩率图" value={this.state.mainPic} data-type='mainPic' onChange={this.onChangeInput} style={{marginBottom:'10px',width:'40%'}}/>
                  </div>
                  <div>
                      <Input placeholder="用于展示列表缩率图上的文字，限制15个字符" value={this.state.mainText} data-type='mainText' onChange={this.onChangeInput} style={{marginBottom:'10px',width:'40%'}} maxLength='15'/>
                  </div>
              </div>
              <SimpleMDE
                  id="your-custom-id"
                  label=""
                  options={{
                      autofocus: true,
                      spellChecker: false,
                      gfm: true,
                      pedantic: false,
                      sanitize: false,
                      tables: true,
                      breaks: true,
                      smartLists: true,
                      smartypants: true,
                  }}
                  value={this.state.textValue}
                  onChange={this.handleChange}
              />
              <Button size='small' type="primary" onClick={this.subData}>
                  <span className='addArticel' style={{color:'#ffffff'}}>保存</span>
              </Button>
              <Button size='small' onClick={this.onClose} style={{marginLeft:'10px'}}>
                  <span className='addArticel'>取消</span>
              </Button>
              <span>{this.state.errorTips}</span>
          </Drawer>
      </div>
    );
  }
  init(){
      axios.get('/updateData').then(result => {
          const input = result.data.data;
          /*const output = marked(input[0].content);
          console.log(output);*/
          this.setState({
              contentList: result.data.data,
              isFirst:true,
              showHtml: ''
          });
      });
  }
  initScreen(){
      var h = document.documentElement.clientHeight || document.body.clientHeight;
      this.setState({
          mainStyle : {
              height: h - 60,
              overflowY: 'auto'
          }
      });
  }
  screenChange() {
    var _self = this;
    window.addEventListener('resize', function () {
        _self.initScreen();
    });
  }
  componentDidMount() {
      this.init();
      this.initScreen();
      this.screenChange();
  }

    componentWillUnmount() {
        var _self = this;
        window.removeEventListener('resize', function () {
            _self.initScreen();
        });
    }
}

export default App;
