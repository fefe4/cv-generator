import React from 'react';
import {Component} from 'react';
import PersonalData from './PersonalData'


class PersonalInfo extends Component {
  constructor(props) {
    super (props)

    this.state = {
      name : "",
      lastName : "",
      adress : "",
      email : "",
      telephone : ""
    }
  }
  
  handleChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleChangeLastName = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  handleChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleChangeAdress = (e) => {
    this.setState({
      adress: e.target.value,
    });
  };

  handleChangeTelephone = (e) => {
    this.setState({
      telephone: e.target.value,
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();

  };

  render() {
    const { name, lastName, email, adress, telephone } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <div className="nameDiv">
            <div>
            <label>Name</label>
            <input
              onChange={this.handleChangeName}
              value={this.state.title}
              type="text"
              id="nameInput"
            />
            </div>
            <div>
            <label>LastName</label>
            <input
              onChange={this.handleChangeLastName}
              type="text"
              id="lastNameInput"
            />
            </div>
          </div>
          <label>Email</label>
          <input 
            type="text"
            id="emailInput" 
            onChange={this.handleChangeEmail}
          ></input>
          <label>Adress</label>
          <input 
            onChange = {this.handleChangeAdress} 
            type="text"
          ></input>
          <label>Telephone Number</label>
          <input 
            onChange = {this.handleChangeTelephone}
            type="text" 
            id="numberInput"
          ></input>
        </form>
        <PersonalData 
        name = {name} lastName = {lastName}
        email = {email}
        adress = {adress}
        telephone = {telephone}/>
      </div>
    )
  }
}

export default PersonalInfo