import React from "react"
import "./index.less"
import {Progress, Button, Icon} from 'antd'

class Audio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			allTime: 0,
			currentTime: 0,
			isPlay: true,
			percentProgress: 0,
			songs: props.url,
			currentMusic:{}
		}
	}


	componentWillReceiveProps(nextProps) {
		this.setState({
			currentMusic:nextProps.data[0]
		});
	}


	//播放暂停
	play(){
		this.setState({
			isPlay: !this.state.isPlay
		})
	};
	//format time
	formatTime(time){
		const second = Math.floor(time % 60);
		let minutes = Math.floor(time / 60);
		return `0${minutes}:${second > 10 ? second : `0${second}`}`
	};

	last(){  //上一首切换
		if(!this.state.currentMusic.url){
			return false
		}
		let current = '';
		this.props.info.map((value,index) => {
			if(value.url === this.state.currentMusic.url){
				current = index
			}
		});
		if(current > 0){
			this.setState({
				currentMusic:this.props.info[current - 1]
			},()=>{
				this.play()
			})
		}else{
			this.setState({
				currentMusic:this.props.info[this.props.info.length -1]
			},() =>{
				this.play()
			})
		}
	}

	next(){  //下一首
		if(!this.state.currentMusic.url){
			return false
		}
		let current = '';
		this.props.info.map((value,index) =>{
			if(value.url === this.state.currentMusic.url){
				current = index
			}
		});
		if(current < this.props.info.length-1){
			this.setState({
				currentMusic:this.props.info[current+1]
			},()=>{
				this.play()
			})
		}else{
			this.setState({
				currentMusic:this.props.info[0]
			},()=>{
				this.play()
			})
		}
	}

	playThis(i){ //播放随机点击的歌曲
		this.setState({
			currentMusic:this.props.info[i]
		},()=>{
			this.play()
		})
	}

	controlAudio(type,value){
		const {id, src} = this.props;
		const audio = document.getElementById(`audio${id}`);
		switch (type) {
			case 'allTime':
				this.setState({
					allTime: audio.duration
				});
				break;
			case 'currentTime':
				this.setState({
					currentTime: audio.currentTime
				});
				break;
			case 'play':
				this.setState({
					isPlay: audio.play()
				});
				break;
			case 'pause':
				this.setState({
					isPlay: audio.pause()
				});
				break;
			case 'changeCurrentTime':
				this.setState({
					currentTime: value
				});
				if (value === audio.duration) {
					this.setState({
						isPlay: false
					})
				}
				break;
			case 'getCurrentTime':
				this.setState({
					currentTime:audio.currentTime
				});
				if(audio.currentTime === audio.duration){
					this.setState({
						isPlay: false
					})
				}
		}
	};

	render() {
		let {isPlay, allTime, currentTime, songs,currentMusic} = this.state;
		let audioTime = currentTime / allTime * 100;
		return <div className="footer-tab-container">

			<audio id={`audio${this.props.id}`} autoPlay="autoPlay"
			       loop="loop"
			       onCanPlay={() => this.controlAudio('allTime')}
			       onTimeUpdate={(e) => this.controlAudio("getCurrentTime")}>
				<source src={songs} type="audio/mpeg"/>
			</audio>
			<div className="play-time-progress">
				<span className="current-time">{this.formatTime(currentTime)}</span>
				<Progress className="play-progress" onChange={(value) => this.controlAudio('changeCurrentTime', value)} percent={audioTime} showInfo={false}/>
				<span className="total-time">{this.formatTime(allTime)}</span>
			</div>
			<div className="footer-control">
				<Button type="primary" className="play-btn play-last" onClick={this.last}>
					<Icon type="fast-backward" className="play-left-right"/>
				</Button>
				<Button type="primary" className="play-btn play-pause"
				        onClick={() => this.controlAudio(isPlay ? 'pause' : 'play')}>
					<Icon type="play-circle-o" className="play-pause"/>
				</Button>
				<Button type="primary" className="play-btn play-right" onClick={this.next}>
					<Icon type="fast-forward" className="play-left-right"/>
				</Button>
				<Button type="primary" className="play-btn play-recent-list">
					<Icon type="profile" className="play-left-right"/>
				</Button>
			</div>
		</div>
	}

}

export default Audio
