"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

const closeModal = () => {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};
const openModal = () => {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openModal);
}
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === `Escape`) {
    closeModal();
  }
});
