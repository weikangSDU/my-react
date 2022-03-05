/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'

export default class KSwiperItem extends Component {
    render() {
        return (
            <div className="swiper-slide">
                {this.props.children}
            </div>
        )
    }
}
