import React from "react"
import "./index.less"
import { Icon } from "antd"
import DefaultLists from "./lists/default.jsx"
import FavoriteLists from "./lists/favorite.jsx"
import CollectionLists from "./lists/collection.jsx"
import { Route, Link  } from "react-router-dom"
import {Template} from '../../routers/template.jsx'

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
		return <Template>
			<div className="user-all">
				<div className='account'>
          <div className="left-box">
            <div className='avatar'><img src="https://cdn.shopify.com/s/files/1/0017/2956/0637/files/222.jpg?8522275334056835450" alt=""/></div>
            <div className="name">
              <span>踏雪无痕<span className='vip'>SVIP</span></span><br/>
              <span>听歌:43532分钟</span>
            </div>
          </div>

					<div className="remind">
            <Icon type="mail" theme="twoTone" />
					</div>
				</div>
					<div className="music-list-show">
						<ul className='category'>
							<li index="0" className={this.state.currentIndex === "0" ? "music-list-li" : 'music-list-item'} onClick={this.setCurrentIndex}>
								<Link to="/" replace><Icon className="list-icon" type="smile" />默认列表</Link>
							</li>
							<li index="1" className={this.state.currentIndex === "1" ? "music-list-li" : 'music-list-item'} onClick={this.setCurrentIndex}>
								<Link to="/user/collection" replace><Icon className="list-icon" type="star" />本地歌曲</Link>
							</li>
							<li index="2" className={this.state.currentIndex === "2" ? "music-list-li" : 'music-list-item'} onClick={this.setCurrentIndex}>
								<Link to="/user/favorite" replace><Icon className="list-icon" type="heart" />我喜欢的</Link>
							</li>
						</ul>
						<div>
							<Route exact path="" component={DefaultLists} />
							<Route path="/user/collection" component={CollectionLists} />
							<Route path="/user/favorite" component={FavoriteLists} />
						</div>
					</div>
			</div>
		</Template>

	}
}