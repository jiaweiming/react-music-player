import React from "react"
import { setInfoList } from '../../../store/action.jsx'
import { connect } from 'react-redux'
import $ from "jquery"

class MusicPlaying extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount () {
		let { setInfoList } = this.props;
		setInfoList()
	}

	render() {
		let { infoList } = this.props;
		return <div>
			<ul>
				{infoList.map((item,index)=>{
					return <li key={index}>{item.author}</li>
				})}
			</ul>
		</div>
	}
}

const mapStateToProps = (state) => {
	return {
		infoList: state.infoList
	}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		setInfoList (data) {
			dispatch(setInfoList(data))
		},
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlaying)