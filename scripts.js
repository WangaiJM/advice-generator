const adviceIdInput = document.querySelector("#advice_id");
const adviceInput = document.querySelector(".advice__statement");
const adviceBtn = document.querySelector(".btn__advice");

async function adviceGenerator() {
  const res = await fetch("	https://api.adviceslip.com/advice");
  const data = await res.json();
  const adviceInfo = {
    id: data.slip.id,
    advice: data.slip.advice,
  };

  adviceIdInput.textContent = adviceInfo.id;
  adviceInput.textContent = adviceInfo.advice;
}

window.onload = adviceGenerator;

adviceBtn.addEventListener("click", () => {
  adviceGenerator();
});
