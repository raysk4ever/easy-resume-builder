import React from "react";
import "./App.css";
import Routes from "./routes";
import { ResumeContextWrapper } from "./contextAPI/ResumeContext";
import { ThemeContext, ThemeContextWrapper } from "./contextAPI/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextWrapper>
        <ResumeContextWrapper>
          <Routes />
        </ResumeContextWrapper>
      </ThemeContextWrapper>
    </div>
  );
}

export default App;
