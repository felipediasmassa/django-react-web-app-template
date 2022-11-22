import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./ToDoCard.css";

import AssignmentIcon from "@mui/icons-material/Assignment";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import MessageIcon from "@mui/icons-material/Message";
import EditIcon from "@mui/icons-material/Edit";

export default function ToDoCard(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const expandToDoHandler = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  const navigateEditItemHandler = () => {
    navigate("/edit/" + props.id);
  };

  return (
    <button className="to-do-button" onClick={expandToDoHandler}>
      <AssignmentIcon />
      <p className="to-do-first-row">{props.toDo}</p>
      <CalendarTodayIcon />
      <p className="to-do-first-row">Created At: {props.createdAt}</p>
      <AccessAlarmsIcon />
      <p className="to-do-first-row">Due Date: {props.dueDate}</p>
      {props.toDoStatus ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
      <p className="to-do-first-row">Status: {props.toDoStatus}</p>
      {isExpanded ? (
        <>
          <MessageIcon className="to-do-second-row" />
          <p className="to-do-second-row">{props.description}</p>
          <EditIcon />
          <button
            className="to-do-second-row"
            onClick={navigateEditItemHandler}
          >
            Edit To Do
          </button>
        </>
      ) : (
        false
      )}
    </button>
  );
}
