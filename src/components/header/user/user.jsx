import React from "react"
import $ from "jquery"
import "./index.less"
import { Spin } from 'antd'

export default class User extends React.Component{
	constructor(props){
		super(props);
		this.state={
			items:[]
		}
	}

	toggleSongs(e){
		console.log(e.target.getAttribute("data-link"));
		this.setState({
			url:e.target.getAttribute("data-link")
		})
	}

	render() {
		const loadingHide = {
			display: "none"
		};
		let datas = this.state.items;
		return <div className="content-bar">
			<div className="example loading" style={loadingHide}>
				<Spin size="large"/>
			</div>
			<ul className="music-list-all">
				{datas.map((item, i) => {
					return <li onClick={(e) => {
						this.toggleSongs(e)
					}} data-link={item.url} key={i} className="music-list-item">{i + 1}-{item.author}-{item.title}</li>
				})}
			</ul>
		</div>
	}
	componentDidMount(){
		$.ajax({
			type:"GET",
			async:true,
			url:"http://zhengjinwei.top:3003/list.json",
			dataType:"json",
			beforeSend:function () {
				$(".loading").show();
			}.bind(this),
			success:function (res) {
				this.setState({
					items:res.music
				})
			}.bind(this),
			error:function (res) {
				alert("Some error happened...")
			}.bind(this),
			complete:function () {
				$(".loading").hide();
			}.bind(this)
		})
	}
}