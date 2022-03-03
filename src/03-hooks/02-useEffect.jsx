import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function App() {
  const [list, setList] = useState([])
  /**
   * 下面的这种写法在函数组件中因为更新了状态会把整个App()都会重新执行一次，故会一直请求
   */
  // axios.get('./test.json').then(res => {
  //   if (res) {
  //     console.log(res.data.data)
  //     setList(res.data.data.films)
  //     console.log(list, '123') // 同步代码异步更新
  //   }
  // })
  useEffect(() => {
    axios.get('./test.json').then(res => {
      if (res) {
        console.log(res.data.data)
        setList(res.data.data.films)
      }
    })
  }, [])
  return (
    <div>
      {
        list.map(item => {
          return <li key={item.filmId}>{item.name}</li>
        })
      }
    </div>
  )
}
