import React from "react"
import { Icon } from "antd"
import "./index.less"
import store from "../../../stores/index.jsx"
import { connect } from 'react-redux'
import { setCollectionList, setHotHeart, setSongTitle, setSongAvatar, setSongAuthor, setSongUrl } from '../../../stores/action.jsx'

class DefaultLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultList: store.getState().infoList,
      favoriteIndex: 0,
      collectionLists: store.getState().collectionList,
      hotHeart: [],
      songUrl: store.getState().songUrl,
      SongAuthor: store.getState().songAuthor,
      songTitle: store.getState().songTitle,
      songAvatar: store.getState().songAvatar
    }
    this.arrList = store.getState().collectionList;
    this.arrHeart = store.getState().hotHeart;
    store.subscribe(() => {
      this.arrList = store.getState().collectionList;
      this.arrHeart = store.getState().hotHeart;
      this.setState({
        defaultList: store.getState().infoList,
        songUrl: store.getState().songUrl,
        SongAuthor: store.getState().songAuthor,
        songTitle: store.getState().songTitle,
        songAvatar: store.getState().songAvatar
      })
    })

    this.setMusicIntoFavorite = this.setMusicIntoFavorite.bind(this);
    this.switchMusic = this.switchMusic.bind(this)
  }
  componentWillUnmount() { //用于消除异步操作，组件未挂载，而setState失败
    this.setState = (state, callback) => {
      return;
    };
  }

  setMusicIntoFavorite(item, index, event) {
    let { setCollectionList, setHotHeart } = this.props;
    if (this.arrList.includes(item)) {//判断是否已进入，然后找到索引，再删除，修改原数组
      this.arrList.splice(this.arrList.indexOf(item), 1);
      this.arrHeart.splice(this.arrHeart.indexOf(item), 1)
      this.setState(({
        collectionLists: this.arrList,
        hotHeart: this.arrHeart
      }), () => {  //在setState的回调函数内执行action函数，避免异步state未结束，而执行函数
        let newArrList = Array.from(new Set(this.state.collectionLists)) //数组去重
        let newArrHeart = Array.from(new Set(this.state.hotHeart))
        setCollectionList(newArrList);
        setHotHeart(newArrHeart)
      });
    } else {
      this.arrList.push(item);
      this.arrHeart.push(index)
      this.setState(({
        collectionLists: this.arrList,
        hotHeart: this.arrHeart
      }), () => {
        let newArrList = Array.from(new Set(this.state.collectionLists))
        let newArrHeart = Array.from(new Set(this.state.hotHeart))
        setCollectionList(newArrList);
        setHotHeart(newArrHeart)
      });
    }
  }

  switchMusic(item) {
    let { setSongUrl, setSongAuthor, setSongAvatar, setSongTitle } = this.props;
    this.setState(({
      songUrl: item.url,
      SongAuthor: item.author,
      songTitle: item.title,
      songAvatar: item.avatar
    }), () => {
      setSongUrl(item.url);
      setSongAuthor(item.author);
      setSongAvatar(item.avatar);
      setSongTitle(item.title)
    })
  }

  render() {
    return <div className="list-three-all">
      <ul>
        {this.state.defaultList.map((item, index) => {
          return <li className={this.state.songTitle === item.title ? "music-my-li-active" : "music-my-li"} key={index}>
            <span onClick={(e) => { this.switchMusic(item, index) }} className="list-title-default" >{(index + 1) > 9 ? index + 1 : "0" + (index + 1)}-<Icon type="play-circle-o" />-{item.author}-{item.title}</span>
            <span index={index} onClick={(e) => { this.setMusicIntoFavorite(item, index, e) }} className='add-to-favorite'><Icon index={index} className={this.state.collectionLists.includes(item) ? "heart" : ""} type="heart" /></span>
          </li>
        })}
      </ul>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    collectionLists: state.collectionLists,
    hotHeart: state.hotHeart,
    songUrl: state.songUrl,
    songAvatar: state.songAvatar,
    songTitle: state.songTitle,
    SongAuthor: state.SongAuthor
  }
};

// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setCollectionList(data) {
      dispatch(setCollectionList(data))
    },
    setHotHeart(data) {
      dispatch(setHotHeart(data))
    },
    setSongAuthor(data) {
      dispatch(setSongAuthor(data))
    },
    setSongUrl(data) {
      dispatch(setSongUrl(data))
    },
    setSongTitle(data) {
      dispatch(setSongTitle(data))
    },
    setSongAvatar(data) {
      dispatch(setSongAvatar(data))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLists)