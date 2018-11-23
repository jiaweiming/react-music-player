import React from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom'
import User from '../../components/header/user/user.jsx'
import Play from '../../components/header/musicPlaying/index.jsx'
import Recommend from '../../components/header/recommend/index.jsx'
import Search from '../../components/header/search/index.jsx'
import Details from '../../components/home/details.js'


export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list:[{'list':"no"}]
    }
  }
  render(){
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route exact path='/' component={User}/>
            <Route path='/user' component={User}/>
            <Route path='/recommend' component={Recommend}/>
            <Route path='/play' component={Play}/>
            <Route path='/search' component={Search}/>
            <Route path='/details/:id' component={Details}/>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}
