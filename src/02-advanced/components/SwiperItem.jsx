import React, { Component } from 'react'

export default class WswiperItem extends Component {
  render() {
    return (
      <div className="swiper-slide">
        {this.props.children}
      </div>
    )
  }
}
