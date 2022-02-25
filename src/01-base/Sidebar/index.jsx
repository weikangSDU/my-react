import React from 'react'
// 函数组件没有this，直接使用形参
export default function Siderbar(props) {
  const {bg: color} = props
  return (
    <div style={{background: color}}>
      <ul>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
      </ul>
    </div>
  )
}
// 函数式组件验证必须卸载外面了
// Siderbar.defaultProps
// Siderbar.propTypes
