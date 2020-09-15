"use strict";

(function () {
  let resultarea;
  let input;

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    resultarea = document.getElementById("resultarea");
    input = document.getElementById("employeeId");
    document.getElementById("submit").addEventListener("click", submit);
  }

  async function submit() {
    clearMessage();
    resultarea.innerHTML = "";
    const id = input.value;
    try {
      const options = {
        method: "POST",
        body: JSON.stringify({ employeeId: id }),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const data = await fetch("/getOne", options);
      const result = await data.json();
      updatePage(result);
    } catch (err) {
      updateMessage(err.message);
    }
  }

  function updatePage(queryResult) {
    if (queryResult) {
      if (queryResult.message) {
        updateMessage(queryResult.message);
      } else {
        updateEmployeeData(queryResult[0]);
      }
    } else {
      updateMessage("not found");
    }
  }

  function updateEmployeeData(employee) {
    resultarea.innerHTML = `
      <p>EmployeeId: ${employee.employeeId}</p>
      <p>EmployeeId: ${employee.firstname}</p>
      <p>EmployeeId: ${employee.lastname}</p>
      <p>EmployeeId: ${employee.department}</p>
      <p>EmployeeId: ${employee.salary}</p>`;
  }
})();
