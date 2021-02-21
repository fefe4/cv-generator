import React from 'react';
import uniqid from "uniqid";

const EducationInfo = (props) => {
  const { titles } = props;
  return (
    <ul>
       {props.titles.map((title) => {
        
        return <li className="title" key={uniqid()}> <div className="xToTheRight"> <a>{title.from}-{title.to} {title.titleName}, {title.school} 
        {"\n"}  </a> <button className="deleteBtn" id={titles.indexOf(title)} onClick={props.deleteTitle}>x</button> </div>
        <a>{title.moreInfo}</a> 
        
        </li>;
        
      })}
    </ul>
  );
};

export default EducationInfo;