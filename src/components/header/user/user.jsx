import React from "react"
import "./index.less"
import { Icon } from "antd"
import DefaultLists from "./lists/default.jsx"
import FavoriteLists from "./lists/favorite.jsx"
import CollectionLists from "./lists/collection.jsx"
import { HashRouter, Switch, Route, Link ,Redirect } from "react-router-dom"

export default class User extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentIndex: "0"
		}
		this.setCurrentIndex = this.setCurrentIndex.bind(this);
	}

	setCurrentIndex(event) {
		this.setState({
			currentIndex: event.currentTarget.getAttribute('index')
		})
	}

	render() {
		return <div className="user-all">
			<HashRouter>
				<div className="music-list-show">
					<ul>
						<li index="0" className={this.state.currentIndex === "0" ? "music-list-li" : 'music-list-item'} onClick={this.setCurrentIndex}>
							<Link to="/user/default" replace><Icon className="list-icon" type="smile" />默认列表<Icon className="list-icon" type={this.state.currentIndex === "0" ? "down" : "right"} /></Link>
						</li>
						<li index="1" className={this.state.currentIndex === "1" ? "music-list-li" : 'music-list-item'} onClick={this.setCurrentIndex}>
							<Link to="/user/collection" replace><Icon className="list-icon" type="star" />我的收藏<Icon className="list-icon" type={this.state.currentIndex === "1" ? "down" : "right"} /></Link>
						</li>
						<li index="2" className={this.state.currentIndex === "2" ? "music-list-li" : 'music-list-item'} onClick={this.setCurrentIndex}>
							<Link to="/user/favorite" replace><Icon className="list-icon" type="heart" />我喜欢的<Icon className="list-icon" type={this.state.currentIndex === "2" ? "down" : "right"} /></Link>
						</li>
					</ul>
					<hr />
					<Switch>
						<Route exact path="/user/default" component={DefaultLists} />
						<Route path="/user/collection" component={CollectionLists} />
						<Route path="/user/favorite" component={FavoriteLists} />
						<Redirect path="/" to={{pathname: '/user/default'}}/>
					</Switch>
				</div>
			</HashRouter>
		</div>
	}
}