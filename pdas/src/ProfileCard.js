import React from "react";

function ProfileCard({ title, handle, image }) {
  // This line is also not required
  //   const { title, handle } = props;
  return (
    <div>
      <img src={image} alt="pda logo" />
      PDA name: {title} with twitter handle {handle}
    </div>
  );
}

export default ProfileCard;
