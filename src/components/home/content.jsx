import React from 'react'
import {HashRouter, Switch, Route, Link} from "react-router-dom"
import Recommend from "../header/recommend/index.jsx"
import Search from "../header/search/index.jsx"
import User from "../header/user/user.jsx"
import MusicPlaying from "../header/musicPlaying/index.jsx"

export default class Content extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return <div>
			<HashRouter>
				<div className="header-box-container">
					<div className="header-box"><Link to="/user">我的</Link></div>
					<div className="header-box"><Link to="/">推荐</Link></div>
					<div className="header-box"><Link to="/playing">播放</Link></div>
					<div className="header-box"><Link to="/search">搜索</Link></div>
				</div>
				<Switch>
					<Route path="/user" component={User} data={this.state.lists}/>
					<Route exact path="/" component={Recommend}/>
					<Route path="/playing" component={MusicPlaying}/>
					<Route path="/search" component={Search}/>
				</Switch>
			</HashRouter>
		</div>
	}
}