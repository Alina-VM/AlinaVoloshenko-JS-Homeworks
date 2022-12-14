
//списки select для реєстрації
const typeProfileArr = ['Компанія', 'Експерт'];
const areaArr = ['Автосервіс',	'Архітектура, дизайн',	'Готельно-ресторанний бізнес',	'Державні організації',	'Консалтинг, аудит, бухгалтерія',	'IT',	'Маркетинг',	'Медицина та краса',	'Нерухомість',	'Некомерційні організації',	'Освіта, наука', 'Охорона, безпека', 'Пошук персоналу, HR',	'Промисловiсть', 'Роздрібна торгівля',	'ЗМІ, поліграфія',	'Сільське господарство',	'Будівництво',	'Телекомунікації',	'FMCG, продукти харчування',	'Транспорт, логістика',	'Туризм',	'Фармацевтика, аптеки',	'Фінанси',	'Cпорт', 'Шоу-бізнес',	'Енергетика',	'Юриспруденція'];
const statusArr = ['Шукаю партнера', 'Шукаю спонсора', 'Я спонсор', 'Я експерт'];
//об'єкт нового користувача
let newUser = {};
//елементи форми
const form = document.forms.register.elements;
//функція формування списків для select
function selectType(arr, selector) {
    const typeProfile = document.querySelector(selector);
    for(let i = 0; i< arr.length; i++) {
        let opt = document.createElement('option');
        opt.value = arr[i];
        opt.textContent = arr[i];
        typeProfile.append(opt);
    }
}
selectType(typeProfileArr, '#type-profile');
selectType(areaArr, '#area');
selectType(statusArr, '#status');
//функція 1 запису даних інпутів з реєстрації у об'єкт користувача
function saveUser() {    
    form.submit.addEventListener('click', function(){
            newUser.lastname = form.lastname.value;
            newUser.firstname = form.firstname.value;
            newUser.company = form.company.value;
            if (checkForm()) {
                sendUser(newUser)  
                resetForm() 
            };
    });
}
saveUser();
//функція 2 запису даних селектів з реєстрації у об'єкт користувача
function getSelectItem() {
    const selects = document.querySelectorAll('select');
    for(let i = 0; i<selects.length; i++) {
        selects[i].addEventListener('change', function(event){
            newUser[event.target.name] = event.target.value;
        });
    }    
}
getSelectItem()
//функція перевірки даних у формі
function checkForm() {
    let flag = true;
    for(let i = 0; i<form.length; i++) {
        if(form[i].value === "" || form[i].value === "оберіть") {
            form[i].classList.add('error');
            flag = false;
        } else {
            form[i].classList.remove('error');
        }
    }
    const regExp = /^([^@ \.])+\@\w+\.\w+([^@]$)/;
    if (regExp.test(form.email.value)) {
        newUser.email = form.email.value; 
        form.email.classList.remove('erroremail');   
    } else {
        form.email.classList.add('erroremail');
        form.email.nextElementSibling.textContent = 'Не правильний email';
        flag = false;
    }
    if (form.repeatpassword.value !== form.password.value) {
        form.repeatpassword.classList.add('erroremail');
        form.repeatpassword.nextElementSibling.textContent = 'Паролі не співпадають';
        flag = false;

    } else {
        newUser.password = form.password.value;
        form.repeatpassword.classList.remove('erroremail');
    }
    return flag
}
//функція очищення форми після вдалого сабміта
function resetForm() {
    document.getElementById('main_form').reset();
    document.getElementById('thanks').classList.remove('thanks');
    document.getElementById('thanks').classList.add('thanksreg');
    document.getElementById('main_form').classList.remove('main_form');
    document.getElementById('main_form').classList.add('form_registrationoff');

}
//функція відправки юзера на сервер
async function sendUser(newUser) {
    const response = await fetch('https://jsfundamental.herokuapp.com/api/users', {     
        method: 'POST',   
        headers: {
          'Content-Type': 'application/json'         
        },        
        body: JSON.stringify(newUser)
    });
    return await response.json();
}


