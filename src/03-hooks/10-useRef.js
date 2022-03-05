/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React,{useState,useRef} from 'react'

export default function App() {

    const [list,setList] = useState(["aa","bb","cc"])
    const mytext = useRef() // React.createRef()


    const handleAdd = ()=>{
        console.log(mytext.current.value)

        // list.push("")
        setList([...list,mytext.current.value])

        //清空
        // settext("")
        mytext.current.value = ""
    }

    const handleDel = (index)=>{
        console.log(index)
        var newlist = [...list]
        newlist.splice(index,1)
        setList(newlist)
    }
    return (
        <div>
            <input ref={mytext}/>
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
