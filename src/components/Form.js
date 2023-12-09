import React, { useContext, useEffect, useState } from "react";
import { tabs } from "../mockData";
import { ResumeContext } from "../contextAPI/ResumeContext";
import { useResume } from "../customHooks/useResume";

const Form = ({ handleOnSubmit }) => {
  const {
    activeTab,
    setActiveTab,
    resumeData,
    handleOnTabChange,
    handleOnNext,
    handleOnChange,
    handleOnAddBtnClick,
    handleOnRemove,
  } = useResume();

  return (
    <div className="df">
      <div className="df fdc form-tabs">
        {tabs.map((tab, index) => (
          <span
            onClick={() => handleOnTabChange(index)}
            className={`form-tabs-item round ${
              activeTab === index ? "active" : ""
            }`}
          >
            {tab.slice(0, 1)}
          </span>
        ))}
      </div>
      <div className="f1">
        <p className="t-b mb-2">{tabs[activeTab]}</p>
        <form className="rb-form">
          {/* ---------------------0------------------ */}
          {activeTab === 0 ? (
            <div className="df fdc">
              <div className="df jcsb">
                <input
                  style={{ width: "50%" }}
                  maxLength={100}
                  value={resumeData.firstName}
                  name="firstName"
                  onChange={handleOnChange}
                  placeholder="First Name"
                />
                <input
                  style={{ width: "50%" }}
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
          {activeTab === 1 ? (
            <div className="df fdc">
              <textarea
                rows={10}
                maxLength={100}
                value={resumeData.objective}
                name="objective"
                onChange={handleOnChange}
                placeholder="objective"
              />
            </div>
          ) : null}
          {/* ------------------------------3---------------------- */}
          {activeTab === 3 ? (
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
          {activeTab === 2 ? (
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
                  <div className="df jcsb">
                    <input className="f1" placeholder="skills"></input>
                    <button
                      onClick={(e) => e.preventDefault()}
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
          <button className="round" onClick={handleOnSubmit}>
            Submit
          </button>
          <button
            className="round"
            disabled={activeTab + 1 === tabs.length}
            onClick={handleOnNext}
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
