import React from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css';

const Navigation = () => {
    return(
        <div className="App">
            <div className="Header">
                <a><NavLink to="/signup">SignUp</NavLink></a>
                <a><NavLink to="/login">Login</NavLink></a>
                <a><NavLink to="/">Home</NavLink></a>
            </div>
        </div>
    );
};
export default Navigation;