import React from 'react';
import '../App.css';
const Login = () => {
    return(
        <div className="container" id="loginDiv">
            <h3>Login</h3>
            <div className="row">
                <input id='u' type="text" placeholder="User Name"></input>
            </div>
            <div className="row">
            <input id='p' type="password" placeholder="Password"></input>
            </div>
            <div className="row">
                <button>Login</button>
                <button >Close</button>
            </div>
        </div>
    );
};
export default Login;