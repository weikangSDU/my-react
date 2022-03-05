/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import Swiper , { Navigation, Pagination }from 'swiper'
import 'swiper/swiper-bundle.min.css'
Swiper.use([Navigation, Pagination]);

export default class App extends Component {

    state = {
        list: []
    }

    componentDidMount() {

        setTimeout(()=>{
            this.setState({
                list:["aaa","bbbb","ccc"]
            })

            new Swiper(".swiper",{
                // 如果需要分页器
               pagination: {
                   el: '.swiper-pagination',
               },
           })
        },1000)

    }

    
    componentDidUpdate(){
    //     new Swiper(".swiper",{
    //         // 如果需要分页器
    //        pagination: {
    //            el: '.swiper-pagination',
    //        },
    //    })
    }

    render() {
        return (
            <div>
                <div className="swiper" style={{height:"200px",background:"yellow"}}>
                    <div className="swiper-wrapper">
                        {
                            this.state.list.map(item=>
                            <div className="swiper-slide" key={item}>{item}</div>    
                            )
                        }
                    </div>

                    <div className="swiper-pagination"></div>

                </div>
            </div>
        )
    }
}
