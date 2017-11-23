import React, { Component } from 'react';
import Request from 'superagent';
import { connect } from 'react-redux';
import { showPresent, showSinglePresent } from '../actions';
import _ from "lodash";
import { Link } from 'react-router-dom'


var url = "http://localhost:4000/presentation";

class Form extends Component {
  constructor(props){
    super(props);
   this.state = this.props.formData || {
      name: '',
      tags: '',
      url: '',
      topic: '',
      type: 'PPT',
      size: '',
      updated_date: ''
    }
    
    this.handleChange = this.handleChange.bind(this)
  }
  //this.props.name
  handleChange(event) {
    const target = event.target;
    const value =  target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  update(event, id){
    event.preventDefault();
    const tags = this.state.tags
    console.log(_.pick(this.state.tags))
    const newVar = _.pick(this.state, ['name', tags, 'url', 'topic', 'type', 'size', 'updated_date'])
    Request
      .put(url + "/" + this.state._id)
      .send(newVar)
      .end((err, response) => {
        if(err){
          console.log(err)
          alert('----> ' + err.text)
          
        }else{
          return this.props._showPresent(this.state._id)      
        }
      })
  }

  post(event){       
    event.preventDefault() 
    const newVar = _.pick(this.state, ['name', 'tag', 'url', 'topic', 'type', 'size', 'updated_date'])   
    Request
      .post(url)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send(newVar)
      .end((err, response) => {
        if(err){
          console.log(err)
          alert('----> ' + err.text)          
        }else{
          this.props.history.push("/")          
        return response._id        
        }
      })
 
    }

  handleSubmit(event){
    //console.log(this.state._id)
    event.preventDefault();
    !this.state._id ? this.post(event) : this.update(event)
  }



  componentWillReceiveProps(nextProps){
    this.setState(nextProps.formData);    
  }

  render() {
   
    return (
      <div>
        <h4>Add New Presentation  </h4>
          <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <label htmlFor="inputName" className="col-sm-2 control-label">Name</label>
              <div className="col-sm-10">
                <input  name="name"
                        type="text"
                        className="form-control"
                        id="inputName"
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder="Name"></input>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputTag" className="col-sm-2 control-label">Tag</label>
              <div className="col-sm-10">
                <input  name="tags"
                        type="text"
                        className="form-control"
                        id="inputTag"
                        value={this.state.tag}
                        onChange={this.handleChange}
                        placeholder="Tag"></input>
              </div>
            </div>
             <div className="form-group">
              <label htmlFor="inputUrl" className="col-sm-2 control-label">Url</label>
              <div className="col-sm-10">
                <textarea   name="url"
                            className="form-control"
                            rows="1"
                            id="inputUrl"
                            value={this.state.url}
                        onChange={this.handleChange}></textarea>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputTopic" className="col-sm-2 control-label">Topic</label>
              <div className="col-sm-10">
                <textarea   name="topic"
                            className="form-control"
                            rows="1"
                            id="inputTopic"
                            value={this.state.topic}
                        onChange={this.handleChange}
                        required></textarea>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputType" className="col-sm-2 control-label">Type</label>
              <div className="col-sm-10">
                <select   name="type"
                          className="form-control"
                          id="inputType"
                          value={this.state.type}
                          onChange={this.handleChange}>
                  <option value="ppt">PPT</option>
                  <option value="pdf">PDF</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-success">Submit</button>
              </div>
            </div>
          
          </form>
      </div>
    );
  }
}

function selector(state){
  return{
    present: state.present
  }
}
/*function mapStateToProps(state){
  return{
    present: this.state
  }
}*/

function dispatcher (dispatch) {
  return {
    _showPresent: (...args) => dispatch(showSinglePresent(...args))
  };
}


export default connect(selector, dispatcher)(Form);
