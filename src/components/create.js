import axios from "axios";
import React, { Component } from "react";
import Resume from "./resume";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        firstName: "",
        lastName: "",
        email: "",
      },
    };
  }

  handleOnChange = (event) => {
    let { userData } = this.state,
      { name, value } = event.target;
    userData[name] = value;
    this.setState({ userData });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <div className="landing create-landing">
        <div>
          <p>Create Page</p>
        </div>
        <div className='rb-wapper'>
          <div className='rb-form'>
            <form>
              <input
                name="firstName"
                onChange={this.handleOnChange}
                placeholder="First Name"
              />
              <input
                name="lastName"
                onChange={this.handleOnChange}
                placeholder="Last Name"
              />
              <input
                name="email"
                onChange={this.handleOnChange}
                placeholder="Email"
              />
              <input value="Submit" onClick={this.handleOnSubmit} type="submit" />
            </form>
          </div>
          <div className='rb-preview'>
            <Resume />
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
