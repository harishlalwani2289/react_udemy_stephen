import ProfileCard from "./ProfileCard";
import React from "react";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
import "bulma/css/bulma.css";

function App() {
  return (
    <div>
      <div>
        <section className="hero is-primary">
          <div className="hero-body ">
            <p className="title has-text-centered">
              Personal Digital Assistant
            </p>
          </div>
        </section>
      </div>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                description="Alexa is amazon's"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImage}
                description="Cortana is microsoft"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                image={SiriImage}
                description="Appla ke product hain yeh"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
