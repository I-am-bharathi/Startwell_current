import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";

export default class Success extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

 

  render() {
 

    return (
    
    
       
        <div>
        <header className="jumbotron">
          <h3>
            <strong> User Registered Successfully</strong>
          </h3>
        </header>
        </div>
    
    );
  }
}