// Массив вопросов
        const quiz = [
            {
                question: "Какой цвет небо?",
                options: ["1. Красный", "2. Синий", "3. Зелёный"],
                correctAnswer: 2 // номер правильного ответа (Синий)
            },
            {
                question: "Сколько дней в неделе?",
                options: ["1. Шесть", "2. Семь", "3. Восемь"],
                correctAnswer: 2 // номер правильного ответа (Семь)
            },
            {
                question: "Сколько у человека пальцев на одной руке?",
                options: ["1. Четыре", "2. Пять", "3. Шесть"],
                correctAnswer: 2 // номер правильного ответа (Пять)
            }
        ];

        let currentQuestionIndex = 0;
        let score = 0;

        // Функция для отображения текущего вопроса
        function showQuestion() {
            if (currentQuestionIndex >= quiz.length) {
                // Все вопросы пройдены — показать результат
                alert(`Вы набрали ${score} правильных ответов из ${quiz.length}.`);
                return;
            }

            const currentQuestion = quiz[currentQuestionIndex];
            const questionElement = document.getElementById('question');
            questionElement.textContent = currentQuestion.question;

            const optionsElement = document.getElementById('options');
            optionsElement.innerHTML = '';

            for (let i = 0; i < currentQuestion.options.length; i++) {
                const optionElement = document.createElement('div');
                optionElement.textContent = currentQuestion.options[i];
                optionElement.addEventListener('click', () => {
                    // При клике на вариант фиксируем выбор
                    const userAnswer = i + 1; // номера вариантов начинаются с 1
                    if (userAnswer === currentQuestion.correctAnswer) {
                        score++;
                    }
                    // Переходим к следующему вопросу после обработки клика
                    nextQuestion();
                });
                optionsElement.appendChild(optionElement);
            }
        }

        // Функция для перехода к следующему вопросу
        function nextQuestion() {
            currentQuestionIndex++;
            showQuestion();
        }

        // Запускаем викторину
        showQuestion();