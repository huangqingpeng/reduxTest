"use strict";

import "../style/app.scss"

import React from "react"

import ReactDOM from "react-dom"


import {Router,Route,hashHistory,IndexRoute,Redirect} from "react-router"

import Index from "./components/index"
import Features from "./components/features"
import Movie from "./components/movie"
import Mine from "./components/mine"
import Show from "./components/show"
import Discover from "./components/discover"


import TabBarActions from "./flux/actions/TabBarActions"
import TabBarStore from "./flux/stores/TabBarStore"

let handleEnter=type=>{
	TabBarActions.setItem(type)
}

ReactDOM.render((
	<Router history={hashHistory}>
	     <Route path="/" component={Index}>
	        <IndexRoute  component={Features}></IndexRoute>
	        <Route path="features" onEnter={handleEnter.bind(this,"features")} component={Features}></Route>
	        <Route path="movie" onEnter={handleEnter.bind(this,"movie")} component={Movie}></Route>
	        <Route path="show" onEnter={handleEnter.bind(this,"show")} component={Show}></Route>
	        <Route path="mine" onEnter={handleEnter.bind(this,"mine")} component={Mine}></Route>
	        <Route path="discover" onEnter={handleEnter.bind(this,"discover")} component={Discover}></Route>
	     </Route>
	
	</Router>

),document.getElementById("app"))
































