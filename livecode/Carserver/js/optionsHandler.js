"use strict";

(function() {
  let carselection;
  let resultarea;

  document.addEventListener("DOMContentLoaded", init);

  async function init() {
    carselection = document.getElementById("carselection");
    resultarea = document.getElementById('resultarea')
    try {
      let result = await fetch("/getAll"); //, {method: 'GET'}) get is default!
      initSelection(await result.json());
    } catch (err) {
      showError("Data transfer interrupted");
    }
  }

  function initSelection(queryResult) {
    if (!queryResult || queryResult.error) {
      showError(queryResult?queryResult.error:"Error");
    } else {
      for (let car of queryResult) {
        let option = document.createElement("option");
        option.value = car.licence;
        option.textContent = car.licence;
        carselection.appendChild(option);
      }
    }
    carselection.addEventListener("change", choose);
    carselection.value = "";
  }
  async function choose() {
    let licence = carselection.value;

    if (licence.length > 0) {
      const result = await fetch('/jsonencoded', {
        method:"POST", 
        body: JSON.stringify({licence}), 
        // body: JSON.stringify({licence: licence}), 
        headers: {
          'Content-Type':'application/json'
        }
      })
      updatePage(await result.json());
    }
    else {
      resultarea.innerHTML = '';
    }
  }
})();
