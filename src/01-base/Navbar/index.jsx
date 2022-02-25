import React, { Component } from 'react'
import propTypes from 'prop-types'

export default class Navbar extends Component {
  // 这是类属性，是react支持的，不是引入的依赖propTypes支持的。它只是提供验证方法
  // 属性验证
  static propTypes = {
    title: propTypes.string,
    leftShow: propTypes.bool
  }
  // 属性默认值
  static defaultProps = {
    leftShow: true
  }
  render() {
    console.log(this.props)
    const {title, leftShow} = this.props
    return (
      <div>
        {leftShow && <button>返回</button>}
        Navbar={title}
      </div>
    )
  }
}

// 给属性做验证,这是类属性，写在类里面的是对象属性需要new出实例才可以访问
// 类属性在es7之后可以直接写入到类中，前面加上关键字static
// Navbar.propTypes = {
//   title: propTypes.string,
//   leftShow: propTypes.bool
// }