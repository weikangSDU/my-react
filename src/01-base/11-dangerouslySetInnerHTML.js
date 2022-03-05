/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'

export default class App extends Component {


    state = {
        myhtml:`
        <div class="top-rated">
  <p class="title">最受好评电影</p>
  <div class="top-rated-list">
    <div class="top-rated-item" data-id=1218142 >
        <div class="poster default-img-bg">
          <img src=https://p1.meituan.net/170.230/movie/63696901c00a1aea8fcc62ba873bb6d41014216.jpg  onerror="this.style.visibility='hidden'">
          <span class="wish-bg"></span>
            <span class="score">观众评分&nbsp;&nbsp;<span class="rated-score">9.4</span></span>
        </div>
        <h5 class="name line-ellipsis">拆弹专家2</h5>
    </div>
    <div class="top-rated-item" data-id=553231 >
        <div class="poster default-img-bg">
          <img src=https://p0.meituan.net/170.230/moviemachine/38cdf0810cad207ef0917abe4fa1e3ef5788447.jpg  onerror="this.style.visibility='hidden'">
          <span class="wish-bg"></span>
            <span class="score">观众评分&nbsp;&nbsp;<span class="rated-score">9.4</span></span>
        </div>
        <h5 class="name line-ellipsis">心灵奇旅</h5>
    </div>
    <div class="top-rated-item" data-id=1334342 >
        <div class="poster default-img-bg">
          <img src=https://p0.meituan.net/170.230/movie/df84690ded848edf709187eae23a7969866455.jpg  onerror="this.style.visibility='hidden'">
          <span class="wish-bg"></span>
            <span class="score">观众评分&nbsp;&nbsp;<span class="rated-score">9.3</span></span>
        </div>
        <h5 class="name line-ellipsis">送你一朵小红花</h5>
    </div>
    <div class="top-rated-item" data-id=25348 >
        <div class="poster default-img-bg">
          <img src=https://p0.meituan.net/170.230/movie/52d698b2192ec18fd4ccb892bd9e543597374.jpg  onerror="this.style.visibility='hidden'">
          <span class="wish-bg"></span>
            <span class="score">观众评分&nbsp;&nbsp;<span class="rated-score">9.2</span></span>
        </div>
        <h5 class="name line-ellipsis">崖上的波妞</h5>
    </div>
    <div class="top-rated-item" data-id=1244901 >
        <div class="poster default-img-bg">
          <img src=https://p0.meituan.net/170.230/movie/817f964bd5c112da0ad43eff983f20ff2285275.jpg  onerror="this.style.visibility='hidden'">
          <span class="wish-bg"></span>
            <span class="score">观众评分&nbsp;&nbsp;<span class="rated-score">9.1</span></span>
        </div>
        <h5 class="name line-ellipsis">许愿神龙</h5>
    </div>
    <div class="top-rated-item" data-id=1332663 >
        <div class="poster default-img-bg">
          <img src=https://p0.meituan.net/170.230/movie/6ac27475bf1b4f668a57b17d91d949743056059.jpg  onerror="this.style.visibility='hidden'">
          <span class="wish-bg"></span>
            <span class="score">观众评分&nbsp;&nbsp;<span class="rated-score">9</span></span>
        </div>
        <h5 class="name line-ellipsis">海底小纵队：火焰之环</h5>
    </div>
    <div class="top-rated-item" data-id=1300668 >
        <div class="poster default-img-bg">
          <img src=https://p0.meituan.net/170.230/moviemachine/38af7caf2c5d01098b9e5c24b02d2d781787995.jpg  onerror="this.style.visibility='hidden'">
          <span class="wish-bg"></span>
            <span class="score">观众评分&nbsp;&nbsp;<span class="rated-score">8.6</span></span>
        </div>
        <h5 class="name line-ellipsis">温暖的抱抱</h5>
    </div>
    <div class="top-rated-item" data-id=1229843 >
        <div class="poster default-img-bg">
          <img src=https://p0.meituan.net/170.230/movie/c48ec16fd8c3d9778ae43bfa43e55841164435.jpg  onerror="this.style.visibility='hidden'">
          <span class="wish-bg"></span>
            <span class="score">观众评分&nbsp;&nbsp;<span class="rated-score">8.3</span></span>
        </div>
        <h5 class="name line-ellipsis">叱咤风云</h5>
    </div>
    <div class="top-rated-item" data-id=1322799 >
        <div class="poster default-img-bg">
          <img src=https://p0.meituan.net/170.230/movie/2199e628bb4d6fc49e1ce13fddc15e5d1634782.jpg  onerror="this.style.visibility='hidden'">
          <span class="wish-bg"></span>
            <span class="score">观众评分&nbsp;&nbsp;<span class="rated-score">8.1</span></span>
        </div>
        <h5 class="name line-ellipsis">缉魂</h5>
    </div>
    <div class="top-rated-item" data-id=1283276 >
        <div class="poster default-img-bg">
          <img src=https://p0.meituan.net/170.230/movie/770fad3c3a815d4691e2a962dcad6f3c1241657.jpg  onerror="this.style.visibility='hidden'">
          <span class="wish-bg"></span>
            <span class="wish"><span class="wish-num">83693</span>人想看</span>
        </div>
        <h5 class="name line-ellipsis">大红包</h5>
    </div>
  </div>
</div>`
    }

    render() {
        return (
            <div>
                <div dangerouslySetInnerHTML={
                    {
                        __html:this.state.myhtml
                    }
                }></div>
            </div>
        )
    }
}
