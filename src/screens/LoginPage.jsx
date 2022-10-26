import React, { Component } from "react";
import {Link, redirect} from "react-router-dom"
import { doc, getDoc, setDoc, addDoc, collection } from "firebase/firestore"; 
import { db } from "../firebase"
import "../App.css";

class LoginPage extends Component {
  constructor() {
    super();

    this.state = {
    username: "",
    email: "",
    password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  async handleSubmit(event) {
    
    event.preventDefault();


    // Enforce that user with the username does not already exist. 
    const userDoc = doc(db, "users", this.state.username);
    const userDocInstance = await getDoc(userDoc);
    if (!userDocInstance.exists()) {
      alert("Incorrect Username and/or Password."); 
  } else {
      const { password } = userDocInstance.data()
      if (password === this.state.password) {
        return redirect('/')
      } else {
        alert("Incorrect Password."); 
      }
  }
}

  render() {
    return (
      <div className="formCenter">
        <div className="left-side"></div>
        <div className="right-side">
        <form className="formFields" onSubmit={this.handleSubmit}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="username">
              Username
            </label>
            <input
              type="username"
              id="username"
              className="formFieldInput"
              placeholder="Enter your username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="formFieldBottom">
            <input type="Submit" className="formFieldButton" value="Sign In"/>
          </div>
          <div className="formFieldBottom">
            <Link to="/signup" className="formFieldLink">
            Create an account
            </Link>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default LoginPage;