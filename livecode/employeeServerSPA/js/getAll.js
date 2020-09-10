"use strict";

(function () {
  document.addEventListener("DOMContentLoaded", init);

  async function init() {
    try {
      const data = await fetch("/all");
      const employees = await data.json();

      const resultset = document.getElementById("resultset");
      for (let employee of employees) {
        const tr = document.createElement("tr");
        tr.appendChild(buildTdElement(employee.employeeId));
        tr.appendChild(buildTdElement(employee.firstname));
        tr.appendChild(buildTdElement(employee.lastname));
        tr.appendChild(buildTdElement(employee.department));
        tr.appendChild(buildTdElement(employee.salary));
        resultset.appendChild(tr);
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  function buildTdElement(data) {
    const td = document.createElement('td');
    td.textContent = data;
    return td;
}

})();
