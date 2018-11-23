import React, {Component} from 'react'
import {Icon} from 'antd'
import './details.less'
import _http from '../../components/ajax/ajax.js'

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      list: [],
      song: [
        {
          id: '001',
          banner: 'https://cdn.shopify.com/s/files/1/0017/2956/0637/files/wei.jpg?2796984457047119115',
          title: '唯美中国风-魏新雨'
        },
        {
          id: '002',
          banner: 'https://cdn.shopify.com/s/files/1/0017/2956/0637/files/dzq.jpg?2796984457047119115',
          title: '网络红歌-G.E.M 邓紫棋'
        },
        {
          id: '003',
          banner: 'https://cdn.shopify.com/s/files/1/0017/2956/0637/files/hjsn.jpg?2796984457047119115',
          title: '西红柿首富-火箭少女101'
        },
        {
          id: '004',
          banner: 'https://cdn.shopify.com/s/files/1/0017/2956/0637/files/lrh.jpg?2796984457047119115',
          title: '年少有为-李荣浩'
        }
      ]
    };
    this.goBack = this.goBack.bind(this)
  }

  componentDidMount() {
    const url = '/list.json';
    _http.get(url).then((res) => {
      this.setState({
        list: res.data.music
      });
    })
  }

  goBack() { //返回上一级
    this.props.history.goBack()
  }


  render() {
    const {id, song, list} = this.state;
    return <div className='details-container'>
      {song.map((item, index) => {
        if (item.id === id) {
          return <div key={index}>
            <div className='title-nav'><Icon onClick={() => {this.goBack()}} className='arrow-back' type='arrow-left'/>
              <h3 className='title'>{item.title}</h3></div>
            <img className='banner-image' src={item.banner} alt=""/>
            <ul className='list'>
              {list.map((value, index) => {
                return <li key={index}><h4>{index+1 > 10? index +1 : `0${index+1}`} {value.title}</h4></li>})}
            </ul>
          </div>
        }
      })
      }
    </div>
  }
}
