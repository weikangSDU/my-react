/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import MRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
import './views/css/App.css'
import store from './redux/store'
export default class App extends Component {
    state = {
        isShow: store.getState().show
    }
    // store.subsribe 订阅
    componentDidMount() {
        store.subscribe(()=> {
            console.log('app 订阅', store.getState())
            this.setState({
                isShow: store.getState().show
            })
        })
    }
    render() {
        return (
           <div>
                {/* 其他的内容 */}
                <MRouter>
                    {this.state.isShow && <Tabbar></Tabbar>}
                </MRouter>
           </div>
        )
    }
}

/*
 /films ===>Films
 /cinemas ===>Cinemas
 /center ===> Center


 
*/