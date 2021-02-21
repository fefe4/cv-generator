import React from 'react';
import uniqid from "uniqid";

const EducationInfo = (props) => {
  const { experiences } = props;
  return (
    <ul>
       {props.experiences.map((experience) => {
        
        return <li className="title" key={uniqid()}> <div className="xToTheRight"> <a>{experience.from}-{experience.to} {experience.employer}, {experience.position} 
        {"\n"}  </a> <span className="deleteBtn" id={experiences.indexOf(experience)} onClick={props.deleteExperience}>x</span> </div>
        <a>{experience.moreInfo}</a> 
        </li>;
        
      })}
    </ul>
  );
};

export default EducationInfo;