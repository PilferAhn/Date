import React, { Component } from 'react';
import { render } from 'react-dom';

// import React from "react";
import { BrowserRouter as Router, 
    Switch, 
    Route, 
    Link 
} from "react-router-dom";

class SigninForm extends Component{
    render(){
        return (
            <h3>HWatawerwerfw</h3>
        );
    }
}

class SignupForm extends Component{
    render(){
        return (
            <h2>I'm sign UP</h2>
        );
    }
}

class App extends Component{
    render(){
        return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/app/signin">Sign in</Link></li>
                    <li><Link to="/app/signup">Sign up</Link></li>
                </ul>
                <div>
                    <Route path="/app/signin" Component={ SigninForm }/>
                    <Route path="/app/signup" Component={ SignupForm } />
                </div>
            </div>
        </Router>
        );
    }
}

// const App = <div> Hello </div>;
const container = document.getElementById('root');
render(
    <App />,
    container
);