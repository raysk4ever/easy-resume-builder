import axios from "axios";
import React, { Component } from "react";
import Resume from "./resume";
import Form from "./Form";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {
        firstName: "Ravi",
        lastName: "Singh",
        designation: "Software Engineer",
        email: 'raysk7161@gmail.com',
        website: 'localhost',
        mobile: '6396180310',
        address: 'Bangalore',
      },
    };
  }

  handleOnChange = (event) => {
    let { resumeData } = this.state,
      { name, value } = event.target;
    resumeData[name] = value;
    this.setState({ resumeData });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    const { resumeData } = this.state;
    return (
      <div className="landing create-landing">
        <div>
          <p>Create Page</p>
        </div>
        <div className="rb-wapper">
          <div className="rb-form">
            <Form
              resumeData={resumeData}
              handleOnChange={this.handleOnChange}
              handleOnSubmit={this.handleOnSubmit}
            />
          </div>
          <div className="rb-preview">
            <Resume resumeData={resumeData} />
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
