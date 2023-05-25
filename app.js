// Навигация
const scrollLinks = document.querySelectorAll('.nav_link')

scrollLinks.forEach(link => {
    link.addEventListener("click", (event) =>{
        event.preventDefault();

        const targetId = link.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if(targetElement){
            window.scrollTo({
                top: targetElement.offsetTop - 130,
                behavior: 'smooth'
            });
        }
    })
})

// Кнопка вверх

const scrollTopBtn = document.querySelector('#scrollTop-btn')

scrollTopBtn.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scrollY > 150){
        document.getElementById('scrollTop-btn').style = 'display: block;'
    } else {
        document.getElementById('scrollTop-btn').style = 'display: none;'
    }
});

// Тёмная тема

let bodyEl = document.body;
let headerEl = document.getElementsByTagName('header')
let nav_linkEls = document.querySelectorAll('.nav_link')
let logoEl = document.querySelector('.logo')
let categoryEls = document.querySelectorAll('.category')
let products_itemEls = document.querySelectorAll('.products_item')
let footerEl = document.getElementsByTagName('footer')
let modalWindowEl = document.querySelector('.modalWindow')

// localStorage - чтобы не слетала тема при обновлении/после alert
if (localStorage.getItem("darkMode") === null) {
    localStorage.setItem("darkMode", "false")
  }

checkColorMode()

function checkColorMode(){
    if (localStorage.getItem("darkMode") == 'true'){
        bodyEl.classList.toggle('dark_mode');
        headerEl[0].classList.toggle('header_dark');
        nav_linkEls.forEach(link => link.classList.toggle('nav_link_dark'));
        logoEl.classList.toggle('logo_dark');
        categoryEls.forEach(link => link.classList.toggle('category_dark'));
        products_itemEls.forEach(link => link.classList.toggle('products_item_dark'));
        footerEl[0].classList.toggle('footer_dark');
        modalWindowEl.classList.toggle('modalWindow_dark')
    } else if (localStorage.getItem("darkMode") == 'false'){
        bodyEl.classList.remove('dark_mode');
        headerEl[0].classList.remove('header_dark');
        nav_linkEls.forEach(link => link.classList.remove('nav_link_dark'));
        logoEl.classList.remove('logo_dark');
        categoryEls.forEach(link => link.classList.remove('category_dark'));
        products_itemEls.forEach(link => link.classList.remove('products_item_dark'));
        footerEl[0].classList.remove('footer_dark');
        modalWindowEl.classList.remove('modalWindow_dark')
    }
}

function darkMode(){
    if (localStorage.getItem("darkMode") == 'false'){
        bodyEl.classList.toggle('dark_mode');
        headerEl[0].classList.toggle('header_dark');
        nav_linkEls.forEach(link => link.classList.toggle('nav_link_dark'));
        logoEl.classList.toggle('logo_dark');
        categoryEls.forEach(link => link.classList.toggle('category_dark'));
        products_itemEls.forEach(link => link.classList.toggle('products_item_dark'));
        footerEl[0].classList.toggle('footer_dark');
        modalWindowEl.classList.toggle('modalWindow_dark');
        localStorage.setItem("darkMode", "true")
    } else if (localStorage.getItem("darkMode") == 'true'){
        bodyEl.classList.remove('dark_mode');
        headerEl[0].classList.remove('header_dark');
        nav_linkEls.forEach(link => link.classList.remove('nav_link_dark'));
        logoEl.classList.remove('logo_dark');
        categoryEls.forEach(link => link.classList.remove('category_dark'));
        products_itemEls.forEach(link => link.classList.remove('products_item_dark'));
        footerEl[0].classList.remove('footer_dark');
        modalWindowEl.classList.remove('modalWindow_dark');
        localStorage.setItem("darkMode", "false")
    }
}

// Дата
let date = '07.06.2023'

let monthArray = 'Января,Февраля,Марта,Апреля,Мая,Июня,Июля,Августа,Сентября,Октября,Ноября,Декабря'.split(',')
let weekDayArray = 'Воскресенье,Понедельник,Вторник,Среда,Четверг,Пятница,Суббота'.split(',')

function getDayInfo(date){
    let parts = date.split('.');
    let mydate = new Date(parts[2], parts[1] - 1, parts[0]);
    let day = mydate.getDate();
    let month = monthArray[mydate.getMonth()];
    let weekDay = weekDayArray[mydate.getDay()];
    let year = mydate.getFullYear();

    let first = new Date(mydate.getFullYear(), 0, 1);
    let days = Math.floor((mydate - first) / (24 * 60 * 60 * 1000));
    let week = Math.ceil((mydate.getDay() + 1 + days) / 7);

    return `${weekDay}, ${week} неделя ${month} ${year} года`
}

let dateEl = document.querySelectorAll('.date')

dateEl.forEach(link => link.textContent =  'Добавлен: ' + getDayInfo(date))