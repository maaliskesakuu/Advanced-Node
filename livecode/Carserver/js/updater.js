"use strict";

function updatePage(cars) {
  let resultarea = document.getElementById("resultarea");
  resultarea.innerHTML = "";
  const ul = document.createElement("ul");
  for (let car of cars) {
    const li = document.createElement("li");
    li.textContent = `${car.model}: ${car.licence}`;
    ul.appendChild(li);
  }
  resultarea.append(ul);
}

function showError(message) {
  document.getElementById("resultarea").innerHTML = `
  <h1 class="error">Error</h1>
  <p class="error">${message}</p>`;
}
