/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'

class Child extends Component{
    render(){
        return <div>
            child

            {/* 插槽 vue slot,具名插槽 */}

            {this.props.children[2]}
            {this.props.children[1]}
            {this.props.children[0]}
        </div>
    }
}

class Swiper extends Component{
    render(){
        return <div>
            {this.props.children}
        </div>
    }
}

export default class App extends Component {
    render() {
        return (
            <div>

                <Swiper>
                    <div>111111</div>
                    <div>222222</div>
                    <div>333333</div>
                </Swiper>
                <Swiper>
                    {/* <div><img/>111111</div>
                    <div><img/>222222</div>
                    <div><img/>333333</div> */}
                </Swiper>
                <Swiper>
                    {/* <img/>
                    <img/>
                    <img/> */}
                </Swiper>

                
                <Child>
                    <div>11111111</div>
                    <div>22222222</div>
                    <div>33333333</div>
                    {
                        // children
                    }
                </Child>
            </div>
        )
    }
}


/*
  1. 为了复用
  2. 一定程度减少父子通信。
*/
