var basketOpen = document.querySelector(".buy-item");
var modalBasket = document.querySelector(".modal-basket");
var basketClose = document.querySelector(".close-basket");



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
