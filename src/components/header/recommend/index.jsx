import React from "react"
import "./index.less"
import {Icon, Carousel} from 'antd'
import {Template} from "../../routers/template.jsx"
import {withRouter,Link} from 'react-router-dom'
import PropTypes from 'prop-types'

class Recommend extends React.Component {
  constructor(props){
    super(props);
    this.linkTo = this.linkTo.bind(this);
    this.state={
      recommend:[{
          id:'001',
          count:'魏新雨',
          image:'http://singerimg.kugou.com/uploadpic/softhead/240/20180814/20180814162531430.jpg'
        },
        {id:'002',
          count:'邓紫棋',
          image:'http://imge.kugou.com/stdmusic/20161229/20161229233400375274.jpg'
        },
        {id:'003',
          count:'火箭少女101',
          image:'http://imge.kugou.com/stdmusic/20180801/20180801151353981015.jpg'
        },
        {id:'004',
          count:'李荣浩',
          image:'http://imge.kugou.com/stdmusic/20181016/20181016175052135501.jpg'
        }
      ]
    }
  }

  linkTo(item, index) {
    this.props.history.push({pathname: '/details/' + item.id, state: item})
  }

  render() {
    return <Template>
      <div className='recommend'>
        <Carousel autoplay>
          <div className="carousel">
            <a><img src="http://p1.music.126.net/hBts5rpWarNBYK0GksCrFg==/109951163392958515.jpg" alt=""/></a>
          </div>
          <div className="carousel">
            <a><img src="http://p1.music.126.net/_RjTlfRbPIAQvPFuO2spSQ==/109951163392649246.jpg" alt=""/></a>
          </div>
          <div className="carousel">
            <a><img src="http://p1.music.126.net/YfqP-rJaKcZm2mVCVlY5XA==/109951163391969887.jpg" alt=""/></a>
          </div>
          <div className="carousel">
            <a><img src="http://p1.music.126.net/i5rd5n7OM8b4A0N_cNCSRA==/109951163387800594.jpg" alt=""/></a>
          </div>
        </Carousel>
        <div className="recommend-hot">
          <div className="title"><Icon type="heart-o"/><h2>热门推荐</h2></div>
          <div className="recommend-box">
            {this.state.recommend.map((item, index) => {
              return <div key={index} className="box-nav">
                <Link to={`/details/${item.id}`} ><img src={item.image} alt=""/></Link>
              </div>
            })}
          </div>
        </div>
      </div>
    </Template>
  }
}

export default withRouter(Recommend)