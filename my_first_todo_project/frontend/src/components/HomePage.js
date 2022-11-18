import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import ToDoBoard from "./ToDoBoard";
import NewToDo from "./NewToDo";

export default function HomePage(props) {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ToDoBoard />}></Route>
        <Route path="/new" element={<NewToDo />} />
      </Routes>
    </Router>
  );
}
