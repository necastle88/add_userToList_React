import React from "react";
import HideText from "./HideText";
import "./App.css";

const UserList = (props) => {
  return (
    <div className="List-container">
      <div className="Heading-Contatiner">
        <h3>Username</h3>
        <h3>First/Last name</h3>
        <h3>Games Played</h3>
      </div>

      {props.users.map((user, index) => (
        <div className="User-card">
          <h5>{user.userName}</h5>
          <h5>
            {user.firstName} {user.lastName}
          </h5>
          <HideText text={user.gamesPlayed} />
        </div>
      ))}
    </div>
  );
};

export default UserList;
