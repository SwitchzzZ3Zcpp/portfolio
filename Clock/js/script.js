// document - это вся html-страница
console.dir(typeof document);
// document.querySelector() - подключение к любому тегу на странице
// console.log( document.querySelector(".s") );
const sec = document.querySelector('.s'); // Подключение к секундной стрелке
const min = document.querySelector('.m'); // Подключение к минутной стрелке
const hour = document.querySelector('.h'); // Подключение к часовой стрелке
const hoursNum = document.querySelector('.hours'); // Подключение к часам числовым
const minNum = document.querySelector('.minutes'); // Подключение к минутам числовым

function clock() {
    // new Date() - возвращает объект, который может вернуть дату и время
    let time = new Date();
    // getHours() - метод возвращает часы
    // getMinutes() - метод возвращает минуты
    // getSeconds() - метод возвращает секунды
    let second = time.getSeconds() * 6;
    let minutes = time.getMinutes() * 6;
    let hours = time.getHours() * 30;
    // console.dir(hoursNum);
    sec.style.transform = `rotate(${second}deg)`;
    min.style.transform = `rotate(${minutes}deg)`;
    hour.style.transform = `rotate(${hours}deg)`;
    // .innerHTML - заменяет содержимое тега
    hoursNum.innerHTML = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    minNum.innerHTML = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    setTimeout(() => {clock()}, 1000);
}
clock()


// Рекурсия - это когда функция запускает саму себя
/* let i = 0
function name() {
    if (i < 5) {
        console.log(i++);
        name()
    }
}
name() */

// document.querySelectorAll() - подключается к нескольким тегам, возвращает массив
const links = document.querySelectorAll('.tabsItem'); // подключаемся к пунктам меню
console.log(links);
const tabs = document.querySelectorAll('.tabsContentItem'); //  подключаемся к закладкам
for (let i = 0; i < links.length; i++) {
    console.dir(links[i]);
    /* links[i].onclick = function () {
        console.log("Привет!");
    }
    links[i].onclick = function () {
        console.log("Нажали!");
    } */

    // .addEventListener() - добавляет функцию к событию
    // .addEventListener(событие, функция) 
    links[i].addEventListener("click", function (event) {
        // event.preventDefault() - отключить событие по умолчанию
        event.preventDefault();
        // .classList.add("name") - метод добавляет класс к тегу
        // .classList.remove("name") - метод удаляет класс у тега
        // .classList.contains("name") - возвращает "true" если класс у тега есть
        for (let x = 0; x < links.length; x++) {
            links[x].classList.remove("active");
            tabs[x].classList.remove("active");
        }
        this.classList.add("active");
        tabs[i].classList.add("active");
    })    
}