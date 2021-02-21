import React, { Component } from "react";
import Pdf from "react-to-pdf";
import './App.css';
import './Education.css';
import PersonalInfo from "./components/PersonalInfo";
import Experience from "./components/Experience";
import Education from "./components/Education";

const ref = React.createRef();

class App extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button id="pdfBtn" onClick={toPdf}>Generate Pdf</button>}
        </Pdf>
        <div ref={ref}> 
          <h1>Curriculum Vitae Generator</h1>
          <h3>Personal Info</h3>
          <PersonalInfo/>
          <h3>Experience</h3>
          <Experience/>
          <h3>Education</h3>
          <Education/>
        </div>
      </div>
    );
  }
}

export default App;