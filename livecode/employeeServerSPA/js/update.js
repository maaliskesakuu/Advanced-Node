"use strict";

(function () {
  let employeeIdField;
  let firstnameField;
  let lastnameField;
  let departmentField;
  let salaryField;

  let searchState = true;

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    employeeIdField = document.getElementById("employeeId");
    firstnameField = document.getElementById("firstname");
    lastnameField = document.getElementById("lastname");
    departmentField = document.getElementById("department");
    salaryField = document.getElementById("salary");

    readOnlyState(searchState);

    document.getElementById("submit").addEventListener("click", submit);
  }

  async function submit() {
    clearMessage();
    try {
      if (searchState) {
        const employeeId = employeeIdField.value;
        const options = {
          method: "POST",
          body: JSON.stringify({ employeeId }),
          headers: {
            "Content-Type": "application/json",
          },
        };
        const data = await fetch("/getOne", options);
        const queryResult = await data.json();
        if (queryResult) {
          if (queryResult.message) {
            updateMessage(queryResult.message);
          } else {
            updateEmployeeData(queryResult[0]);
          }
        } else {
          updateMessage("Not found");
        }
      } else {
        const employee = {
          employeeId: +employeeIdField.value,
          firstname: firstnameField.value,
          lastname: lastnameField.value,
          department: departmentField.value,
          salary: +salaryField.value,
        };

        const options = {
          method: "POST",
          body: JSON.stringify(employee),
          headers: {
            "Content-Type": "application/json",
          },
        };
        const data = await fetch("/update", options);
        const result = await data.json();
        if (result.message) {
          updateMessage(result.message);
        }
        searchState = true;
        readOnlyState(searchState);
      }
    } catch (err) {
      updateMessage(err.message);
    }
  }

  function updateEmployeeData(employee) {
    employeeIdField.value = employee.employeeId;
    firstnameField.value = employee.firstname;
    lastnameField.value = employee.lastname;
    departmentField.value = employee.department;
    salaryField.value = employee.salary;
    searchState = false;
    readOnlyState(searchState);
  }

  function readOnlyState(state) {
    if (state) {
      employeeIdField.removeAttribute("readonly");
      firstnameField.setAttribute("readonly", state);
      lastnameField.setAttribute("readonly", state);
      departmentField.setAttribute("readonly", state);
      salaryField.setAttribute("readonly", state);
    } else {
      employeeIdField.setAttribute("readonly", true);
      firstnameField.removeAttribute("readonly");
      lastnameField.removeAttribute("readonly");
      departmentField.removeAttribute("readonly");
      salaryField.removeAttribute("readonly");
    }
  }
})();
