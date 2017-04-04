
import {EventEmitter} from "events"

export default Object.assign({},EventEmitter.prototype,{
	item:"features",
	getItem(){
		return this.item;
	},
	setItemHandler(text){
		this.item=text;
	}
})







