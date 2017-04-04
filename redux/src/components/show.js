"use strict";

import React from "react"

import {Link} from "react-router"

class Show extends React.Component{
	
	render(){
		return(
		    <div className="show">
					<header>
						<div>
							<div>
								<p>北京</p>
								<i><img src="libs/images/xiala.png" /></i>
							</div>
							<input type="text" placeholder="搜索演出、艺人、场馆" />
							<span><img src="libs/images/search.png" /></span>
						</div>
						<nav>
							<ul>
								<li><a href="#">演唱会</a></li>
								<li><a href="#">话剧音乐剧</a></li>
								<li><a href="#">展览</a></li>
								<li><a href="#">音乐会</a></li>
								<li><a href="#">儿童亲子</a></li>
							</ul>
						</nav>
					</header>

					<section>
						<div>
							<div><img src="libs/images/img_03.png" /></div>
							<div>
								<h3>[北京]JAC江淮汽车*SWIN NEW WORLD中国巡回歌迷...</h3>
								<p>2017年3月19日-2017年3月19日格瓦拉生活·糖果Live</p>
								<span>￥380</span>

							</div>
						</div>
					</section>
				</div>
		)
	}
}

export default Show
