import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

fetch("http://localhost:5002/logins")
  .then((data) => {
    return data.json();
})
  .then((data) => {
    console.log(data);

    // const parentNode = document.querySelector(".main-aside");

    // data.forEach((blog) => {
    //   const node = document.createElement("section");
    //   node.classList.add("roundable");

    //   node.innerHTML = `
    //     <h1>${blog.title}</h1>
    //     <p>${blog.description}</p>
    //   `;

    //   parentNode.appendChild(node);
  });