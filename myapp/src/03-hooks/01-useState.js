/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React,{useState} from 'react'

export default function App() {

    const [name,setName] = useState("kerwin")
    const [age, setage] = useState(100)
    // console.log(obj)
    return (
        <div>
            <button onClick={()=>{
                // console.log(name)
                setName("xiaoming")
                setage(18)
            }}>click</button>
            app-{name}-{age}
        </div>
    )
}
