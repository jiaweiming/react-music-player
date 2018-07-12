import React from 'react'

export default class Header extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			clickIndex:0
		}
	}
	render(){
		return <div>
			<div className="header-box-container">
				<div className="header-box">我的</div>
				<div className="header-box">推荐</div>
				<div className="header-box">播放</div>
				<div className="header-box">搜索</div>
			</div>
			<div>

			</div>
		</div>
	}
}