import React from "react";

import "./ToDoBoardPage.css";

import ToDoCard from "./ToDoCard";

export default function ToDoBoardPage(props) {
  return (
    <div>
      <p>This is ToDoBoardPage</p>
      <ToDoCard
        toDo="To Do Label"
        description="To Do Description"
        createdAt="2022-11-19"
        dueDate="2022-12-01"
        toDoStatus="False"
      />
    </div>
  );
}
