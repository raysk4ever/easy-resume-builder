import React, { Component } from "react";

const Resume = ({ resumeData }) => {
  return (
    <div className="rb-preview-wapper">
      {/* TOP STARTS */}
      <div className="rbp-top">
        <div className="rbp-top-1">
          <h1 className="pre-name">
            {`${resumeData.firstName} ${resumeData.lastName}`.toUpperCase()}
          </h1>
          <h3>{resumeData.designation.toUpperCase()}</h3>
        </div>
        <hr></hr>
        <div className="rbp-top-2">
          <div className="rbp-input-group">
            {/* <p className="label">Email</p> */}
            <img
              className="icon"
              src="https://img.icons8.com/color/48/000000/email.png"
            />
            <p>{resumeData.email}</p>
          </div>
          <div className="rbp-input-group">
            {/* <p className="label">Mobile</p> */}
            <img
              className="icon"
              src="https://img.icons8.com/ultraviolet/40/000000/phone.png"
            />
            <p>{resumeData.mobile}</p>
          </div>
          <div className="rbp-input-group">
            {/* <p className="label">Address</p> */}
            <img
              className="icon"
              src="https://img.icons8.com/ultraviolet/40/000000/visit.png"
            />
            <p>{resumeData.address}</p>
          </div>
          <div className="rbp-input-group">
            {/* <p className="label">Website</p> */}
            <img
              className="icon"
              src="https://img.icons8.com/fluent/48/000000/domain.png"
            />
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
            <p>
              Voluptate Lorem ea ullamco dolor in dolor non labore. Cupidatat
              ipsum ad cillum labore nostrud veniam. Quis ea sint eiusmod
              voluptate minim occaecat quis ex dolore. Esse eiusmod Lorem magna
              cillum qui culpa tempor. Culpa cillum duis voluptate irure
              deserunt ad tempor ad velit magna labore. Aute nostrud cupidatat
              eiusmod et officia adipisicing velit deserunt consequat.
            </p>
          </div>
          <div className="rbp-body-section">
            <p className="heading">Experience</p>
            <p>
              Voluptate Lorem ea ullamco dolor in dolor non labore. Cupidatat
              ipsum ad cillum labore nostrud veniam. Quis ea sint eiusmod
              voluptate minim occaecat quis ex dolore. Esse eiusmod Lorem magna
              cillum qui culpa tempor. Culpa cillum duis voluptate irure
              deserunt ad tempor ad velit magna labore. Aute nostrud cupidatat
              eiusmod et officia adipisicing velit deserunt consequat.
            </p>
          </div>
                    <div className="rbp-body-section">
            <p className="heading">Projects</p>
            <p>
              Voluptate Lorem ea ullamco dolor in dolor non labore. Cupidatat
              ipsum ad cillum labore nostrud veniam. Quis ea sint eiusmod
              voluptate minim occaecat quis ex dolore. Esse eiusmod Lorem magna
              cillum qui culpa tempor. Culpa cillum duis voluptate irure
              deserunt ad tempor ad velit magna labore. Aute nostrud cupidatat
              eiusmod et officia adipisicing velit deserunt consequat.
            </p>
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
