/**
 * To get started using JavaScript / TypeScript, use the following code
 */
// import { render } from './app/jsApp';

// document.addEventListener('DOMContentLoaded', function (event) {
//     render();
// });

/**
 * To get started using React, use the following code
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/ReactApp";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
