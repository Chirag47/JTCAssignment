import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
class App extends Component {
	constructor(){
		super();
		this.state = {
			pageMode : 'home'
		}
		this.findDomhandler = this.findDomhandler.bind(this);
	}
	findDomhandler(){
		console.log('login button clicked');
		var overflowDiv = document.getElementById('OverflowDiv');
		ReactDOM.findDOMNode(overflowDiv).style.display = 'block';
	}
	render() {
		return (
			<div className="App">
			<div className="Header">
			<a>JTC ASSIGMENT</a>
			<button id="loginButton" className="LoginButton">SIGNUP</button>
			<button id="signUpButton" onClick={this.findDomhandler} className="LoginButton">LOGIN</button>			
			</div>
			<Login/>
			</div>
			);
		}
	}
	class Login extends Component{
		constructor(){
			super();
			this.state = {
				context: 'login',
				name: '',
				email: '',
				password: '',
				confPass: ''
			}
			this.updateState = this.updateState.bind(this);
			this.hideThisPage = this.hideThisPage.bind(this);
			this.clearContent = this.clearContent.bind(this);
		}
		clearContent(){
			var u = document.getElementById('u');
			var p = document.getElementById('p');
			var cp = document.getElementById('cp');
			var e = document.getElementById('e');
			if(u)	ReactDOM.findDOMNode(u).value = '';
			if(p)	ReactDOM.findDOMNode(p).value = '';
			if(e)	ReactDOM.findDOMNode(e).value = '';
			if(cp)	ReactDOM.findDOMNode(cp).value = '';
		}
		hideThisPage(){
			var page = document.getElementById('OverflowDiv');
			this.clearContent();
			this.setState({context : 'login'});
			ReactDOM.findDOMNode(page).style.display = 'none';
		}
		updateState(e){
			if(this.state.context === 'login'){
				this.setState({context : 'signup'});
			}
		}
		render(){
			if(this.state.context === 'login'){
				return(
					<div className="container" id="OverflowDiv">
					<h3>Login</h3>
					<div className="row">
					<input id='u' type="text" placeholder="User Name"></input>
					<input id='p' type="password" placeholder="Password"></input>
					</div>
					<div className="row">
					<button>Login</button>
					<button onClick={this.updateState}>SignUp</button>
					<button onClick={this.hideThisPage}>Close</button>
					</div>
					</div>
					);
				}
				else{
					return(
						<div className="container" id="OverflowDiv">
						<h3>SignUp</h3>
						<div className="row">
							<input id='n' type="text" placeholder="Name"></input>
						</div>
						<div className="row">
							<input id='e' type="email" placeholder="Email"></input>
						</div>
						<div className="row">
							<input id='p' type="password" placeholder="Password"></input>
						</div>
						<div className="row">
							<input id='cp' type="password" placeholder="Confirm Password"></input>
						</div>
						<div className="row">
							<button>Create</button>
							<button onClick={this.hideThisPage}>Close</button>
						</div>
						</div>
						);
					}
				}
			}
			export default App;
			