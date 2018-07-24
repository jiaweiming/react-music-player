import React from "react"
import { Icon } from "antd"
import "./index.less"
import store from "../../../stores/index.jsx"
import { connect } from 'react-redux'
import { setCollectionList } from '../../../stores/action.jsx'

class DefaultLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultList: store.getState().infoList,
      favoriteIndex: 0,
      collectionLists: []
    }
    this.arr = store.getState().collectionList;
    store.subscribe(() => {
      this.arr = store.getState().collectionList;
      this.setState({
        defaultList: store.getState().infoList,
      })
    })
    this.setMusicIntoFavorite = this.setMusicIntoFavorite.bind(this)
  }
  componentWillUnmount() { //用于消除异步操作，组件未挂载，而setState失败
    this.setState = (state, callback) => {
      return;
    };
  }

  setMusicIntoFavorite(item, index, event) {
    let allHeart = document.getElementsByClassName("heart");
    this.arr.push(item);
    this.setState(({
      collectionLists: this.arr.length === 0 ? item : this.arr,
      favoriteIndex: parseInt(event.currentTarget.getAttribute('index'))
    }), () => {
      let { setCollectionList } = this.props;
      let newArr = Array.from(new Set(this.state.collectionLists)) //数组去重
      setCollectionList(newArr);
      // allHeart[this.state.favoriteIndex].className.join("heart-active");
    });
  }

  render() {
    return <div className="list-three-all">
      <ul>
        {this.state.defaultList.map((item, index) => {
          return <li className="music-my-li" key={index}>
            <span className="list-title-default" >{(index + 1) > 9 ? index + 1 : "0" + (index + 1)}-<Icon type="play-circle-o" />-{item.author}-{item.title}</span>
            <span index={index} onClick={(e) => { this.setMusicIntoFavorite(item, index,e) }} className='add-to-favorite'><Icon className="heart" type="heart"/></span>
          </li>
        })}
      </ul>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    collectionLists: state.collectionLists
  }
};

// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setCollectionList(data) {
      dispatch(setCollectionList(data))
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLists)