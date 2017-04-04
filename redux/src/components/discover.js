"use strict";

import React from "react"
import Scroller from '../../component_dev/scroller/src/index'
import Carousel from '../../component_dev/carousel/src/index'

import {Link} from "react-router"

class Discover extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            discoverData:[<div/>],
            discoverData1:[],
            discoverHudong:[],
            discoverZhuanlan:[]
        }
    }
    
    setNodes(callback){
        fetch('/api/discover.php')
            .then(response=>response.json())
            .then(res=>{
                console.log(res)
                let data = res.recommendedscene.map((val,key) => {
                    return (
                        <li className="item">
                            <a href={val.link}>
                                <img src={val.logourl}/>
                            </a>
                        </li>
                    )
                })
    
               let data1 = res.recommendeddayQuestion.map((val,key) => {
                    return (
                        <div>
                            <a href={val.link}>
                                <img src={val.logourl}/>
                                <h2>
                                    {val.title}<br/>
                                    <span>{val.content}</span>
                                </h2>
                            </a>
                        </div>
                    )
                })
    
                let hudong = res.recommended_interactive.map((val,key) => {
                    return (
                        <a href={val.link}>
                            <img src={val.logourl}/>
                        </a>
                    )
                })
    
                let zhuanlan = res.recommendedcolumn.map((val,key) => {
                    return (
                        <div>
                            <a href={val.link}>
                                <img src={val.logourl} alt=""/>
                                <p>
                                    <img src={val.headpicUrl} alt=""/>
                                    <span>
                                        {val.name}
                                        <img src={val.bigVurl} alt=""/>
                                    </span>
                                </p>
                                <b>{val.body}</b>
                                <span>{}</span>
                            </a>
                        </div>
                    )
                })
                
                callback(data,data1,hudong,zhuanlan)
                console.log(data,data1,hudong)
            })
    }
    
	render(){
		return(
            <div className="m-discover">
                <header>发现</header>
                <Scroller>
                    <Carousel>
                        {this.state.discoverData}
                    </Carousel>
                    <div className="game">
                        {this.state.discoverData1}
                    </div>
                    <div className="hudong">
                        <h3>
                            <span></span>
                            互动
                        </h3>
                        <Scroller
                            scrollX={true}
                            scrollY={false}
                        >
                            <div className="hudong-content">
                                {this.state.discoverHudong}
                            </div>
                        </Scroller>

                    </div>
                    <div className="zhuanlan">
                        <h3>
                            <span></span>
                            专栏
                        </h3>
                        <Scroller
                            scrollX={true}
                            scrollY={false}
                        >
                            <div className="zhuanlan-content">
                                {this.state.discoverZhuanlan}
                            </div>
                        </Scroller>
                    </div>
                </Scroller>
            </div>
		)
	}
    
    componentDidMount(){
        this.setNodes.call(this,(data,data1,hudong,zhuanlan)=>{
            this.setState({
                discoverData: data,
                discoverData1:data1,
                discoverHudong:hudong,
                discoverZhuanlan:zhuanlan
            })
        })
    }
}


export default Discover
































