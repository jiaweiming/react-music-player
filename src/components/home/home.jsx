import React from "react"
import "./index.less"
import { HashRouter, Switch, Route, Link } from "react-router-dom"
import Recommend from "../header/recommend/index.jsx"
import Search from "../header/search/index.jsx"
import User from "../header/user/user.jsx"
import MusicPlaying from "../header/musicPlaying/index.jsx"
import Audio from "../../components/audio/audio.jsx"
import { connect } from 'react-redux'
import { setPageTitle, setInfoList } from '../../components/stores/action.jsx'

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentIndex: "1"
		}
		this.setCurrentIndex = this.setCurrentIndex.bind(this);
	}

	setCurrentIndex(event) {
		this.setState({
			currentIndex: event.currentTarget.getAttribute('index')
		})
	}
	componentDidMount() {
		let { setInfoList } = this.props;
		// 触发setInfoList action
		setInfoList()
	}
	render() {
		return <div>
			<HashRouter>
				<div>
					<div className="header-box-container">
						<div index="0" onClick={this.setCurrentIndex} className={this.state.currentIndex === "0" ? "header-box-active" : "header-box"}><Link to="/user" replace>我的</Link></div>
						<div index="1" onClick={this.setCurrentIndex} className={this.state.currentIndex === "1" ? "header-box-active" : "header-box"}><Link to="/" replace>推荐</Link></div>
						<div index="2" onClick={this.setCurrentIndex} className={this.state.currentIndex === "2" ? "header-box-active" : "header-box"}><Link to="/playing" replace>播放</Link></div>
						<div index="3" onClick={this.setCurrentIndex} className={this.state.currentIndex === "3" ? "header-box-active" : "header-box"}><Link to="/search" replace>搜索</Link></div>
					</div>
					<Switch>
						<Route path="/user" component={User} />
						<Route exact path="/" component={Recommend} />
						<Route path="/playing" component={MusicPlaying} />
						<Route path="/search" component={Search} />
					</Switch>
					<Audio url="http://www.ytmp3.cn/?down/47153.mp3" />
				</div>
			</HashRouter>
		</div>
	}
}

// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
	return {
		pageTitle: state.pageTitle,
		infoList: state.infoList
	}
};

// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		setPageTitle(data) {
			dispatch(setPageTitle(data))
		},
		setInfoList(data) {
			dispatch(setInfoList(data))
		},
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)