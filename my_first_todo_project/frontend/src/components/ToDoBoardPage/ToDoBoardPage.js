import React from "react";

import "./ToDoBoardPage.css";

import ToDoCard from "./ToDoCard";

export default function ToDoBoardPage(props) {
  return (
    <div>
      <p>This is ToDoBoardPage</p>
      <ToDoCard
        toDo="First To Do Label"
        description="First To Do Description"
        createdAt="2022-11-19"
        dueDate="2022-12-01"
        toDoStatus="True"
      />
      <ToDoCard
        toDo="Second To Do Label"
        description="Second To Do Description"
        createdAt="2022-11-26"
        dueDate="2022-12-08"
        toDoStatus="False"
      />
      <ToDoCard
        toDo="Third To Do Label"
        description="Third To Do Description"
        createdAt="2022-11-30"
        dueDate="2022-12-23"
        toDoStatus="False"
      />
    </div>
  );
}
