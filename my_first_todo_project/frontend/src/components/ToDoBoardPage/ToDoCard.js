import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./ToDoCard.css";

import AssignmentIcon from "@mui/icons-material/Assignment";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import MessageIcon from "@mui/icons-material/Message";

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
      <div className="first-row">
        <div className="to-do-label">
          <AssignmentIcon />
          <p>{props.toDo}</p>
        </div>
        <div className="to-do-created-at">
          <CalendarTodayIcon />
          <p>Created At: {props.createdAt}</p>
        </div>
        <div className="to-do-due-date">
          <AccessAlarmsIcon />
          <p>Due Date: {props.dueDate}</p>
        </div>
        <div className="to-do-status">
          {!props.toDoStatus ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
          <p>Status: {props.toDoStatus}</p>
        </div>
      </div>
      {isExpanded ? (
        <div className="second-row">
          <div className="to-do-description">
            <MessageIcon />
            <p>{props.description}</p>
          </div>
          <div className="to-do-edit">
            <button onClick={navigateEditItemHandler}>Edit To Do</button>
          </div>
        </div>
      ) : (
        false
      )}
    </button>
  );
}
