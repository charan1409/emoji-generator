import React, { useState } from "react";
import "./AvatarCustomization.css";
import male_avatar from "./male_avatar.png";
import female_avatar from "./female_avatar.png";

function AvatarCustomization({changeGender, image}) {
  const [gender, setGender] = useState("male");

  const getAvatarImage = () => {
    if (image) {
      return image;
    }
    return gender === "male" ? male_avatar : female_avatar;
  };

  return (
    <div className="avatar-customization">
      <div className="avatar-preview">
        <img
          src={getAvatarImage()}
          alt="Avatar"
        />
      </div>
      <div className="gender-btns">
        <button className={`${gender === "male" && "active"}`} onClick={() => {
            setGender("male");
            changeGender("male");
        }}>Male</button>
        <button className={`${gender === "female" && "active"}`} onClick={() => {
            setGender("female");
            changeGender("female");
        }}>Female</button>
      </div>
    </div>
  );
}

export default AvatarCustomization;
