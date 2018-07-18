import React from "react"
import ReactDom from "react-dom"
import Home from "./components/home/home.jsx"
import store from './components/stores/index.jsx'
import {Provider} from "react-redux"

ReactDom.render(
	<div>
			<Provider store={store}>
				<Home />
			</Provider>
	</div>,
	document.getElementById('APP')
);


