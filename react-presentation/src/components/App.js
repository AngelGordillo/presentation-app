import React, { Component } from 'react';
import View from './View.js';
import Header from './Header.js';
import '../index.css'

class App extends Component {
/*
componentWillMount(){
  this.props.showPresent()
}

renderPresentList(){
  return this.props.present.map((present) => {
    return(
      <li key={present.id}>{present.name} </li>
      )
  })
}*/

render() {
     return (
     <div className="container"> 
        <Header/>
        
     </div>
    );
  }
}

/*function mapStateToProps(state){
  return{
    present: state.present.list
  }
}
*/
export default App;
