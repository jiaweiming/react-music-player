import React,{Component} from "react"
import ReactDom from "react-dom"
import Home from "./components/home/home.jsx"
import {createStore} from 'redux'
import {Provider,connect} from 'react-redux'

//计数组件
class Counter extends Component{
	render(){
		const {value,onIncreaseClick} = this.props;
		return <div>
			<span>{value}</span>
			<button onClick={onIncreaseClick}>click</button>
		</div>
	}
}

//定义的用户操作类型
const increaseAction = {type:"increase"};

//reducer 处理逻辑计算
function counter(state={count:0},action) {
	const count = state.count;
	switch (action.type){
		case 'increase':
			return {count:count+1};
		default :
			return state
	}
}

//store 用于存储计算后的数据
const store = createStore(counter);

function mapStateToProps(state) {
	return {
		value:state.count
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onIncreaseClick:()=>dispatch(increaseAction)
	}
}

const APP =connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter);






ReactDom.render(
	<Provider store={store}>
		<APP/>
	</Provider>,
	document.getElementById('APP')
);




