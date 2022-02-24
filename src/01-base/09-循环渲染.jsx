import React, { Component } from 'react'

export default class App extends Component {
	state = {
		list: ['111', '222', '333']
	}
  render() {
		const newList = this.state.list.map(item => <li>{item}</li>)
    return (
      <div>
				<ul>
					{
						this.state.list.map(item => {
							return <li key={item}>{item}</li>
						})
					}
				</ul>
				<ul>
					{
						newList
					}
				</ul>
			</div>
    )
  }
}

/**
 * 为了列表的复用和重排，设置key值
 */
