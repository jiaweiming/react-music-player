import React from "react"
import "./index.less"
import store from "../../stores/index.jsx"

export default class MusicPlaying extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title:store.getState().songTitle,
			author:store.getState().songAuthor,
			avatar:store.getState().songAvatar,
		}
		store.subscribe(() => {
			this.state.title = store.getState().songTitle; 
			this.state.author = store.getState().songAuthor; 
			this.state.avatar = store.getState().songAvatar; 
	});
	}


	render() {
		return <div>
			<h3 className="playing-title">{this.state.author}-{this.state.title}</h3>
			<div className="playing-img">
				<img src={this.state.avatar} alt=""/>
			</div>
		</div>
	}
}