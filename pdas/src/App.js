import ProfileCard from "./ProfileCard";
import React from "react";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

console.log(AlexaImage);
console.log(SiriImage);

function App() {
  return (
    <div>
      <div>Personal Digital Assistant</div>
      <ProfileCard title="Alex" handle="@alexa99" />
      <ProfileCard title="Cortana" handle="@cortana32" />
      <ProfileCard title="Siri" handle="@siri01" />
    </div>
  );
}

export default App;
