
import AppDispatcher from "../dispatcher/AppDispatcher"

export default {
	setItem(text){
		AppDispatcher.dispatch({
			actionType:"SET_ITEM",
			text:text
		})
	}
}












