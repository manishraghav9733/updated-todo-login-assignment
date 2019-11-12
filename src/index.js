import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Profile from './Profile';
import Login from './Login';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import * as serviceWorker from './serviceWorker';

const a=(
		<Router history = {browserHistory}>
		      <Route path = "/" component = {App}>
		         <IndexRoute component = {Login} />
		         <Route path = "/Profile" component = {Profile} />
		      </Route>
		   </Router>
	)
ReactDOM.render(a, document.getElementById('root'));
serviceWorker.unregister();
