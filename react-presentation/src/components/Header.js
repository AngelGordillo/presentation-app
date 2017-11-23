import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import SingleView from './SingleView.js';
import App from './App.js';
import Form from './Form.js';
import View from './View.js';
// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/presentation'>New Presentation</Link></li>
      </ul>
    </nav>
     <Switch>
     	<Route exact path='/' component={View}/>
     	<Route  path='/presentation/:_id' component={SingleView}/>
     	<Route  path='/presentation' component={Form}/>
     </Switch>
  </header>
)

export default Header