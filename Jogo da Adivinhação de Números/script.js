


let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guess');
const checkButton = document.getElementById('checkButton');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');


checkButton.addEventListener('click', () => {
  const userGuess = Number(guessInput.value);
  attempts++;

  if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
    feedback.textContent = "Por favor, insira um número válido entre 1 e 100.";
    feedback.style.color = "red";
  } else if (userGuess === randomNumber) {
    feedback.textContent = `Parabéns! Você acertou o número ${randomNumber} em ${attempts} tentativa(s)!`;
    feedback.style.color = "green";
    checkButton.disabled = true; 
  } else if (userGuess < randomNumber) {
    feedback.textContent = "Muito baixo! Tente novamente.";
    feedback.style.color = "blue";
  } else {
    feedback.textContent = "Muito alto! Tente novamente.";
    feedback.style.color = "blue";
  }

  attemptsDisplay.textContent = `Tentativas: ${attempts}`;
  guessInput.value = '';
  guessInput.focus();
});
