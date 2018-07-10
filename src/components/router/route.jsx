import React from "react"
import {HashRouter, Switch, Route} from "react-router-dom"
import Recommend from "../header/recommend/index.jsx"
import Search from "../header/search/index.jsx"
import User from "../header/user/user.jsx"
import MusicPlaying from "../header/musicPlaying/index.jsx"
import Header from "../header/index.jsx"
import Footer from "../footer/index.jsx"

const MainContent = () => (
	<HashRouter>
		<div>
			<Header/>
			<Switch>
				<Route path="/User" component={User}/>
				<Route exact path="/" component={Recommend}/>
				<Route path="/Playing" component={MusicPlaying}/>
				<Route path="/Search" component={Search}/>
			</Switch>
			<Footer/>
		</div>
	</HashRouter>
);
export default MainContent



