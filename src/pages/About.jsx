import React from "react";
import useTitle from "../hooks/useTitle";
import Header from "../layout/header/Header";
function About() {
  const [, ,] = useTitle("About us");

  return (
    <div className="ui container">
      <Header />
      <h2>About Page</h2>
    </div>
  );
}

export default About;
