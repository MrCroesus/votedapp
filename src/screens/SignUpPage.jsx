import React, { Component } from "react";
import { Link, redirect } from "react-router-dom";
import { doc, getDoc, setDoc, addDoc, collection } from "firebase/firestore"; 
import { db } from "../firebase"
import "../App.css";

class SignUpPage extends Component {
  constructor() {
    super();

    this.state = {username:"", email: "", password: "", agreedToTerms: false};

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

  async handleSubmit(e) {
    e.preventDefault();

    // Enforce that user with the username does not already exist. 
    const userDoc = doc(db, "users", this.state.username);
    const userDocInstance = await getDoc(userDoc);
    if (!userDocInstance.exists()) {
      await setDoc(userDoc, {
        email: this.state.email,
        password: this.state.password,
        votedContests: []

      });

      return redirect('/')

    } else {

      alert("Account already exists with this username."); 

    }

  }

  render() {
    return (
      <div className="formCenter">
         <div className="left-side"></div>
        <div className="right-side">
        <form onSubmit={this.handleSubmit} className="formFieldsSignUp">
        <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInputBottom"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
                Username
            </label>
            <input
              type="text"
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

          <div className="formField">
            <label className="formFieldLabel" htmlFor="re-enter password">
              Confirm Password
            </label>
            <input
              type="Confirm password"
              id="Confirm password"
              className="formFieldInput"
              placeholder="Re-enter your password"
              name="Confirm password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          {/* <div className="formFieldLast">
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="agreedToTerms"
                value={this.state.agreedToTerms}
                onChange={this.handleChange}
              />{" "}
              By continuing you accept the {" "}
              <a href="null" className="formFieldTermsLink">
                terms of service.
              </a>
            </label>
          </div> */}

          <div className="formFieldBottom">
            <input type="submit" className="formFieldButton" value="Sign Up" />
          </div>
          <div className="formFieldBottom">
          <Link to="/login" className="formFieldLink">
              I already have an account.
            </Link>
          </div>
        </form>
      </div>
      </div>
    );
  }
}
export default SignUpPage;
