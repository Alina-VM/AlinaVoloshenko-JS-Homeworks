//task1
const os = require('os');
const path = require('path');
const http = require('http');
import neatCsv from 'neat-csv';
const fs = require('fs');
const ObjectsToCsv = require('objects-to-csv');
// http.createServer( function(req, response) {
//     response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
//     response.write(`<h1>System information</h1>
//                     Current user name: ${os.userInfo().username} <br>
//                     OS type: ${os.type()} <br>
//                     System work time:  ${os.uptime()} <br>
//                     Current work directory:  ${path.dirname('C:/Users/Админ/Desktop/softserve/AlinaVoloshenko-JS-Homeworks/HOMEWORK11/index.js')}<br>
//                     Server file name: ${path.basename('C:/Users/Админ/Desktop/softserve/AlinaVoloshenko-JS-Homeworks/HOMEWORK11/index.js')} <br>
//                     `, 'utf8');
//     response.end();
// }).listen(5000);
// console.log('Server running at http://127.0.0.1:5000/');

//task2
const personalmodule = require('./personalmodule');
http.createServer( function(req, response) {
    response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    personalmodule.helloUser(os.userInfo().username, response);
    response.end();
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');
