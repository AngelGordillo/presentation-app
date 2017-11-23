import Request from 'superagent';
export const SHOW_PRESENT = "SHOW_PRESENT";
export const SHOW_SINGLE_PRESENT = "SHOW_SINGLE_PRESENT";
var url = "http://localhost:4000/presentation";

export function showPresent(){

	return(dispatch, getState) => {

		 Request.get(url).then((response) => {
		 	//console.log(response)
			dispatch({type: SHOW_PRESENT, payload: response.body})
  		});		
	}
}

export function showSinglePresent(id){

	return(dispatch, getState) => {
			
 		Request.get(url+'/' + id).then((response) => {
			dispatch({type: SHOW_SINGLE_PRESENT, payload: response.body})
  		});		
	}
}

