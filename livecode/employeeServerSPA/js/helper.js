"use strict";

function updateMessage(message) {
  const messagearea = document.getElementById("messagearea");
  messagearea.textContent = message;
}

function clearMessage() {
  const messagearea = document.getElementById("messagearea");
  messagearea.textContent = "";
}
