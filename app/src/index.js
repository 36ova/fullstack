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

fetch("http://localhost:5002/wordlists ")
  .then((data) => {
    return data.json();
})
  .then((data) => {
    const parentNode = document.querySelector(".main-aside");

    data.forEach((wordlist) => {
      console.log(parentNode, wordlist)
      const node = document.createElement("section");
      node.classList.add("roundable");

      node.innerHTML = `
        <h1>${wordlist.title}</h1>
        <p>${wordlist.user}</p>
      `;

      parentNode.appendChild(node);
    });
  });