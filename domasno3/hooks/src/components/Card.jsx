import React from "react";

const Card = ({ name, surname, phoneNum, email }) => {
  return (
    <div className="card">
      <h1 id="title">Your Card is Created!</h1>
      <p id="name">
        Full Name: {name} {surname}
      </p>
      <p id="number">Phone Number: {phoneNum}</p>
      <p id="email">Email address: {email}</p>
    </div>
  );
};



export default Card;

