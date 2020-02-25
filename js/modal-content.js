var link = document.querySelector(".open-modal-content");
var modal = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var form = document.querySelector(".feedback-form");
var login = modal.querySelector("[name=login]");
var password = modal.querySelector("[name=password]");

var map = document.querySelector(".popup-map");
var mapOpen = document.querySelector(".open-map");
var mapClose = document.querySelector(".map-close");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
};


link.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");

  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
});


form.addEventListener("submit", function(evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    console.log("Введи пароль и логин");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});


window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal-show")) {
      modal.classList.remove("modal-show");
    }
  }
})




mapOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  map.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  map.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (map.classList.contains("modal-show")) {
      map.classList.remove("modal-show");
    }
  }
})




