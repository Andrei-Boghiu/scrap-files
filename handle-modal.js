// Default Variables
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");
const showModalBtn = document.querySelectorAll(".show-modal");

// Default Functions
const showModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const hideModal = () => {
  if (!modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
};

// Behavior /\ Logic
for (let i = 0; i < showModalBtn.length; i++)
  showModalBtn[i].addEventListener("click", showModal);

closeModalBtn.addEventListener("click", hideModal);
overlay.addEventListener("click", hideModal);

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") hideModal();
});
