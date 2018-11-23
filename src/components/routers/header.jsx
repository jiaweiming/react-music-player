import React from 'react'
import {Link} from 'react-router-dom'
import { Tabs, Icon } from 'antd'
const TabPane = Tabs.TabPane;

export default class Header extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return  <div className="header-box-container">
        <Tabs defaultActiveKey="1">
          <TabPane tab={<span><Icon type="user" /><Link to="/" replace>我的</Link></span>} key="1">
          </TabPane>
          <TabPane tab={<span><Icon type="like" /><Link to="/recommend" replace>推荐</Link></span>} key="2">
          </TabPane>
          <TabPane tab={<span><Icon type="play-circle" /><Link to="/play" replace>播放</Link></span>} key="3">
          </TabPane>
          <TabPane tab={<span><Icon type="search" /><Link to="/search" replace>搜索</Link></span>} key="4">
          </TabPane>
        </Tabs>
    </div>
  }
}

