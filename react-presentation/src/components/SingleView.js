import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showSinglePresent } from '../actions';
import Form from './Form.js';
import Moment from 'react-moment';

class SingleView extends Component {

componentWillMount(){
  this.props._showSinglePresent(this.props.match.params._id)
  
		 	//console.log(this.props.match.params._id);
}
 componentWillReceiveProps(nextProps){
   // console.log(nextProps.present)
      this.setState(nextProps.present);
    
  }
 

render() {
	const present = this.props.present;
     return (
     <div className="container">  
 		<h1> Hey man, I'm the single view </h1>
     	<ul className="list-group">
        	{!this.props.present ? "" : (
          <li className="list-group-item" key={present._id}>
            <h4 className="list-group-item-heading"> 
              {present.name} 
              <span className="m5l label label-info"><Moment format="YYYY/MM/DD">{present.updated_date}</Moment> </span> 
              <small> <span className="label label-info">{present.size} </span> </small>
              <small> <span className="label label-info">{present.type_present} </span> </small>
            </h4>
            <p><span className="glyphicon glyphicon-tags"></span>
              {present.tags}
            </p>
            <p>
              {present.note}
            </p>
            <p><span className="glyphicon glyphicon-comment"></span>
              {present.topic}
            </p>
            <p><span className="glyphicon glyphicon-link"></span>

            <a href="{present.url}">
              {present.url}
            </a>
            </p>
            </li>
          )}
      </ul>  
    
    <Form formData={present}/> 
     </div>
    );
  }
}

function selector(state){
  return{
    present: state.showSinglePresent.list
  }
}
function dispatcher (dispatch) {
  return {
    _showSinglePresent: (...args) => dispatch(showSinglePresent(...args))
  };
}
export default connect(selector,dispatcher) (SingleView);