import React from "react"
import "./index.less"
import store from "../../stores/index.jsx"

export default class MusicPlaying extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: store.getState().songTitle,
			author: store.getState().songAuthor,
			avatar: store.getState().songAvatar,
			isPlaying: store.getState().songIsPlaying
		}

		store.subscribe(() => {
			this.setState({
				title: store.getState().songTitle,
				author: store.getState().songAuthor,
				avatar: store.getState().songAvatar,
				isPlaying: store.getState().songIsPlaying
			})
		});
	}

	componentWillUnmount (){ //用于消除异步操作，组件未挂载，而setState失败
    this.setState = (state,callback)=>{
      return;
    };
	}	

	render() {
		return <div className="playing-box">
			<h2 className="playing-title">{this.state.title}</h2>
			<h4 className="playing-author">{this.state.author}</h4>
			<div className="playing-img" >
				<img src={this.state.avatar} alt="" className={this.state.isPlaying === true ? '' : "playing-paused"} />
			</div>
		</div>
	}
}

