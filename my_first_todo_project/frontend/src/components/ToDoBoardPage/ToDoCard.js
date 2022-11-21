import React, { useState } from "react";

import "./ToDoCard.css";

export default function ToDoCard(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const clickFunc = (toDo) => {
    console.log("Clicked " + { toDo });
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
    console.log(isExpanded);
  };

  return (
    <button className="to-do-button" onClick={() => clickFunc(props.toDo)}>
      <p className="to-do-first-row">{props.toDo}</p>
      <p className="to-do-first-row">Created At: {props.createdAt}</p>
      <p className="to-do-first-row">Due Date: {props.dueDate}</p>
      <p className="to-do-first-row">Status: {props.toDoStatus}</p>
      {isExpanded ? (
        <p className="to-do-second-row">{props.description}</p>
      ) : (
        false
      )}
    </button>
  );
}
