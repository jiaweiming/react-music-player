import React from "react"
import "./index.less"
import { connect } from 'react-redux'
import { setPageTitle, setInfoList } from '../../components/stores/action.jsx'
import App from '../../components/routers/route.jsx'
import Audio from '../../components/audio/audio.jsx'

class Home extends React.Component {
	constructor(props) {
		super(props);
	}


	componentDidMount() {
		let { setInfoList } = this.props;
		// 触发setInfoList action
		setInfoList()
	}
	render() {
		return <div>
			<div className="loading" id='loading'>
				<img src='https://cdn.shopify.com/s/files/1/0017/2956/0637/files/Spinner-1s-200px.svg?16576025696008744384' alt=""/>
			</div>
      <App/>
      <Audio/>
		</div>
	}
}

// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
	return {
		pageTitle: state.pageTitle,
		infoList: state.infoList
	}
};

// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		setPageTitle(data) {
			dispatch(setPageTitle(data))
		},
		setInfoList(data) {
			dispatch(setInfoList(data))
		},
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)