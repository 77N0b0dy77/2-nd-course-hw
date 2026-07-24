//1

const header = document.querySelector('h1');
const button = document.querySelector('button');

header.style.display = 'block';

button.addEventListener('click', () => {
    if (header.style.display === 'none') {
             header.style.display = 'block';
             button.textContent = 'Скрыть';

    } else {
        header.style.display = 'none';
        button.textContent = 'Показать';
    }

})

//2

const paragraph = document.querySelector('p');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    paragraph.style.color = 'blue';
})

//3

const header = document.querySelector('h1');
const button = document.querySelector('button');

button.addEventListener('click', () =>  {
    header.textContent = 'Привет, мир!'
})

//4

const liEl = document.querySelectorAll('.description');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    liEl.forEach((element) => {
        element.textContent = 'Измененный текст';
    })
})

//5

const liEl = document.querySelectorAll('.description');
const button = document.querySelectorAll('button');

button.forEach((button) => {
    button.addEventListener('click', () => {
        liEl.forEach((element) => {
            element.textContent = 'Новый текст'
        })
    })
})

//6

const button = document.querySelector('button');

button.addEventListener('click', () => {

    const newParagraph = document.createElement('p');

    newParagraph.textContent = 'Новый абзац';

    document.body.appendChild(newParagraph);
})

//7

const button = document.getElementById('btn');

button.addEventListener('click', () => {
    const firstDescription = document.querySelectorAll('.description');

    
    if (firstDescription.length > 0) {
        firstDescription[0].remove();
        
    } else {
        console.log("Элемнт не найден");
    }
})