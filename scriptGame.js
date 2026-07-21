// Игра 1 Угадай число

function startGame1() {
    
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    // console.log(`Загаданные числа: ${randomNumber}`);

    let userGuess;
    let attempts = 0;

    while (true) {
        userGuess = prompt("Введите ваше число от 1 до 100");

        if (userGuess === null) {

            console.log("Игра остановлена! До свидания!" );
            return;
        }

        userGuess = parseInt(userGuess);
        attempts++;

        if (isNaN(userGuess)) {
            console.log("Введите корректное значение!");
            attempts--;
            continue;
        }

        if (userGuess < randomNumber) {
            alert("Больше!");
        } else if (userGuess > randomNumber) {
            alert("Меньше!");
        } else {
            alert(`Поздравляем! Вы угадали число ${randomNumber} за ${attempts} попыток`);
            break;
        }
    }
}

// Игра 2 Простая арифметика

function startGame2() {
  function generateRandomTask() {
    const operations = [
      { symbol: '+', func: (a, b) => a + b },
      { symbol: '-', func: (a, b) => a - b },
      { symbol: '*', func: (a, b) => a * b },
      { symbol: '/', func: (a, b) => a / b },
    ];

    const randomOperator = operations[Math.floor(Math.random() * operations.length)];

    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;

    let task;
    let correctAnswer;

    if (randomOperator.symbol === '/') {
      // Чтобы деление было нацело: num1 * num2 / num2 = num1
      task = `${num1 * num2} ${randomOperator.symbol} ${num2}`;
      correctAnswer = num1;
    } else {
      task = `${num1} ${randomOperator.symbol} ${num2}`;
      correctAnswer = randomOperator.func(num1, num2);
    }

    return { task, correctAnswer };
  }

  function checkUserAnswer() {
    const { task, correctAnswer } = generateRandomTask();
    const userInput = prompt(`Решите задачу: ${task}`);

    // Если пользователь нажал «Отмена» — prompt вернёт null
    if (userInput === null) {
      return; // просто выходим, без сообщений
    }

    // Убираем пробелы и проверяем, что строка не пустая
    const trimmedInput = userInput.trim();
    if (!trimmedInput) {
      alert('Вы не ввели ответ.');
      return;
    }

    const userAnswer = parseFloat(trimmedInput);

    // Если parseFloat не смог преобразовать строку в число (например, ввели текст)
    if (Number.isNaN(userAnswer)) {
      alert('Пожалуйста, введите число.');
      return;
    }

    // Для деления с плавающей точкой лучше сравнивать с допуском, но тут числа простые
    if (userAnswer === correctAnswer) {
      alert('Правильный ответ!');
    } else {
      alert(`Неправильный ответ! Правильный ответ: ${correctAnswer}`);
    }
  }

  checkUserAnswer();
}

// Игра 3 Переверни текст

function startGame3() {
  const userWord = prompt("Введите слово!");

  // Если пользователь нажал «Отмена», prompt вернёт null — сразу выходим из функции
  if (userWord === null) {
    return;
  }

  const trimmedWord = userWord.trim();

  if (trimmedWord) {
    const reversedWord = trimmedWord.split('').reverse().join('');
    alert(`Перевёрнутое слово: ${reversedWord}`);
  } else {
    alert("Вы не ввели слово.");
  }
}

// Игра 5 Викторина

function startGame5() {
    
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];
    
    let score = 0;

    for (let i = 0; i < quiz.length; i++) {
        const q = quiz[i];
        let questionText = q.question + "\n";
        
        for (let j = 0; j < q.options.length; j++) {
            questionText += q.options[j] + "\n"
        }

        const userAnswer = prompt(questionText + "Введите вариант с правильным ответом");
        
        if (parseInt(userAnswer) === q.correctAnswer) {
            score++
        } 
            alert(`Правильный ответ: ${q.correctAnswer}, ${q.options[q.correctAnswer - 1]}`);
        
    }
    alert(`Вы ответили правильно на ${score} вопросов из ${quiz.length}`)
}
