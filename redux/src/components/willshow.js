
"use strict";

 import React from "react"
 
 import Scroller from "../../component_dev/scroller/src/"
 
class WillShows extends React.Component{
	constructor(props){
		super(props)
		this.state={
			willshow:[]
		}
	}
	
	setNodes(url,callback){
		fetch(url)
		.then(response=>
			response.json()
			)
		.then(res=>{
			console.log(res)
			let nodes=res.map((val,index)=>{
				return(
					<div className="movies-box">
	                    <i><img src={val.picture} /></i>
	                    <b>
	                       <span>{val.chname}</span>
	                       <span>{val.directorName}</span>
	                       <span>{val.gutdescipty}</span>
	                    </b>
	                 </div>
				)
			})
			callback(nodes)
		})
		.catch(e=>{
			console.log(e)
		})
	}
	
	
	render(){
		return(
			<div  className="m-willshow">
		         <div className="months">
		            <span>3</span>
	                <span>4</span>
	                <span>5</span>
	                <span>6</span>
	                <span>7</span>
		        </div>
			    <Scroller
			        ref="scroller"
				    usePullRefresh={true}
				    onRefresh={() => {
				        this.setNodes.call(this,"/api/willshow2.php",(data)=>{
							console.log(data)
							this.setState({
								willshow:data.concat(this.state.willshow)
							})
							this.refs.scroller.stopRefreshing(true) 
						})
				    }}
				    useLoadMore={true}
					    onLoad={() => {
						    this.setNodes.call(this,"/api/willshow3.php",(data)=>{
							console.log(data)
							this.setState({
								willshow:this.state.willshow.concat(data)
							})
							this.refs.scroller.stopLoading(true)
						})
				    }}
			    >
			        <div className="movies">
			            <div>
			                <h2>3月17日星期五</h2>
		                    {this.state.willshow}
			            </div>
			        </div>
			    </Scroller>
			</div>
		)
	}
	
	
	
	componentDidMount(){
		this.setNodes.call(this,"/api/willshow1.php",(data)=>{
			console.log(data)
			this.setState({
				willshow:data
			})
		})
	}
	
}




export default  WillShows















