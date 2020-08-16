import React, { Component } from "react";
class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      templates: [
        { id: 1, title: "Black" },
        { id: 1, title: "White" },
        { id: 1, title: "Red" },
        { id: 1, title: "Orange" },
        { id: 1, title: "Plain" },
        { id: 1, title: "Green" },
        { id: 1, title: "Blue" },
      ],
    };
  }
  render() {
    return (
      <div>
        <div className='landing create-landing'>
          <p>Create Page</p>
        </div>
        <div>
          <h1>Templates</h1>
          {this.state.templates.map((tem) => (
            <div key={tem.id}>
              <p>{tem.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Create;
