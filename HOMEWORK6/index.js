//task1
// function changeText() {
//     let elem = document.getElementById("test");
//     elem.innerHTML = "Second";
//     return elem
// }
// changeText()
// function changeText() {
//     let elem = document.getElementsByTagName("div");    
//     elem[0].innerHTML = "Second";
//     return elem
// }
// changeText()

//task 2 
// function changeImg() {
//     let elem = document.querySelector(".image");
//     elem.setAttribute("src", "img/cat.jpg");
//     alert(elem.getAttribute("src"));      
// }
// changeImg()

//task3
// function showParagraph() {
//     let arrElem = document.querySelectorAll("div p");
//     for(let i = 0; i< arrElem.length; i++) {
//         console.log("Selector text " + i + ": " + arrElem[i].innerText);
//     }
// }
// showParagraph()

// task 4
// function showElements(){
//     alert(document.querySelectorAll('li')[0].innerText);
//     alert(document.querySelectorAll('li')[4].innerText);
//     alert(document.querySelectorAll('li')[1].innerText);
//     alert(document.querySelectorAll('li')[3].innerText);
//     alert(document.querySelectorAll('li')[2].innerText);
// }
// showElements()

// function showElements(){
//     let elems = document.querySelector("#list").children;
//     alert(elems[0].innerText);
//     alert(elems[4].innerText);
//     alert(elems[1].innerText);
//     alert(elems[3].innerText);
//     alert(elems[2].innerText);  
// }
// showElements()

//task5
// function changeElements() {
//     document.getElementsByTagName("h1")[0].style.backgroundColor = "green";
//     document.getElementById("myDiv").firstElementChild.style.fontWeight = "bold";
//     document.getElementById("myDiv").children[1].style.color = "red";
//     document.getElementById("myDiv").children[2].style.textDecoration = "underline";
//     document.getElementById("myDiv").lastElementChild.style.fontStyle = "italic";
//     document.getElementById("myList").style.display = "flex";
//     document.getElementById("myList").style.listStyle = "none";
//     document.querySelector("span").style.display = "none";
// }
// changeElements()

//task6
// function getMessage() {
//     const inp1 = prompt();
//     const inp2 = prompt();
//     input1.setAttribute('value', inp1);
//     input2.setAttribute('value', inp2);
//     input1.value = inp2;
//     input2.value = inp1;    
// }
// getMessage()

//task7
function createPage() {
    const main = document.createElement('main');
    const div = document.createElement('div');
    const p = document.createElement('p');
    document.body.append(main);
    main.classList.add('mainClass', 'check', 'item');
    main.append(div);
    div.id = 'myDiv';
    div.append(p);
    p.innerHTML='First paragraph';
}
createPage();
