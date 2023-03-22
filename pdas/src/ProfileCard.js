import React from "react";

function ProfileCard({ title, handle }) {
  // This line is also not required
  //   const { title, handle } = props;
  return (
    <div>
      PDA name: {title} with twitter handle {handle}
    </div>
  );
}

export default ProfileCard;
