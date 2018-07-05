import React from "react";
import "./index.less"
import { Button ,Carousel } from 'antd';

export default class Recommend extends React.Component{
	render(){

		return <div>
			<Carousel autoplay>
				<div><h3>1</h3></div>
				<div><h3>2</h3></div>
				<div><h3>3</h3></div>
				<div><h3>4</h3></div>
			</Carousel>
		</div>
	}
}