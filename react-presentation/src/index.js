import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from "redux";
import {createLogger} from 'redux-logger';
import {Provider} from "react-redux";
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

// views
import App from './components/App.js';


const logger = createLogger({
	level: 'info',
	Collapsed: true,
	predicate: (getState, action) => {
		return true
	}
})





const store = createStore(rootReducer,{}, applyMiddleware(thunkMiddleware,logger))
//const createStoreWithMiddleware = applyMiddleware(thunkMiddleware,logger)(createStore, logger);
ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
		 <App/>
		</Provider>
	</BrowserRouter>
	,document.getElementById('root'));
