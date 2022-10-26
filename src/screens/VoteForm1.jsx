import React, { Component } from "react";
import { processVote } from "../scripts/backend";

class VoteForm1 extends Component{
	constructor(){
		super();
		this.state = {
			candidates : [
				{name: ""},
				{name: "Mark Farrell"},
				{name: "Ed Lee"},
				{name: "Jason Calacanis"}
			],
        raceName: "SF Mayoral Election"
		}
	}

	vote () {
		let newCandidates = [...this.state.candidates];
		this.setState({candidates: newCandidates});
	}

	render(){
        return (
        <form onSubmit={this.handleFormSubmit}>
    <div className="radio">
      <label>
        <input type="radio" value="London Breed" 
        checked = {this.state.selectedOption == "London Breed"}
        onChange = {this.handleOptionChange}/>
        London Breed
      </label>
    </div>
    <div className="radio">
      <label>
        <input 
        type="radio" value="Mark Farrell" 
        checked = {this.state.selectedOption === "Mark Farrell"}
        onChange = {this.handleOptionChange}
        />
        Mark Farrell
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="Ed Lee" 
        checked = {this.state.selectedOption === "Ed Lee"}
        onChange = {this.handleOptionChange}/>
        Ed Lee
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="Jason Calacanis" 
        checked = {this.state.selectedOption === "Jason Calacanis"}
        onChange = {this.handleOptionChange}/>
        Jason Calacanis
      </label>
    </div>
    <button className="btn btn-default" type="submit" onClick={this.handleFormSubmit}>Submit Vote
    </button>
  </form>
    )}

  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
    return "";
}
    handleFormSubmit(formSubmitEvent) {
        processVote(this.raceName, this.state.selectedOption)
        return "";
    }
}
export default VoteForm1;