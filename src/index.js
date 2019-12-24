import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import "./index.css";
import App from "./App";

const options = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE
};

ReactDOM.render(
  <Router>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Router>,
  document.getElementById("root")
);
