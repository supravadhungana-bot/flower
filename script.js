document.addEventListener("DOMContentLoaded", function () {

  // Get Nepal time properly
  const nepalNow = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Kathmandu" })
  );

  const todayNepal = new Date(
    nepalNow.getFullYear(),
    nepalNow.getMonth(),
    nepalNow.getDate()
  );

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {

    const unlockStr = card.getAttribute("data-unlock");
    const unlockDate = new Date(unlockStr + "T00:00:00");

    if (todayNepal < unlockDate) {

      card.innerHTML = `
        <div style="
          height: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        ">
          <h2>🔒 Locked</h2>
          <p>Opens on ${unlockStr}</p>
        </div>
      `;
    }

  });

});



function answerYes() {
  document.getElementById("answerText").innerText = "Yayyy 💗 That made me smile.";
}

function answerNo() {
  document.getElementById("answerText").innerText = "Okay 🙂.";
}

function startTest() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("quiz").style.display = "block";
}

function nextQuestion(current) {
  document.getElementById("q" + current).style.display = "none";
  document.getElementById("q" + (current + 1)).style.display = "block";
}

function showResult() {
  document.getElementById("q4").style.display = "none";
  document.getElementById("result").style.display = "block";
}

