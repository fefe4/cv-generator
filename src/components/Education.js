import React, { Component } from 'react';
import EducationInfo from './EducationInfo';

class Education extends Component {
  constructor (props) {
    super (props);
    this.deleteTitle = this.deleteTitle.bind(this);
    this.state = {
      from : "",
      to: "",
      titleName:"",
      school: "",
      moreInfo: "",
      newTitle: {
        from:"",
        to:"",
        titleName:"",
        school:"",
        moreInfo:""
      },
      titles: []

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

  handleChangeTitle = (e) => {
    this.setState({
        titleName: e.target.value,
    });
  };

  handleChangeSchool = (e) => {
    this.setState({
        school: e.target.value,
    });
  };

  handleChangeMoreInfo = (e) => {
    this.setState({
        moreInfo: e.target.value
    });
  };

  onSubmitTitle = (e) => {
    e.preventDefault();
    this.setState ({
      newTitle: {
        from: this.state.from,
        to: this.state.to,
        titleName: this.state.titleName,
        school: this.state.school,
        moreInfo: this.state.moreInfo
      },
    }, () => {
     
      console.log (this.state.newTitle);
      this.setState ({
        titles: this.state.titles.concat(this.state.newTitle),
      });
      console.log (this.state.titles) 
    })
   
  }
 
  deleteTitle (e) {
    console.log (this.state.titles)
    var array = [...this.state.titles]; // make a separate copy of the array
    var index = e.target.id;
    console.log(index);
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({
        titles: array
      });
    }
  }

  render () {
  
    return (
      <div>
        <form onSubmit={this.onSubmitTitle}>
          <label>From</label>
          <input
            onChange={this.handleChangeFrom}
            value={this.state.form}
            type="text"
            id="date"
          />
          <label>To</label>
          <input
            value={this.state.to}
            onChange={this.handleChangeTo}
            type="text"
            id=""
          />
          <label>Title</label>
          <input 
            value={this.state.titleName}
            onChange={this.handleChangeTitle}
            type="text" 
            id=""></input>
          <label>Name of School</label>
          <input 
            onChange={this.handleChangeSchool}
            value={this.state.school}
            type="text" 
            id="school"></input>
          <label>More information about your Title</label>
          <input
            onChange={this.handleChangeMoreInfo}
            value={this.state.moreInfo}
            type="text"
            id="moreInfo"
          ></input>
          <button type="submit">Add Education</button>
        </form>
        <EducationInfo titles = {this.state.titles} deleteTitle={this.deleteTitle}/>
      </div>
    )
  }
}

export default Education