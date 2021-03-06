var link = document.querySelector(".open-modal-content");
var modal = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var form = document.querySelector(".feedback-form");
var login = modal.querySelector("[name=login]");
var password = modal.querySelector("[name=password]");

var map = document.querySelector(".popup-map");
var mapOpen = document.querySelector(".open-map");
var mapClose = document.querySelector(".map-close");

var basketOpen = document.querySelector(".buy-item");
var modalBasket = document.querySelector(".modal-basket");
var basketClose = document.querySelector(".close-basket");


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
  modal.classList.remove("error");
});

form.addEventListener("submit", function(evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    modal.classList.remove("error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("error");
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
      modal.classList.remove("error");
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



basketOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalBasket.classList.add("modal-show");
});

basketClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalBasket.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalBasket.classList.contains("modal-show")) {
      modalBasket.classList.remove("modal-show");
    }
  }
})
