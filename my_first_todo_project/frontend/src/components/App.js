import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import "./App.css";

import ToDoBoardPage from "./ToDoBoardPage/ToDoBoardPage";
import AddToDoPage from "./AddToDoPage/AddToDoPage";
import EditToDoPage from "./EditToDoPage/EditToDoPage";

export default function App(props) {
  return (
    <Router>
      <Routes>
        <Route path="" element={<ToDoBoardPage />}></Route>
        <Route path="add/" element={<AddToDoPage />}></Route>
        <Route path="edit/:toDoId" element={<EditToDoPage />}></Route>
      </Routes>
    </Router>
  );
}

const appDiv = ReactDOM.createRoot(document.getElementById("app"));
appDiv.render(<App />);
