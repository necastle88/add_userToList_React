import React, { Component } from "react";
import UserList from "./UserList";
import "./App.css";

class Form extends Component {
  state = {
    users: [],
    userName: "",
    firstName: "",
    lastName: "",
    gamesPlayed: 0,
  };

  checkIfUserNameExists = (users) => {
    let isUSer = false;
    users.forEach((user) => {
      if (user.userName === this.state.userName) {
        return (isUSer = true);
      }
      isUSer = false;
    });
    return isUSer;
  };

  checkFieldsHandler = () => {
    if (this.state.userName && this.state.userName && this.state.userName) {
      return false;
    }
    return true;
  };

  usernameChangeHandler = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };
  firstNameChangeHandler = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  lastNameChangeHandler = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  addUserClickHandler = (e, gamesPlayed = 0) => {
    e.preventDefault();
    let userName = this.state.userName;
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    let newUser = this.state.users;
    let users = this.state.users;

    console.log();

    if (!this.checkIfUserNameExists(users)) {
      newUser.push({
        ID: 12244562,
        userName: userName,
        firstName: firstName,
        lastName: lastName,
        gamesPlayed: gamesPlayed,
      });

      this.setState((state, props) => ({
        users: newUser,
      }));
    } else {
      alert(`${userName} is already taken.`);
    }
  };
  render() {
    return (
      <div className="Input-form">
        <form>
          <p>First Name:</p>
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.firstNameChangeHandler}
          ></input>
          <p>Last Name:</p>
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.lastNameChangeHandler}
          ></input>
          <p>username:</p>
          <input
            type="text"
            value={this.state.userName}
            onChange={this.usernameChangeHandler}
          ></input>
          <div />
          <button
            onClick={this.addUserClickHandler}
            disabled={this.checkFieldsHandler()}
          >
            Add
          </button>
        </form>
	    <UserList users={this.state.users} />
      </div>
  
    );
  }
}

export default Form;
