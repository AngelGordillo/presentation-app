import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showPresent } from '../actions';
import {Link} from 'react-router-dom'
import Request from 'superagent';
import Moment from 'react-moment';
var url = "http://localhost:4000/presentation";

class View extends Component {

componentWillMount(){
  this.props.showPresent()
 }

  delete(id){  
    Request
    .delete(url + "/" + id)
    .send({ _id: id})
    .end((err, response) => {
      if (err){
        console.log(err)
        alert('----> ' + err.text)     
      }else{
      alert(response.text);
      return this.props.showPresent()
        //res.send(err);
      }
    })    
  }

render() {
   //const presentations  = this.state.presentations ? this.state.presentations : [];
     return (
     <div className="container">   
    <hr/>
      <h4>Number of presentations: <span className="badge">{this.props.present.length}  </span> </h4> 
      <ul className="list-group">
        {this.props.present.map((present) =>
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
              <button className="btn btn-danger btn-sm" onClick={this.delete.bind(this, present._id)} ><span className=" glyphicon glyphicon-trash"></span>Delete</button>
              <Link to={`/presentation/${present._id}`} className="btn btn-warning btn-sm" ><span className=" glyphicon glyphicon-edit"></span>Update</Link>

          </li>
          )}
      </ul>  
     </div>
    );
  }
}

function mapStateToProps(state){
  return{
    present: state.present.list
  }
}

export default connect(mapStateToProps, {showPresent})(View);
