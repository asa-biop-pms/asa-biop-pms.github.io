(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
  }

  // Mark webinars as upcoming in the browser so the badge never goes stale between site builds.
  var now = new Date();
  var today = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0")
  ].join("-");
  document.querySelectorAll(".webinar[data-date]").forEach(function (card) {
    if (card.getAttribute("data-date") >= today) {
      card.classList.add("is-upcoming");
      var badge = card.querySelector(".badge-upcoming");
      if (badge) badge.hidden = false;
    }
  });
})();
