import React from "react";
import "./index.less"
import { Input } from 'antd';
import {Template} from "../../routers/template.jsx";

export default class Search extends React.Component{
	render(){
		const Search = Input.Search;
		return <Template>
			<div className="Search-input">
				<Search placeholder="周杰伦" onSearch={value => SearchSong(value)} enterButton/>
			</div>
		</Template>;
	}
}