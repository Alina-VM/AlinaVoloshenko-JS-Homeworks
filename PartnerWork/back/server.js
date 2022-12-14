const fs = require('fs');
const express = require("express");

const app = express();
const cors = require('cors')
cors({credentials: true, origin: true})
app.use(cors())
const jsonParser = express.json();
const filePath = 'data.json';

app.get("/api/users", function(req, res){       
    const content = fs.readFileSync(filePath,"utf8");
    const users = JSON.parse(content);
    res.send(users);
});
app.post("/api/users", jsonParser, function(req, res){    
    const newUser = req.body   
    fs.readFile('data.json', (err, data) => { 
        if (err) {
            throw err; 
        }   
        const newData = JSON.parse(data);     
        newData.push(newUser);  
        fs.writeFile('data.json', JSON.stringify(newData), (err) => { 
            if (err) throw err; 
            res.send('ok');
        });  
    });    
});

app.post("/api/users/login", jsonParser, function(req, res) {
    const user = req.body;
    fs.readFile('data.json', (err, data) => { 
        if (err) {
            throw err; 
        }   
        const newData = JSON.parse(data);
        const userExist =  newData.find(function(elem){
            return elem.email === user.email && elem.password === user.password
        });    
        if(userExist) {
            userExist.password = false;
            res.send(userExist)
        } else {
            res.send({text: 'Такого користувача не існує'})
        }
    });   
})

app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});
