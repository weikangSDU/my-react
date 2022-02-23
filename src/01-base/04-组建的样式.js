import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {
	render() {
		let myName = 'weikang'
		const obj = {
			background: 'yellow',
			fontSize: '20px'
		}
		// react中关键字避让 class --> className  label元素的for属性 htmlFor
		return (
			<div>
				{10 + 20} - {myName}
				<div style={{background: 'red'}}>111</div>
				<div style={obj}>222</div>
				<div className='active'>33333</div>
			</div>
		)
	}
}
