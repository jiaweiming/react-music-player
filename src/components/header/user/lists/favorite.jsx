import React from "react"
import "./index.less"
import {Icon} from "antd"
import store from "../../../stores/index.jsx"


export default class FavoriteLists extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      favoriteList:store.getState().collectionList
    }
    store.subscribe(()=>{
      this.setState({
        favoriteList:store.getState().collectionList
      })
    })
  }
  componentWillUnmount() { //用于消除异步操作，组件未挂载，而setState失败
    this.setState = (state, callback) => {
      return;
    };
  }
  render(){
    return <div>
      <h2 className="favorite-icon"><Icon type="customer-service" /><Icon type="heart" /></h2>
      <ul>
        {this.state.favoriteList.map((item,index)=>{
          return <li className="favorite-list-item" key={index}>{index > 9 ? index+1 : "0"+(index+1)}-{item.author}-{item.title}</li>
        })}
      </ul>
    </div>
  }
}