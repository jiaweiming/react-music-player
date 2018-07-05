import React from "react";
import "./index.less"
import { Input } from 'antd';
import $ from "jquery"

export default class Search extends React.Component{
	render(){
		const Search = Input.Search;
		const SearchSong = (value)=> (
			$.ajax({
				type: "POST",
				dataType: 'json',
				crossDomain: true,
				url: "http://mobilecdn.kugou.com/api/v3/search/song?format=json&keyword="+value+"&page=1&pagesize=20&showtype=1",
				success: function(data){
					console.log(data)

				},
				complete:function (data) {
					console.log(data)
				}
			})
		);

		return <div className="Search-input">
			<Search placeholder="周杰伦" onSearch={value => SearchSong(value)} enterButton/>
		</div>;


	}
}