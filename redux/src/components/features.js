"use strict";

import React from "react"
import {Link} from "react-router"

var icons=[
    {
    	 title:"下箭头",
    	 icon:"&#xe61e;;",
    	 type:"b_hunt",
    },
    {
    	 title:"搜索",
    	 icon:"&#xe627;",
    	 type:"search",
    }]

class Features extends React.Component{

	// constructor(props){
	// 	super(props)
	// }
	//
	// initTabBars(){
	// 	let type=TabBarStore.getItem()
	// 	return icons.map((item,index)=>{
	// 		return (
	//
	// 		             <i className="yo-ico" dangerouslySetInnerHTML={{__html:type==item.type?item.acativeIcon:item.icon}}></i>
	//
	// 		)
	// 	})
	// }

	render(){
		return(
			<div>
			    <div className="m-features">
						<div className="slider_box">
							<div className="search_box">
								<span className="address">北京</span>
								<i className="yo-ico">&#xe61e;</i>
								<div className="input_box">
									<i className="yo-ico">&#xe627;</i>
									<input type="text" value="搜索电影、演出、艺人、场馆、用户" />
								</div>
							</div>
						</div>
					</div>
			</div>
		)
	}
}


export default Features
