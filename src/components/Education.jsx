import React from "react";
import './css/Education.css'
const Education = () => {
  return (
    <div className="education-container">
      <h1>Education</h1>
      <div className="education-content">
        <div className="education-text">
          <h4>B.E., ECE</h4>
          <p>
            St. Joseph's Institute of Technology, Chennai.
            <br />
            CGPA: 9.22 (till 5th Semester)
          </p>
        </div>
        <div className="education-text">
          <h4>Class XII</h4>
          <p>
            Veveaham Higher Secondary School, Tirupur
            <br />
            Percentage: 83.33%
          </p>
        </div>
        <div className="education-text">
          <h4>Class X</h4>
          <p>
            Veveaham Higher Secondary School, Tirupur
            <br />
            Percentage: 95%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
