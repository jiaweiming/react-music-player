import React from "react"
import Audio from "../home/audio/audio.jsx"
import $ from "jquery"

class Footer extends React.Component {
	constructor(props){
		super(props);
		this.state={
			songs:[],
			test:[
				{url:"http://www.ytmp3.cn/?down/40915.mp3"}
			]
		}
	}

	render() {
		return <div>
			<Audio id="my-audio" url="http://www.ytmp3.cn/?down/40915.mp3" data={this.state.songs}/>
		</div>
	}

	setItems(data){
		this.setState({
			songs:data
		});
	}

	componentDidMount(){
		$.ajax({
			type:"GET",
			async:true,
			url:"http://zhengjinwei.top:3002/files/list.json",
			dataType:"json",
			beforeSend:function () {
				$(".loading").show();
			},
			success:function (res) {
				this.setItems(res.music[0].directory);
			}.bind(this),
			error:function (res) {
				alert("Some error happened...")
			},
			complete:function () {
				$(".loading").hide();
			}
		})
	}
}

export default Footer
