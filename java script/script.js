function time() {
    Time = 120;
    timeTimer = setInterval(() => {
      if (countdownTime > 0) {
        countdownTime--;
        updateCountdown();
      } else {
        nextQuestion();
      }
    }, 1000);
  }
  
  function counttime() {
    const minutes = Math.floor(countdownTime / 60);
    const seconds = countdownTime % 60;
    document.getElementById('counttime').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
  let currentQuestionIndex = 0;
let countdownTimer;
let ;
let totalTime = 0;
let countdownTime = 120;

function starttime() {
  globalTimer = setInterval(() => {
    totalTime++;
    updatetime();
  }, 1000);
}

function starttime() {
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;
  document.getElementById('time').textContent = `Total Time: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

