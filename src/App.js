import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navigation/>
					<Switch>
						<Route path="/" component={Home} exact />
						<Route path="/login" component={Login} />
						<Route path="/signup" component={SignUp} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
};
export default App;
