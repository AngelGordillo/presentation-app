import { SHOW_PRESENT } from '../actions';
import { SHOW_SINGLE_PRESENT } from '../actions';

const initalState = {
	list: []
}
const formInitialState = {
	 name: '',
      tags: '',
      note: '',
      url: '',
      topic: '',
      type: '',
      size: '',
      updated_date: ''
}

export function showPresent(state = initalState, action){

	switch(action.type){
		case SHOW_PRESENT:
			return Object.assign({}, state, {list: action.payload})
		default:
			return state
							
	}

}

export function showSinglePresent(state = formInitialState, action){

	switch(action.type){
		case SHOW_SINGLE_PRESENT:
			return Object.assign({}, state, {list: action.payload})
		default:
			return state
							
	}

}



