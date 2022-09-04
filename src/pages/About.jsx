import React from "react";
import useTitle from "../hooks/useTitle";
function About() {
  const [, ,] = useTitle("About us");

  return (
    <div>
      <h2>About Page</h2>
    </div>
  );
}

export default About;
