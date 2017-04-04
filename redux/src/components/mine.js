"use strict";

import React from "react"

import {Link} from "react-router"

class Mine extends React.Component{
	render(){
		return(
			<div className="mine_box">
			    <header>
			    	<div className="head">
			    		<div className="icon">
			    			<i className="yo-ico">&#xe635;</i>
			    			<i className="yo-ico">&#x3466;</i>
			    		</div>
			    		<img src="./img/mine_touxiang.png"/><br/>
			    		<a href="##">点击登录</a>
			    	</div>
			    	<div className="header_list">
			    		<ul>
			    			<li>
			    				<i className="yo-ico">&#xe69c;</i>
			    				<h2>关注</h2>
			    			</li>
			    			<li>
			    				<i className="yo-ico">&#xe615;</i>
			    				<h2>影迹</h2>
			    			</li>
			    			<li>
			    				<i className="yo-ico">&#xe602;</i>
			    				<h2>好友</h2>
			    			</li>
			    		</ul>
			    	</div>
			    </header>
			    <section>
			    	<ul>
			    		<li>
			    			<p><i className="yo-ico">&#xe66f;</i>客服反馈</p>
			    			<i> > </i>
			    		</li>
			    		<li>
			    			<p><i className="yo-ico">&#xe67b;</i>客服反馈</p>
			    			<i> > </i>
			    		</li>
			    		<li>
			    			<p><i className="yo-ico">&#xe630;</i>客服反馈</p>
			    			<i> > </i>
			    		</li>
			    		<li>
			    			<p><i className="yo-ico">&#xe601;</i>客服反馈</p>
			    			<i><i className="yo-ico">&#xe688;</i>
			    			<i className="yo-ico">&#x3434;</i>
			    			<i className="yo-ico">&#xe616;</i> > </i>
			    		</li>
			    	</ul>
			    	<ul>
			    		<li>
			    			<p><i className="yo-ico">&#xe610;</i>客服反馈</p>
			    			<i> > </i>
			    		</li>
			    		<li>
			    			<p><i className="yo-ico">&#xe61b;</i>客服反馈</p>
			    			<i> > </i>
			    		</li>
			    	</ul>
			    	<ul>
			    		<li>
			    			<p><i className="yo-ico">&#xe643;</i>客服反馈</p>
			    			<i> > </i>
			    		</li>
			    	</ul>
			    </section>
			</div>
		)
	}
}
export default Mine
































