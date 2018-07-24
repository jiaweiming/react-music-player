import React from "react"
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
    console.log(this.state.favoriteList)
    return <div>
      <h2>喜欢列表</h2>
      <ul>
        {this.state.favoriteList.map((item,index)=>{
          return <li key={index}>{item.author}-{item.title}</li>
        })}
      </ul>
    </div>
  }
}