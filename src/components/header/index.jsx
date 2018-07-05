import React from "react"
import  "./index.less"
import {Link} from "react-router-dom"

class Header extends React.Component{
	render(){
		return<div className="header-box-container">
			<div className="header-box"><Link to="/User">我的</Link></div>
			<div className="header-box"><Link to="/Recommend">推荐</Link></div>
			<div className="header-box"><Link to="/Playing">播放</Link></div>
			<div className="header-box"><Link to="/Search">搜索</Link></div>
		</div>
	}
}
export default Header

