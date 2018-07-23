import React from "react"
import {Icon} from "antd"
import "./index.less"
import store from "../../../stores/index.jsx"

export default class DefaultLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultList: store.getState().infoList
    }
    store.subscribe(() => {
      this.setState({
        defaultList: store.getState().infoList
      })
    })
  }
  render() {
    return <div className="list-three-all">
      <ul>
        {this.state.defaultList.map((item, index) => {
          return <li  className="music-my-li" key={index}>
          <span >{(index + 1) >9 ? index + 1 : "0" + (index + 1)}-<Icon type="play-circle-o" />-{item.author}-{item.title}</span>
          <span className="add-to-favorite"><Icon type="heart-o" /></span>
          </li>
        })}
      </ul>
    </div>
  }
}