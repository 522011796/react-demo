import React, { Component } from 'react';
import { List, Avatar } from 'antd';
import './../../css/common.css'
import './index.css'

class Photography extends Component {
    render() {
        const data = [
            {
                title: 'Ant Design Title 1',
            },
            {
                title: 'Ant Design Title 2',
            },
            {
                title: 'Ant Design Title 3',
            },
            {
                title: 'Ant Design Title 4',
            },
            {
                title: 'Ant Design Title 4',
            },
            {
                title: 'Ant Design Title 4',
            },
            {
                title: 'Ant Design Title 4',
            },
            {
                title: 'Ant Design Title 4',
            }
        ];
        return (
            <div style={{marginTop:'20px',marginLeft:'15px'}}>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar style={{height:'60px',width:'200px'}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={<a href="https://ant.design">{item.title}</a>}
                                description={
                                    <div>
                                        <div>Ant Design, a design language for background applications, is refined by Ant UED TeamAnt Design, a design la</div>
                                        <div style={{fontSize:'12px',textAlign:'right'}}>
                                            <span>ricky</span>
                                            <span style={{marginLeft:'5px'}}>2018-11-11</span>
                                        </div>
                                    </div>
                                }
                            />
                        </List.Item>
                    )}
                />
            </div>
        );
    }

    componentDidMount() {

    }

}


export default Photography