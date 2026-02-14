 
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

