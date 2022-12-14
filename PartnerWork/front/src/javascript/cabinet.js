const areaArr = ['Автосервіс',	'Архітектура, дизайн',	'Готельно-ресторанний бізнес',	'Державні організації',	'Консалтинг, аудит, бухгалтерія',	'IT',	'Маркетинг',	'Медицина та краса',	'Нерухомість',	'Некомерційні організації',	'Освіта, наука', 'Охорона, безпека', 'Пошук персоналу, HR',	'Промисловiсть', 'Роздрібна торгівля',	'ЗМІ, поліграфія',	'Сільське господарство',	'Будівництво',	'Телекомунікації',	'FMCG, продукти харчування',	'Транспорт, логістика',	'Туризм',	'Фармацевтика, аптеки',	'Фінанси',	'Cпорт', 'Шоу-бізнес',	'Енергетика',	'Юриспруденція'];
//Чекбокси для вибору партнерів
let elements = document.querySelectorAll('[type=checkbox]');
//вивід привітання і інформації з реєстрації
function addData() {
    let data = JSON.parse(localStorage.getItem("user"));
    document.querySelector('.cabinet__hello').innerText = `Привіт, ${data.firstname} ${data.lastname}!`;
    document.querySelector('.personal-data__area').innerText = `Сфера діяльності: ${data.area}`;
    document.querySelector('.personal-data__status').innerText = `Статус: ${data.status}!`;
}
addData()
//збереження обраних даних при ресеті сторінки кабінету
let checkedForSave = JSON.parse(localStorage.getItem("checked"));
if(localStorage.getItem("checked")) {
    let res = checkedForSave.filter(function(el){
        for(let i = 0; i < elements.length; i++) {
            if(elements[i].value === el) {
                elements[i].checked = true;
            }
        }
    })
}
if(checkedForSave) {
    saveDataUser()
}
//перевірка чекбоксу та отримання даних х сервера стосовно вибору
function saveDataUser(){       
    let checkedArr = [];
    for(let i = 0; i < elements.length; i++){  
        if(elements[i].checked) {
            checkedArr.push(elements[i].value);    
        }
    }
    if(checkedArr.length>0) {
        localStorage.setItem("checked", JSON.stringify(checkedArr));
        async function getUsers () {
            const response = await fetch('https://jsfundamental.herokuapp.com/api/users');
            const data = await response.json(); 
            let newArr = data.filter(function(elem) {
                for(let i = 0; i<checkedArr.length; i++) {
                    if(elem.area === checkedArr[i]) {
                        return true
                    }                
                }   
            })
            localStorage.setItem("recommendUsers", JSON.stringify(newArr));
            if(newArr.length > 0) {
                let recomendation__title = document.createElement('div');
                recomendation__title.classList.add('recomendation__title');
                recomendation__title.textContent = 'Відповідно до вашого вибору, рекомендуємо до співпраці наступні компанії.';
                let recomendation = document.querySelector('.recomendation');
                recomendation.innerHTML = ''
                recomendation.append(recomendation__title);
                let recomendation__cards = document.createElement('div');
                recomendation.append(recomendation__cards);
                document.querySelector('.arrows').style.display= 'block';
                
                for(let i = 0; i < newArr.length; i++) {
                    let recomendationCard = document.createElement('div');
                    recomendationCard.classList.add('recomendation-card');
                    recomendation__cards.append(recomendationCard);
                    recomendation__cards.classList.add('recomendation__cards');

                    let recomendationCard__company = document.createElement('div');
                    recomendationCard__company.classList.add('recomendation-card__company');
                    recomendationCard.append(recomendationCard__company);
                    recomendationCard__company.textContent = `Назва підприємтва: ${newArr[i].company}`;
                    
                    let recomendationCard__firstname = document.createElement('div');
                    recomendationCard__firstname.classList.add('recomendation-card__firstname');
                    recomendationCard.append(recomendationCard__firstname);
                    recomendationCard__firstname.textContent = `Представник: ${newArr[i].firstname}`;

                    let recomendationCard__area = document.createElement('div');
                    recomendationCard__area.classList.add('recomendation-card__area');
                    recomendationCard.append(recomendationCard__area);
                    recomendationCard__area.textContent = `Сфера діяльності: ${newArr[i].area}`;

                    let recomendationCard__button = document.createElement('button');
                    recomendationCard__button.classList.add('recomendation-card__button');
                    recomendationCard.append(recomendationCard__button);
                    recomendationCard__button.textContent = 'Відправити повідомлення';
                }
            } else {
                let recomendation__title = document.createElement('div');
                recomendation__title.classList.add('recomendation__title');
                recomendation__title.textContent = 'Таких користувачів не знайдено.';
                let recomendation = document.querySelector('.recomendation');
                recomendation.innerHTML = ''
                recomendation.append(recomendation__title);
                document.querySelector('.arrows').style.display= 'none';
            }
        }
        getUsers () 
    } else if(checkedArr.length == 0) {
        let recomendation__title = document.createElement('div');
        recomendation__title.classList.add('recomendation__title');
        recomendation__title.textContent = 'Оберіть хоча б одну галузь.';
        let recomendation = document.querySelector('.recomendation');
        recomendation.innerHTML = ''
        recomendation.append(recomendation__title);
        document.querySelector('.arrows').style.display= 'none';
    }
}
//функція запуску сворення даних за івентом(кліком по кнопці)
const choose = document.querySelector('.choose-block__button');
function buildYourCabinet() {
    choose.addEventListener('click', saveDataUser)}
buildYourCabinet()

//Слайдер з рекомендованими компаніями
function slider() {   
    const rightArrow = document.querySelector('.arrow-right');
    rightArrow.addEventListener('click', function(){
        let recCards = document.querySelector('.recomendation__cards');
        recCards.classList.remove('transitionleft');
        recCards.classList.add('transitionright');        
    })
    const leftArrow = document.querySelector('.arrow-left');
    leftArrow.addEventListener('click', function(){
        let recCards = document.querySelector('.recomendation__cards');
        recCards.classList.remove('transitionright');
        recCards.classList.add('transitionleft');
    })
}
slider()