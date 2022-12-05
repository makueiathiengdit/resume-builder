import React from "react";
import useTitle from "../hooks/useTitle";
import Header from "../layout/header/Header";
function About() {
  const [, ,] = useTitle("About us");

  return (
    <div className="ui container">
      <div className="App">
        <Header />
        <div className="App-header">
          <h1>About Page</h1>
          <p>coming soon</p>
        </div>
      </div>
    </div>
  );
}

export default About;
