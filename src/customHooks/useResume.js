import { useContext } from "react";
import { ResumeContext } from "../contextAPI/ResumeContext";
import { tabs } from "../mockData";

export const useResume = () => {
  const { activeTab, setActiveTab, resumeData, setResumeData } =
    useContext(ResumeContext);

  const handleOnTabChange = (activeTab) => {
    setActiveTab(activeTab);
  };

  const handleOnNext = (e) => {
    e.preventDefault();
    setActiveTab((curr) => {
      if (tabs.length > curr + 1) {
        return curr + 1;
      }
      return curr;
    });
  };

  const handleOnChange = (event, index, type, key) => {
    const { name, value } = event.target;

    if (type === "projects") {
      resumeData[type][index][key] = value;
    } else resumeData[name] = value;
    setResumeData({ ...resumeData });
  };

  const handleOnAddBtnClick = (e, type) => {
    e.preventDefault();

    if (type === "projects") {
      let newProject = {
        name: "Project Name",
        description: "Project Description",
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
    setResumeData({ ...resumeData });
  };

  const handleOnRemove = (e, type, key) => {
    e.preventDefault();
    console.log(e, type, key);
    resumeData[type].splice(key, 1);
    setResumeData({ ...resumeData });
  };

  return {
    activeTab,
    setActiveTab,
    resumeData,
    setResumeData,
    handleOnTabChange,
    handleOnNext,
    handleOnChange,
    handleOnAddBtnClick,
    handleOnRemove,
  };
};
