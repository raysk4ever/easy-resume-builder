// create context
//provide --> wrapper function to provide
// use with hook
import React from "react";
import { createContext, useState } from "react";
import defaultResume from "../mockData";

export const ResumeContext = createContext();

export const ResumeContextWrapper = ({ children }) => {
  const [resumeData, setResumeData] = useState(defaultResume);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <ResumeContext.Provider
      value={{ resumeData, setResumeData, activeTab, setActiveTab }}
    >
      {children}
    </ResumeContext.Provider>
  );
};
