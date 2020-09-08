"use strict";

(function () {
  let searchCriterion;

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    searchCriterion = document.getElementById("searchCriterion");
    document.getElementById("sendurl").addEventListener("click", update);
  }

  async function update() {
    try {
      const result = await fetch("/urlencoded", {
        method: "POST",
        //key and value pair, if many pairs use &
        body: `licence=${searchCriterion.value}`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      updatePage(await result.json());
    } catch (err) {
      showError(err.message);
    }
  }
})();
