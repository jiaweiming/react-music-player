import React from "react"
import ReactDom from "react-dom"
import Home from "./components/home/home.jsx"
import {createStore} from 'redux'
import {Provider,connect} from 'react-redux'

class APP extends React.Component{
	render(){
		const {text,onChangeText,onButtonClick} =this.props;
		return <div>
			<h2 onClick={onChangeText}>{text}</h2>
			<button onClick={onButtonClick}>CLICK ME</button>
		</div>
	}
}

const changeTextAction ={
	type:"CHANGE_TEXT"
};

const buttonClickAction ={
	type:"BUTTON_CLICK"
};

const initialState = {
	text:"Hello"
};

//action
const reducer = ((state=initialState,action)=>{
	switch (action.type){
		case 'CHANGE-TEXT':
			return{
				text:state.text === 'Hello'? "WORLD":"HELLO"
			};
		case 'BUTTON_CLICK':
			return{
				text:"HELLO!!!!!!"
			};
		default:return initialState
	}
});

//store
let store = createStore(reducer);

const mapStateToProps=(state)=>{
	return{
		text:state.text
	}
};

const mapDispatchToProps = (dispatch)=>{
	return{
		onButtonClick:()=>{dispatch(buttonClickAction)},
		onChangeText:()=>{dispatch(changeTextAction)}
	}
};

APP = connect(mapStateToProps,mapDispatchToProps)(APP);

ReactDom.render(
	<Provider store={store}>
		<APP/>
	</Provider>,
	document.getElementById('APP')
);




