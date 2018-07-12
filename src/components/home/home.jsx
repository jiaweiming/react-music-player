import React from 'react'
import Audio from "../audio/audio.jsx"
import "./index.less"
import $ from "jquery"
import {HashRouter, Switch, Route, Link} from "react-router-dom"
import Recommend from "../header/recommend/index.jsx"
import Search from "../header/search/index.jsx"
import User from "../header/user/user.jsx"
import MusicPlaying from "../header/musicPlaying/index.jsx"


export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lists: []
		}
	}

	render() {
		return <div>
			<HashRouter>
				<div>
					<div className="header-box-container">
						<div className="header-box"><Link to="/user" replace>我的</Link></div>
						<div className="header-box"><Link to="/" replace>推荐</Link></div>
						<div className="header-box"><Link to="/playing" replace>播放</Link></div>
						<div className="header-box"><Link to="/search" replace>搜索</Link></div>
					</div>
					<Switch>
						<Route path="/user" component={User}/>
						<Route exact path="/" component={Recommend}/>
						<Route path="/playing" component={MusicPlaying}/>
						<Route path="/search" component={Search}/>
					</Switch>
					<Audio url="http://www.ytmp3.cn/?down/47153.mp3" data={this.state.lists}/>
				</div>
			</HashRouter>
		</div>
	}

	componentDidMount() {
		$.ajax({
			type: "GET",
			async: true,
			url: "http://zhengjinwei.top:3003/list.json",
			dataType: "json",
			beforeSend: function () {
				$(".loading").show();
			},
			success: function (res) {
				this.setState({
					lists: res.music
				})
			}.bind(this),
			error: function (res) {
				alert("Some error happened...")
			},
			complete: function () {
				$(".loading").hide();
			}
		})
	}
}
