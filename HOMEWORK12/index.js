//task1 
// function changeButton() {
//     let button = document.querySelector('.button');
//     button.addEventListener('click', async function(){
//         const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         const data = await res.json();
//         if(data) {
//             let date = new Date;
//             button.textContent =`Your vote is accepted: ${date}`;
//             }
//     })    
// }
// changeButton()

//task2 

let button = document.querySelector('.button2');
let list = document.querySelector('.list');
button.addEventListener('click', async function() {
    const res = await fetch('http://127.0.0.1:5500/books.json');
    const data = await res.json();
        console.log(data);
    for (let value of Object.values(data[0])) {
        let item = document.createElement('li');
        item.textContent = value;

        list.append(item);
    }
})
