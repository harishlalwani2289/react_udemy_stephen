import React from "react";

function ProfileCard(props) {
  return (
    <div>
      PDA name: {props.title} with twitter handle {props.handle}
    </div>
  );
}

export default ProfileCard;
