import React from "react";

const Greetings = ({ name }) => {
  return (
    <div>
      <h1>Hi, {name || "Guest"} </h1>
    </div>
  );
};

export default Greetings;
