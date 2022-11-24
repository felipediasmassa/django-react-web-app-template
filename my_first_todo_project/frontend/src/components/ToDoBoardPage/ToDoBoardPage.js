import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./ToDoBoardPage.css";

import ToDoCard from "./ToDoCard";

export default function ToDoBoardPage(props) {
  const [toDos, setToDos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/to-dos")
      .then((response) => response.json())
      .then((data) => {
        setToDos(data);
        console.log(data);
      });
  }, []);

  const navigateAddItemHandler = () => {
    navigate("/add");
  };

  return (
    <div className="content">
      <nav>
        <h1>My To Do App</h1>
        <button onClick={navigateAddItemHandler}>Add To Do</button>
      </nav>
      <p>This is ToDoBoardPage</p>
      {toDos.map((t) => (
        <ToDoCard
          key={t.id}
          id={t.id}
          toDo={t.to_do}
          description={t.description}
          createdAt={t.created_at.toString()}
          dueDate={t.due_date.toString()}
          toDoStatus={t.todo_status.toString()}
        />
      ))}
    </div>
  );
}
