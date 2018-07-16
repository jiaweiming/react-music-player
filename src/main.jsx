import React from 'react'
import ReactDOM from 'react-dom'
import Home from "./components/home/home.jsx"

// Provider是react-redux两个核心工具之一，作用：将store传递到每个项目中的组件中
// 第二个工具是connect，稍后会作介绍
import { Provider } from 'react-redux'
// 引入创建好的store实例
import store from './store/index.jsx'

// 渲染DOM
ReactDOM.render (
		<div>
			<Provider store = {store}>
				<Home />
			</Provider>
		</div>,
	document.getElementById('APP')
);





