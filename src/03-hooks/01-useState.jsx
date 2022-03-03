import React, { useState } from 'react'

export default function App() {
  const [text, setText] = useState('')
  const [list, setList] = useState([])
  const handleInput = (evt) => {
    console.log(evt.target.value,)
    setText(evt.target.value)
  }
  const handleList = () => {
    setList([...list, text])
    setText('')
  }
  const delItem = (index) => {
    var newList = list.slice()
    newList.splice(index, 1)
    setList(newList)
  }
  return (
    <div>
      <input type={'text'} onChange={(evt) => { handleInput(evt) }} value={text} />
      <button onClick={() => {
        handleList()
      }}>add</button>
      <ul>
        {
          list.map((item,index) => {
            return (
              <div>
                <li key={index} style={{display: 'inline'}}>{item}</li>
                <button onClick={() => delItem(index)}>del</button>
              </div>
            )
          })
        }
      </ul>
    </div>
  )
}
