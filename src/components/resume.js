import React, { Component } from "react";
import { ReactComponent as Mobile } from "../assets/icons/phone.svg";
import { ReactComponent as Email } from "../assets/icons/mail.svg";
import { ReactComponent as Address } from "../assets/icons/location.svg";
import { ReactComponent as Website } from "../assets/icons/internet.svg";

const Resume = ({ resumeData, currentTheme }) => {
  return (
    <div className="rb-preview-wapper">
      {/* TOP STARTS */}
      <div className="rbp-top">
        <div className="rbp-top-1">
          <h1 className="pre-name" style={{ color: currentTheme.color }}>
            {`${resumeData.firstName} ${resumeData.lastName}`.toUpperCase()}
          </h1>
          <h3>{resumeData.designation.toUpperCase()}</h3>
        </div>
        <hr></hr>
        <div className="rbp-top-2">
          <div className="rbp-input-group">
            <Email className="icon" fill={currentTheme.color} />
            <p>{resumeData.email}</p>
          </div>
          <div className="rbp-input-group">
            <Mobile className="icon" fill={currentTheme.color} />
            <p>{resumeData.mobile}</p>
          </div>
          <div className="rbp-input-group">
            <Address className="icon" fill={currentTheme.color} />
            <p>{resumeData.address}</p>
          </div>
          <div className="rbp-input-group">
            <Website className="icon" fill={currentTheme.color} />
            <p>{resumeData.website}</p>
          </div>
        </div>
      </div>
      {/* TOP ENDS */}
      <hr></hr>
      {/* BODY STARTS */}
      <div className="rbp-body">
        {/* BODY LEFT STARTS */}
        <div className="rbp-body-left">
          <div className="rbp-body-section">
            <p className="heading">Objective</p>
            <p>{resumeData.objective}</p>
          </div>
          <div className="rbp-body-section">
            <p className="heading">Experience</p>
            {resumeData.experience.map((pro, key) => (
              <div key={key} className="single-project-item">
                <p className="single-project-item-name">{`${pro.name} (${pro.to} - ${pro.from})`}</p>
                <p className="single-project-item-description">
                  {pro.description}
                </p>
                <p className="">
                  {pro.technologies.join(', ')}
                </p>
              </div>
            ))}
          </div>
          <div className="rbp-body-section">
            <p className="heading">Projects</p>
            {resumeData.projects.map((pro, key) => (
              <div key={key} className="single-project-item">
                <p className="single-project-item-name">{pro.name}</p>
                <p className="single-project-item-description">
                  {pro.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* BODY RIGHT STARTS */}
        <div className="rbp-body-right">
          <p>Right</p>
        </div>
      </div>
      {/* BODY ENDS */}
    </div>
  );
};

export default Resume;
