import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../public/styles.css";
import React from "react";
import ReactDOM from "react-dom";

// Import main react frontend from app.js
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
