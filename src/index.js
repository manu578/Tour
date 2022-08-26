import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
// ReactDOM.(
//   <BrowserRouter>
//   <div>
//   <App />
//   </div>
//   </BrowserRouter>,
//   document.getElementById("root")
// );
