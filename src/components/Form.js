import React, { Component } from "react";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 2,
      tabs: [
        "Genral",
        "Objective",
        "Experience",
        "Projects",
        "Skills",
        "Education",
      ],
    };
  }

  handleOnTabChange = (activeTab) => this.setState({ activeTab });

  render() {
    const {
      handleOnChange,
      resumeData,
      handleOnAddBtnClick,
      handleOnRemove,
      handleOnSubmit,
    } = this.props;
    return (
      <div>
        <div className="df jcsb form-tabs">
          {this.state.tabs.map((tab, index) => (
            <span
              onClick={() => this.handleOnTabChange(index)}
              className={`form-tabs-item ${
                this.state.activeTab == index ? "active" : ""
              }`}
            >
              {tab}
            </span>
          ))}
        </div>
        <form onSubmit={handleOnSubmit} className="rb-form">
          {/* ---------------------0------------------ */}
          {this.state.activeTab === 0 ? (
            <div className="df fdc">
              <div className="df jcsb">
                <input
                  maxLength={100}
                  value={resumeData.firstName}
                  name="firstName"
                  onChange={handleOnChange}
                  placeholder="First Name"
                />
                <input
                  maxLength={100}
                  value={resumeData.lastName}
                  name="lastName"
                  onChange={handleOnChange}
                  placeholder="Last Name"
                />
              </div>
              <input
                maxLength={100}
                value={resumeData.designation}
                name="designation"
                onChange={handleOnChange}
                placeholder="Designation"
              />
              <input
                maxLength={100}
                value={resumeData.email}
                name="email"
                onChange={handleOnChange}
                placeholder="Email"
              />
              <input
                maxLength={100}
                value={resumeData.mobile}
                name="mobile"
                onChange={handleOnChange}
                placeholder="Mobile"
              />
              <input
                maxLength={100}
                value={resumeData.address}
                name="address"
                onChange={handleOnChange}
                placeholder="Address"
              />
              <input
                maxLength={100}
                value={resumeData.website}
                name="website"
                onChange={handleOnChange}
                placeholder="Website"
              />
            </div>
          ) : null}
          {/* ------------------------------1---------------------- */}
          {this.state.activeTab === 1 ? (
            <div className="df fdc">
              <input
                maxLength={100}
                value={resumeData.objective}
                name="objective"
                onChange={handleOnChange}
                placeholder="objective"
              />
            </div>
          ) : null}
          {/* ------------------------------3---------------------- */}
          {this.state.activeTab === 3 ? (
            <div className="df fdc f1">
              {resumeData.projects.map((p, i) => (
                <div className="single-project-item">
                  <div className="df jcsb">
                    <p>#{i + 1}</p>
                    <p
                      className="cp"
                      onClick={(e) => handleOnRemove(e, "projects", i)}
                    >
                      x
                    </p>
                  </div>
                  <input
                    maxLength={100}
                    value={p.name}
                    onChange={(e) => handleOnChange(e, i, "projects", "name")}
                  />
                  <input
                    maxLength={100}
                    value={p.description}
                    onChange={(e) =>
                      handleOnChange(e, i, "projects", "description")
                    }
                  />
                </div>
              ))}
              <button
                className="rb-add-btn"
                onClick={(e) => handleOnAddBtnClick(e, "projects")}
              >
                Add
              </button>
            </div>
          ) : null}
          {/* ------------------------------2---------------------- */}
          {this.state.activeTab === 2 ? (
            <div className="df fdc f1">
              {resumeData.projects.map((p, i) => (
                <div className="single-project-item">
                  <div className="df jcsb">
                    <p>#{i + 1}</p>
                    <p
                      className="cp"
                      onClick={(e) => handleOnRemove(e, "experience", i)}
                    >
                      x
                    </p>
                  </div>
                  <input
                    maxLength={100}
                    value={p.name}
                    onChange={(e) => handleOnChange(e, i, "experience", "name")}
                  />
                  <input
                    maxLength={100}
                    value={p.description}
                    onChange={(e) =>
                      handleOnChange(e, i, "experience", "description")
                    }
                  />
                  <div className='df jcsb'>
                    <input className='f1' placeholder='skills'></input>
                    <button
                      className="rb-add-btn"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
              <button
                className="rb-add-btn"
                onClick={(e) => handleOnAddBtnClick(e, "experience")}
              >
                Add
              </button>
            </div>
          ) : null}
          <input value="Submit" onClick={handleOnSubmit} type="submit" />
        </form>
      </div>
    );
  }
}

export default Form;
