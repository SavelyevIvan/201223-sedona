  var link = document.querySelector(".search-btn");
  var popup = document.querySelector(".wrapper-form");
  var visit = popup.querySelector("[name=visit]");
  var departure = popup.querySelector("[name=departure]");
  var people = popup.querySelector("[name=people]");
  var child = popup.querySelector("[name=child]");
  var form = popup.querySelector("[name=search]")
  var storageVisit = localStorage.getItem("visit");
  var storageDeparture = localStorage.getItem("departure");
  var storagePeople = localStorage.getItem("people");
  var storageChild = localStorage.getItem("child");

  popup.classList.add("wrapper-form-hide");
  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("wrapper-form-hide");
    if (storageVisit) {
      visit.value = storageVisit;
      departure.focus();
    } else {
      visit.focus();
    }
  });

  form.addEventListener("submit", function(event) {
    if (!visit.value || !departure.value || !people.value|| !child.value) {
      event.preventDefault();
      popup.classList.remove("wrapper-form-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("wrapper-form-error");
    } else {
     localStorage.setItem("visit", visit.value);
     localStorage.setItem("departure", departure.value);
     localStorage.setItem("people", people.value);
     localStorage.setItem("child", child.value);
    }
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("wrapper-form-hide")) {}
      else  {
        popup.classList.add("wrapper-form-hide");
        popup.classList.remove("wrapper-form-error");
      }
    }
 });
