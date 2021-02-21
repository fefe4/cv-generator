import React, { Component } from "react";
import ExperienceInfo from './ExperienceInfo'

class Experience extends Component {
  constructor (props) {
    super (props);
    this.deleteExperience = this.deleteExperience.bind(this);
    this.state = {
      from : "",
      to: "",
      employer:"",
      position: "",
      moreInfo: "",
      newExperience: {
        from:"",
        to:"",
        employer:"",
        position:"",
        moreInfo:""
      },
      experiences: []

    }
  }
  handleChangeFrom = (e) => {
    this.setState({
      from:e.target.value,

    });
  };

  handleChangeTo = (e) => {
    this.setState({
        to: e.target.value,
    });
  };

  handleChangeExperience = (e) => {
    this.setState({
        employer: e.target.value,
    });
  };

  handleChangePosition = (e) => {
    this.setState({
        position: e.target.value,
    });
  };

  handleChangeMoreInfo = (e) => {
    this.setState({
        moreInfo: e.target.value
    });
  };

  onSubmitExperience = (e) => {
    e.preventDefault();
    this.setState ({
      newExperience: {
        from: this.state.from,
        to: this.state.to,
        employer: this.state.employer,
        position: this.state.position,
        moreInfo: this.state.moreInfo
      },
    }, () => {
     
      console.log (this.state.newExperience);
      this.setState ({
        experiences: this.state.experiences.concat(this.state.newExperience),
      });
      console.log (this.state.experiences) 
    })
   
  }
 
  deleteExperience (e) {
    console.log (this.state.experiences)
    var array = [...this.state.experiences]; // make a separate copy of the array
    var index = e.target.id;
    console.log(index);
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({
        experiences: array
      });
    }
  }

  render () {
    return (
    <div>
    <form onSubmit={this.onSubmitExperience}>
        <label>From</label>
        <input
         onChange={this.handleChangeFrom}
         value={this.state.form}
         type="text"
         id=""
         />
        <label>to</label>
        <input
          value={this.state.to}
          onChange={this.handleChangeTo}
          type="text"
          id=""
        />
        <label>Employer</label>
        <input
          value={this.state.employer}
          onChange={this.handleChangeExperience}
          type="text" 
          id=""
         ></input>
        <label>Position</label>
        <input
          onChange={this.handleChangePosition}
          value={this.state.position} 
          type="text" 
          id=""></input>
        <label>More information about your role and position</label>
        <input 
          onChange={this.handleChangeMoreInfo}
          value={this.state.moreInfo}
          type="text"
          id="moreInfo"
        ></input>
        <button type="submit">Add Job Experience</button>
      </form>
      <ExperienceInfo experiences = {this.state.experiences} deleteExperience={this.deleteExperience}/>
    </div> 
    )
  }
}

export default Experience