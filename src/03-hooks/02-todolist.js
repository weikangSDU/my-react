/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React,{useState} from 'react'

export default function App() {

    const [text, settext] = useState("")
    const [list,setList] = useState(["aa","bb","cc"])


    const handleChange = (evt)=>{
        // console.log("handleChange",evt.target.value)

        settext(evt.target.value)
    }

    const handleAdd = ()=>{
        console.log(text)

        // list.push("")
        setList([...list,text])

        //情况
        settext("")
    }

    const handleDel = (index)=>{
        console.log(index)
        var newlist = [...list]
        newlist.splice(index,1)
        setList(newlist)
    }
    return (
        <div>
            <input onChange={handleChange}  value={text}/>
            <button onClick={handleAdd}>add</button>
            <ul>
            {
                list.map((item,index)=>
                <li key={item}>
                    {item}
                    <button onClick={()=>handleDel(index)}>del</button>
                </li>
                )
            }
            </ul>

            {!list.length  && <div>暂无待办事项</div>}
        </div>
    )
}
