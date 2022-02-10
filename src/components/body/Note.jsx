import React from "react";

let Note = (props) => {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.note}</p>
    </div>
  );
};

export default Note;
