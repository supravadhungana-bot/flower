function getNepalDate() {
  const now = new Date();
  const nepalTime = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Kathmandu" })
  );

  const year = nepalTime.getFullYear();
  const month = String(nepalTime.getMonth() + 1).padStart(2, "0");
  const day = String(nepalTime.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const today = getNepalDate();
const unlockDate = "2026-02-08";

if (today >= unlockDate) {
  document.body.classList.add("open");
} else {
  document.body.classList.add("locked");
}

document.querySelectorAll(".card").forEach(card => {
  
  const locked = card.querySelector(".locked");
  const content = card.querySelector(".content");

  
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
