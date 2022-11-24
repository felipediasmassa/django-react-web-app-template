import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./AddToDoPage.css";

export default function AddToDoPage(props) {
  const [toDoProps, setToDoProps] = useState({
    toDo: "",
    description: "",
    dueDate: "",
  });
  const navigate = useNavigate();

  const handleToDoLabelChange = (event) => {
    setToDoProps((prevToDoProps) => ({
      ...prevToDoProps,
      toDo: event.target.value,
    }));
  };

  const handleToDoDescriptionChange = (event) => {
    setToDoProps((prevToDoProps) => ({
      ...prevToDoProps,
      description: event.target.value,
    }));
  };

  const handleToDoDueDateChange = (event) => {
    setToDoProps((prevToDoProps) => ({
      ...prevToDoProps,
      dueDate: event.target.value,
    }));
  };

  const handleNewToDoSubmit = (event) => {
    console.log(toDoProps);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to_do: toDoProps.toDo,
        description: toDoProps.description,
        due_date: toDoProps.dueDate,
      }),
    };
    fetch("/api/create-to-do", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(toDoProps);
        console.log(data);
      });
    event.preventDefault();
    navigate("/");
  };

  return (
    <>
      <p>This is AddToDoPage</p>
      <form onSubmit={handleNewToDoSubmit}>
        <label>
          To Do:
          <input
            type="text"
            value={toDoProps.toDo}
            onChange={handleToDoLabelChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={toDoProps.description}
            onChange={handleToDoDescriptionChange}
          />
        </label>
        <label>
          Due Date:
          <input
            type="date"
            value={toDoProps.dueDate}
            onChange={handleToDoDueDateChange}
          ></input>
        </label>
        <input type="submit" value="Add To Do" />
      </form>
    </>
  );
}
