import React from "react"
import axios from "axios"
import "./index.less"
import { Spin } from 'antd'

export default class User extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			url: ''
		}
	}

	toggleSongs(e) {
		console.log(e.target.getAttribute("data-link"));
		this.setState({
			url: e.target.getAttribute("data-link")
		})
	}

	render() {
		let datas = this.state.items;
		return <div className="content-bar">
			<div className="example loading">
				<Spin size="large" />
			</div>
			<ul className="music-list-all">
				{datas.map((item, i) => {
					return <li onClick={(e) => {this.toggleSongs(e)
					}} data-link={item.url} key={i} className="music-list-item">{(i + 1) > 9 ? i + 1 : "0" + (i + 1)}-{item.author}-{item.title}</li>
				})}
			</ul>
		</div>
	}

	componentDidMount() {
		const that = this;
		const loading = document.getElementsByClassName("loading")[0];
		loading.style.display = "block";
		const dataUrl = "http://zhengjinwei.top:3003/list.json";
		axios.get(dataUrl).then(function (res) {
			that.setState({
				items: res.data.music
			})
			loading.style.display = "none";
		}).catch(function (error) {
			console.log(error)
		})
	}
}