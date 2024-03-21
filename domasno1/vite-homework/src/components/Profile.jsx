import React from "react";
import Slika from './Slika'
const Profile = ({ name, age, slika_img, about }) => {
  return (
    <div>
      <>
        <h2>{name}</h2>
        <h3>{age} years old</h3>
        <Slika img={slika_img} />
        <p>{about}</p>
      </>
    </div>
  );
};

export default Profile;
