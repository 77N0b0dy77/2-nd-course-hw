// Генерируем случайное число от 1 до 100
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Функция для обработки попытки игрока
function play() {
  // Получаем значение из поля ввода и преобразуем в число
  let guess = parseInt(document.getElementById('guess').value);
  
  // Проверяем, что ввели именно число
  if (isNaN(guess)) {
    alert('Пожалуйста, введите целое число!');
    return;
  }

  // Проверяем диапазон
  if (guess < 1 || guess > 100) {
    alert('Число должно быть от 1 до 100!');
    return;
  }

  attempts++; // Увеличиваем счётчик попыток

  // Сравниваем guess с secretNumber и выводим подсказку
  if (guess < secretNumber) {
    alert('Слишком мало! Попробуй другое число.');
  } else if (guess > secretNumber) {
    alert('Слишком много! Попробуй другое число.');
  } else {
    alert(`Поздравляю! Ты угадал число ${secretNumber} за ${attempts} попыток!`);
    // Можно отключить кнопку или скрыть поле, чтобы игра закончилась
    document.getElementById('guess').disabled = true;
    document.getElementById('submitBtn').disabled = true;
  }
}