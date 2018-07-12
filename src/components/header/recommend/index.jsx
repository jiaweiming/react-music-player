import React from "react"
import "./index.less"
import {Icon, Carousel} from 'antd'
import {Link, Route, Switch} from "react-router-dom"
import Jazz from "./category/jazz.jsx"
import Latest from "./category/latest.jsx"
import Popular from "./category/popular.jsx"
import Disco from "./category/disco.jsx"

const Recommend = ({match}) => (
	<div>
		<Carousel autoplay>
			<div className="carousel"><a href="#"><img
				src="http://p1.music.126.net/hBts5rpWarNBYK0GksCrFg==/109951163392958515.jpg" alt=""/></a>
			</div>
			<div className="carousel"><a href="#"><img
				src="http://p1.music.126.net/_RjTlfRbPIAQvPFuO2spSQ==/109951163392649246.jpg" alt=""/></a>
			</div>
			<div className="carousel"><a href="#"><img
				src="http://p1.music.126.net/YfqP-rJaKcZm2mVCVlY5XA==/109951163391969887.jpg" alt=""/></a>
			</div>
			<div className="carousel"><a href="#"><img
				src="http://p1.music.126.net/i5rd5n7OM8b4A0N_cNCSRA==/109951163387800594.jpg" alt=""/></a>
			</div>
		</Carousel>
		<div className="recommend-hot">
			<div className="title"><Icon type="heart-o"/><h2>热门推荐</h2></div>
			<div className="recommend-box">
				<div className="box-nav">
					<div className="box-detail"><span><Icon type="customer-service"/>	<Link to={`${match.url}latest`}>180万</Link></span><Icon
						type="play-circle-o"/>
					</div>
					<a href="#"><img
						src="http://p1.music.126.net/A7llpK-DxGRc6LAMUjgT8w==/19052337486424281.jpg?param=240y240" alt=""/></a>
				</div>
				<div className="box-nav">
					<div className="box-detail"><span><Icon type="customer-service"/><Link
						to={`${match.url}disco`}>10万</Link></span><Icon type="play-circle-o"/>
					</div>
					<a href="#"><img
						src="http://p1.music.126.net/PRmxpnXD_F2PjEKjITaT5g==/109951163391429716.jpg?param=240y240" alt=""/></a>
				</div>
				<div className="box-nav">
					<div className="box-detail"><span><Icon type="customer-service"/><Link
						to={`${match.url}popular`}>40万</Link></span><Icon
						type="play-circle-o"/>
					</div>
					<a href="#"><img
						src="http://p1.music.126.net/OkYdZd7z1y84P6AmDqFH3w==/109951163336608077.jpg?param=240y240" alt=""/></a>
				</div>
				<div className="box-nav">
					<div className="box-detail"><span><Icon type="customer-service"/><Link
						to={`${match.url}jazz`}>20万</Link></span><Icon type="play-circle-o"/>
					</div>
					<a href="#"><img
						src="http://p1.music.126.net/fKQGpzT8UE3HtpWQBWq9hA==/109951163391652623.jpg?param=240y240" alt=""/></a>
				</div>
			</div>
		</div>
		<Switch>
			<Route path={`${match.url}popular`} component={Popular}/>
			<Route path={`${match.url}latest`} component={Latest}/>
			<Route path={`${match.url}jazz`} component={Jazz}/>
			<Route path={`${match.url}disco`} component={Disco}/>
		</Switch>
	</div>
);

export default Recommend
