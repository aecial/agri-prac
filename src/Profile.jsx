import React from "react";
import NavigationBar from "./NavigationBar";
import "./Profile.css";
import { Button } from "bootstrap";

const Profile = () => {
  const accType = "Multi-Millionaire";
  const name = "Andrew Tate";
  const contact = "09982409945";
  const rating = "5";
  return (
    <>
      <NavigationBar />

      <h1>Profile</h1>
      <div className="profile-div">
        <div className="img-container">
          <img src="https://www.insidesport.in/wp-content/uploads/2023/03/1-2.png" />
          <h2 className="info">Account Type: {accType}</h2>
          <h4 className="info">Name: {name}</h4>
          <h4 className="info">Contact #: {contact}</h4>
          <h4 className="info">Rating: {rating} stars</h4>
          <button className="edit-profile-btn">Edit Profile</button>
        </div>
      </div>
    </>
  );
};

export default Profile;
