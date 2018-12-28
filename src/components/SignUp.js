import React from 'react';
import '../App.css';

const SignUp = () => {
    return(
        <div className="container" id="signUpDiv">
            <h3>SignUp</h3>
            <div className="row">
                <input id='un' type="text" placeholder="User Name"></input>
            </div>
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
                <button >Close</button>
            </div>
        </div>
    );
};
export default SignUp;