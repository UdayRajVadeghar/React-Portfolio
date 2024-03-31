import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Competetive Programmer",
          "Free to Work",
          "Full Stack Developer",
          "Open Source Contributor",
          "DSA Proficiency",
          "Public Speaker",
          "Team Leader"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;
