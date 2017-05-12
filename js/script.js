var link = document.querySelector(".search-btn");
var popup = document.querySelector(".wrapper-form");
var visit = popup.querySelector("[name=visit]");
var departure = popup.querySelector("[name=departure]");
var people = popup.querySelector("[name=people]");
var child = popup.querySelector("[name=child]");
var form = popup.querySelector("[name=search]")

popup.classList.add("wrapper-form-hide");
link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("wrapper-form-hide");
  visit.focus();
});

form.addEventListener("submit", function(event) {
  if (!visit.value || !departure.value || !people.value|| !child.value) {
    event.preventDefault();
    popup.classList.remove("wrapper-form-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("wrapper-form-error");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    popup.classList.add("wrapper-form-hide");
    popup.classList.remove("wrapper-form-error");
  }
});
