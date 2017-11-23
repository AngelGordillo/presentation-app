import { combineReducers } from 'redux';
import { showPresent } from './presentations'
import { showSinglePresent } from './presentations'
const rootReducer = combineReducers({
	present: showPresent,
	showSinglePresent: showSinglePresent,

});

export default rootReducer;