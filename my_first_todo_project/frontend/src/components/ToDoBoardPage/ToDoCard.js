import React from "react";

import "./ToDoCard.css";

export default function ToDoCard(props) {
  return (
    <div>
      <button className="to-do-button" onClick={console.log("Clicked!")}>
        First To Do
        <p class="to-do-label">{props.toDo}</p>
        <p class="to-do-description">{props.description}</p>
        <p class="to-do-created-at">{props.createdAt}</p>
        <p class="to-do-due-date">{props.dueDate}</p>
        <p class="to-do-status">{props.toDoStatus}</p>
      </button>
    </div>
  );
}
