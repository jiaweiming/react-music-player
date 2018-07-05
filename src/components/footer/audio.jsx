import React, {Component} from 'react';
import '../../assets/css/work_order.css';
import {Form,Radio} from 'antd';
import {Link} from 'react-router-dom';
import play from '../../assets/images/plays.png';
import pause from '../../assets/images/pause.png';
const FormItem = Form.Item;
class Sound_content extends Component{
	constructor(props) {
		super(props);
		console.log(props.src)
		this.state = {
			isPlay: false,
			isMuted: false,
			volume: 100,
			allTime: 0,
			currentTime: 0,
			value:10,
			songs: props.src
		};
	}
	//播放按钮
	play=()=>{
		this.setState({
			isPlay: !this.state.isPlay
		})
	};

	millisecondToDate(time) {
		const second = Math.floor(time % 60);
		let minite = Math.floor(time / 60);
		// let hour
		// if(minite > 60) {
		//   hour = minite / 60
		//   minite = minite % 60
		//   return `${Math.floor(hour)}:${Math.floor(minite)}:${Math.floor(second)}`
		// }
		return `${minite}:${second >= 10 ? second : `0${second}`}`;
	}

	controlAudio(type, value) {
		const { id, src } = this.props;
		const audio = document.getElementById(`audio${id}`);
		switch(type) {
			case 'allTime':
				this.setState({
					allTime: audio.duration
				});
				break;
			case 'play':
				audio.play();
				this.setState({
					isPlay: true
				});
				break;
			case 'pause':
				audio.pause();
				this.setState({
					isPlay: false
				});
				break;
			case 'muted':
				this.setState({
					isMuted: !audio.muted
				});
				audio.muted = !audio.muted;
				break;
			case 'changeCurrentTime':
				this.setState({
					currentTime: value
				});
				audio.currentTime = value;
				if(value === audio.duration) {
					this.setState({
						isPlay: false
					});
				}
				break;
			case 'getCurrentTime':
				this.setState({
					currentTime: audio.currentTime
				});
				if (audio.currentTime === audio.duration) {
					this.setState({
						isPlay: false
					});
				}
				break;
			case 'changeVolume':
				audio.volume = value / 100;
				this.setState({
					volume: value,
					isMuted: !value
				});
				break;
		}
	}
	render(){
		let {isPlay, isMuted, volume, allTime, currentTime,songs} = this.state;
		let audio_time=currentTime/allTime*100;
		return(
			<div style={{width:'100%',height:'100%',padding:'30px 0px 0px 0px',overflow:'hidden'}}>
				<div className="Personage-introduction">
					<div className="personal-choices">
						<Form onSubmit={this.handleSubmit}>
							<div className="audio_music">
								<div className="audioBox">
									<audio
										id={`audio${this.props.id}`}
										src={songs}
										preload="true"
										onCanPlay={() => this.controlAudio('allTime')}
										onTimeUpdate={(e) => this.controlAudio('getCurrentTime')}
									>
										您的浏览器不支持 audio 标签。
									</audio>
									<div className="auido-photos">
										<img onClick={() => this.controlAudio(isPlay ? 'pause' : 'play')} src={this.state.isPlay?pause:play} alt=""/>
									</div>
									<div className="Playback_progress">
										<div className="times current">
											<h3 className="startTime">{this.millisecondToDate(currentTime)}</h3>
											<h3 className="endTime">{this.millisecondToDate(allTime)}</h3>
										</div>
										<div
											className="time speeds"
											type="range"
											onChange={(value) => this.controlAudio('changeVolume', value)}
											value={isMuted ? 0 : volume}
										>
											<div className="speeds_motion volume"
											     type="range"
											     onChange={(value) => this.controlAudio('changeVolume', value)}
											     value={isMuted ? 0 : volume}
											     style={{width:audio_time + '%'}}
											>
											</div>
											<div className="speeds-btn volume"
											     type="range"
											     step="0.01"
											     max={allTime}
											     value={currentTime}
											     style={{left:audio_time-2+ '%'}}
											     onChange={(value) => this.controlAudio('changeCurrentTime', value)}>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Form>
					</div>
				</div>
			</div>
		)
	}
}
export default Sound_content;