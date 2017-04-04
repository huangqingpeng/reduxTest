"use strict";

import React from "react"
import {Link} from "react-router"

import TabBarStore from "../flux/stores/TabBarStore"

var tabBars=[
    {
    	 title:"推荐",
    	 icon:"&#xe605;",
    	 type:"features",
    	 acativeIcon:"&#xe605;"
    },
    {
    	 title:"电影",
    	 icon:"&#xe60d;",
    	 type:"movie",
    	 acativeIcon:"&#xe60d;"
    },
    {
    	 title:"演出",
    	 icon:"&#xe7f1;",
    	 type:"show",
    	 acativeIcon:"&#xe7f1;"
    },
    {
    	 title:"发现",
    	 icon:"&#xe623;",
    	 type:"discover",
    	 acativeIcon:"&#xe623;"
    },
    {
    	 title:"我的",
    	 icon:"&#x3575;",
    	 type:"mine",
    	 acativeIcon:"&#x3575;"
    }
]

class Index extends React.Component{
	
	constructor(props){
		super(props)
	}
	
	initTabBars(){
		let type=TabBarStore.getItem()
		return tabBars.map((item,index)=>{
			return (
				<li className={type==item.type?"active":""}>
			        <Link to={item.type}>
			             <i className="yo-ico" dangerouslySetInnerHTML={{__html:type==item.type?item.acativeIcon:item.icon}}></i>
			             <b>{item.title}</b>
				    </Link> 
			    </li>
			)
		})
	}
	
	
	render(){
		return(
			<div className="m-index">
			    <section>{this.props.children}</section>
			    <footer>
			     <nav>
				     <ul>
				        {this.initTabBars.call(this)}
				     </ul>
				</nav>
			</footer>
			</div>
		)
	}
}


export default Index
































