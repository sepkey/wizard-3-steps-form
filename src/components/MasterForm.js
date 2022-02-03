import React, { Component } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
class MasterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      email: "",
      username: "",
      password: "",
    };
  }

  next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({ currentStep: currentStep });
  };

  prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({ currentStep: currentStep });
  };

  previousButtton() {
    let currentStep = this.state.currentStep;
    if (currentStep > 1) {
      return (
        <button className="btn btn-secondary" type="button" onClick={this.prev}>
          Previous
        </button>
      );
    }
    return null;
  }

  nextButtton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={this.next}
        >
          Next
        </button>
      );
    }
    return null;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { email, username, password } = this.state;
    alert(`Your registeration detail:\n
    Email:${email}\n
    Username:${username}\n
    Password:${password}`);
  };
  render() {
    return (
      <div className="wizard">
        <h1>Fill out wizard form:</h1>
        <p>Step {this.state.currentStep}- Enter your:</p>
        <form onSubmit={this.handleSubmit}>
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            username={this.state.username}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            username={this.state.password}
          />
          {this.previousButtton()}
          {this.nextButtton()}
        </form>
      </div>
    );
  }
}

export default MasterForm;
