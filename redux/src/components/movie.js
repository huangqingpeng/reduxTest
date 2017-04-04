"use strict";

import React from "react"

import {Link} from "react-router"

import Scroller from "../../component_dev/scroller/src/"

import WillShows from "./willshow"

class Movie extends React.Component{
	render(){
		return(
			<div className="m-movie">
			    
				<header>
					<div>
						<p>北京</p>
						<i className="yo-ico">&#xe6a1;</i>
					</div>
					<div>
						<span>电影</span>
						<span>影院</span>
					</div>
					<button><i className="yo-ico">&#xe60a;</i></button>
					<div>
						<h3>正在热映</h3>
						<h3>即将上映</h3>
					</div>
				</header>
				<section>
                    <WillShows />
				</section>
				
			</div>

		)
	}
}


export default Movie
