const today = new Date().toISOString().split("T")[0];

document.querySelectorAll(".card").forEach(card => {
  const unlockDate = card.dataset.unlock;
  const locked = card.querySelector(".locked");
  const content = card.querySelector(".content");

  if (today < unlockDate) {
 {
    if (locked) locked.style.display = "none";
    if (content) content.classList.remove("hidden");
  }
});

function answerYes() {
  document.getElementById("answerText").innerText = "Yayyy 💗 That made me smile.";
}

function answerNo() {
  document.getElementById("answerText").innerText = "Okay 🙂.";
}
