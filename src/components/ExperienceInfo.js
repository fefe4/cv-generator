import React from 'react';
import uniqid from "uniqid";

const EducationInfo = (props) => {
  const { experiences } = props;
  return (
    <ul>
       {props.experiences.map((experience) => {
        
        return <li className="title" key={uniqid()}> <div className="xToTheRight"> <a>{experience.from}-{experience.to} {experience.employer}, {experience.position} 
        {"\n"}  </a> <button className="deleteBtn" id={experiences.indexOf(experience)} onClick={props.deleteexperience}>x</button> </div>
        <a>{experience.moreInfo}</a> 
        </li>;
        
      })}
    </ul>
  );
};

export default EducationInfo;