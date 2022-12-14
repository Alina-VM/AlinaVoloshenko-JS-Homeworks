let user = {};
const form = document.forms.login.elements;
form.submit.addEventListener('click', async function(){
    user.email = form.email.value;
    user.password = form.password.value;
    let response = await fetch('https://jsfundamental.herokuapp.com/api/users/login', {
    method: 'POST',   
    headers: {
        'Content-Type': 'application/json'         
    },  
    body: JSON.stringify(user)
    })
    response = await response.json();
    if(response.text) {
        let noUser = document.querySelector('.nouseroff');
        noUser.classList.add('nouser');
    } else {
        localStorage.removeItem("checked");
        localStorage.setItem("user", JSON.stringify(response))
        location.href = '/cabinet.html'
        
    }   
})



