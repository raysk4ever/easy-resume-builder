import React, { useRef } from "react";
import Resume from "./resume";
import Form from "./Form";
import { useResume } from "../customHooks/useResume";
import { makePDF } from "../helper/pdf";
import { useTheme } from "../customHooks/useTheme";

const Create = () => {
  const { resumeData } = useResume();
  const { themeColors, currentTheme, handleOnThemeChange } = useTheme();
  const resumeRef = useRef();

  return (
    <div className="landing create-landing">
      <div className="create-landing-title">
        <h1>Easy Resume Builder</h1>
      </div>
      <div className="rb-wapper">
        <div id="rb-preview" className="rb-form-wapper">
          <Form handleOnSubmit={makePDF} />
        </div>
        <div className="rb-preview">
          <Resume
            currentTheme={currentTheme}
            resumeData={resumeData}
            resumeRef={resumeRef}
          />
        </div>
        <div className="rb-settings">
          <p>Theme Color</p>
          <div className="df fw">
            {themeColors.map((c, i) => (
              <div
                onClick={() => handleOnThemeChange(c)}
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
};

export default Create;
