let user = {};
const form = document.forms.login.elements;
form.submit.addEventListener('click', async function(){
    user.email = form.email.value;
    user.password = form.password.value;
    console.log(user);
    let response = await fetch('http://localhost:3000/api/users/login', {
    method: 'POST',   
    headers: {
        'Content-Type': 'application/json'         
    },  
    body: JSON.stringify(user)
    })
    response = await response.json();
    if(response.text) {
        console.log('no user')
    } else {
        localStorage.setItem("user", JSON.stringify(response))
        location.href = '/cabinet.html'
    }
    console.log(JSON.parse(localStorage.getItem("user")))
    
})



