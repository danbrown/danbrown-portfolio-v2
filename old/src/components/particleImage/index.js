import * as React from "react";
import Particles from "react-particles-js";

export default class App extends React.Component {
  render() {
    return (
      <Particles
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: true,
                color: "#3CA9D1",
                blur: 5,
              },
            },
          },
        }}
        style={{
          width: "100%",
          backgroundImage: `url(${"../../assets/img/logo.png"})`,
        }}
      />
    );
  }
}
