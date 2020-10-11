import React, { Component } from "react";
import Resume from "./resume";
import Form from "./Form";
import { themeColors } from "../templates/themes/colors";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {
        firstName: "John",
        lastName: "Smith",
        designation: "Software Engineer",
        email: "johnsmith@example.com",
        website: "example.com",
        mobile: "012xxxxxx9",
        address: "Bangalore",
        objective:
          "Voluptate Lorem ea ullamco dolor in dolor non labore. Cupidatat ipsum ad cillum labore nostrud veniam. Quis ea sint eiusmod voluptate minim occaecat quis ex dolore. Esse eiusmod Lorem magna cillum qui culpa tempor. Culpa cillum duis voluptate irure deserunt ad tempor ad velit magna labore. Aute nostrud cupidatat eiusmod et officia adipisicing velit deserunt consequat.",
        experience: [
          {
            name: "Lets Endorse",
            description: "Backend Developer",
            technologies: ['Nodejs', 'Javascript', 'MongoDB', 'Express'],
            to: '2019',
            from: '2020',
            companyLogo: ''
          }
        ],
        projects: [
          {
            name: "Easy Resume Builder",
            description: "Web App to create awesome resume builder",
          },
          {
            name: "Meme Creator",
            description: "Web App to create Memes with awesome web editor",
          },
        ],
        skills: [],
      },
      themeColors,
      currentTheme: themeColors[7]
    };
  }

  handleOnThemeChange = (theme) => {
    let root = document.documentElement;
    root.style.setProperty("--themeColor", theme.color);
    this.setState({ currentTheme: theme });
  };

  handleOnChange = (event, index, type, key) => {
    let { resumeData } = this.state,
      { name, value } = event.target;

    if (type === "projects") {
      resumeData[type][index][key] = value;
    } else resumeData[name] = value;
    this.setState({ resumeData });
  };

  handleOnAddBtnClick = (e, type) => {
    e.preventDefault();
    let { resumeData } = this.state;
    if (type === "projects") {
      let newProject = {
        name: "Proeject Name",
        description: "Proeject Description",
      };
      resumeData.projects.push(newProject);
    } else if (type === "experience") {
      let newExp = {
        name: "Company Name",
        description: "Job Description",
        to: "",
        from: "",
      };
      resumeData.experience.push(newExp);
    }
    this.setState({ resumeData });
  };

  handleOnRemove = (e, type, key) => {
    e.preventDefault();
    console.log(e, type, key);
    let { resumeData } = this.state;
    resumeData[type].splice(key, 1);
    this.setState({ resumeData });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    const { resumeData, currentTheme } = this.state;
    return (
      <div className="landing create-landing">
        <div className="create-landing-title">
          <h1>Easy Resume Builder</h1>
        </div>
        <div className="rb-wapper">
          <div className="rb-form-wapper">
            <Form
              resumeData={resumeData}
              handleOnChange={this.handleOnChange}
              handleOnAddBtnClick={this.handleOnAddBtnClick}
              handleOnRemove={this.handleOnRemove}
              handleOnSubmit={this.handleOnSubmit}
            />
          </div>
          <div className="rb-preview">
            <Resume currentTheme={currentTheme} resumeData={resumeData} />
          </div>
          <div className="rb-settings">
            <div className="df fw jcc">
              {this.state.themeColors.map((c, i) => (
                <div
                  onClick={() => this.handleOnThemeChange(c)}
                  title={c.title}
                  className="single-theme-item"
                  style={{
                    backgroundColor: c.color,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
