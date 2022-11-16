//task1
// let newWindow = window.open( 'http://127.0.0.1:5500/stackoverflow','stackoverflow','width = 300, height = 300');

// setTimeout(function changeSize(){
//     newWindow.resizeTo(500, 500);     
// }, 2000);
// setTimeout(function moveWindow() {
//     newWindow.moveTo(200, 200);   
// }, 4000);
// setTimeout(function closeWindow(){
//     newWindow.close();
// }, 6000);

//task2
// let text = document.querySelector('#text');
// let btn = document.querySelector('#btn');

// function changeCSS() {
//     text.style.color = 'orange';
//     text.style.fontSize = '20px';
//     text.style.fontFamily = 'Comic Sans MS';
// }
// btn.addEventListener('click', function() {
//     changeCSS()
// });

//task3
// let blue = document.querySelector('#blue');
// let pink = document.querySelector('#pink');
// let brown = document.querySelector('#brown');
// let yellow = document.querySelector('#yellow');
// blue.addEventListener('click', function(){
//     document.body.style.backgroundColor = 'blue';
// });
// pink.addEventListener('dblclick', function(){
//     document.body.style.backgroundColor = 'pink';
// });

// brown.addEventListener('mousedown', function(){
//     document.body.style.backgroundColor = 'brown';  
// });
// brown.addEventListener('mouseup', function(){
//     document.body.style.backgroundColor = 'white';
   
// });
// yellow.addEventListener('mouseover', function(){
//     document.body.style.backgroundColor = 'yellow';
// });
// yellow.addEventListener('mouseout', function(){
//     document.body.style.backgroundColor = 'white';
// });

//task4
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function(){
//     let val = document.querySelector('#list').value;
//     if(val) {
//         document.querySelector(`option[value='${val}']`).remove()
//     }
// });

//task5
// let btn = document.querySelector('#btn');
// let text = document.querySelector('#text');
// btn.addEventListener('mouseover', function(){
//     text.insertAdjacentHTML('beforebegin','<p>Mouse on me!</p>');
// });
// btn.addEventListener('click', function(){
//     text.insertAdjacentHTML('beforeend','<p>I was pressed!</p>');
// });
// btn.addEventListener('mouseout', function(){
//     text.insertAdjacentHTML('beforeend','<p>Mouse is not on me!</p>');
// });

//task6 
// window.addEventListener('resize', function(){
//     document.querySelector('#result').innerHTML = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
// })

//task7
const citiesOption = {
    ukr: ['Kyiv', 'Lviv', 'Dnipro', 'Odessa'],
    usa: ['New-York', 'Washington', 'Boston', 'Chikago'],
    ger: ['Hamburg', 'Dresden', 'Dusseldorf', 'Berlin']
}

function createOptions(arr) {
    let cities = document.querySelector('#cities');
    cities.innerHTML = '';
    for(let i = 0; i < arr.length; i++){
        let opt = document.createElement('option');
        opt.innerHTML = arr[i];
        cities.append(opt);  
    }
}
const country = document.querySelector('#country');
createOptions(citiesOption[country.value])
country.addEventListener('change', function(event) {
    event.target.value
    createOptions(citiesOption[event.target.value]);
});

const cities = document.querySelector('#cities');
cities.addEventListener('change', function() {
    let valCountry = document.querySelector('#country').value;
    let valCity = document.querySelector('#cities').value
    let textCountry = document.querySelector(`option[value='${valCountry}']`).textContent;
    document.querySelector('p').append(`${textCountry}, ${valCity}`)
});
