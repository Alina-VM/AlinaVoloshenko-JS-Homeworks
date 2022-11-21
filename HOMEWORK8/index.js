//task 1
// function upperCase(str) {
//     let regExp = /[A-Z]/;
//     console.log(regExp.test(str[0]) ? 'Strings starts with uppercase character' : 'Strings not starts with uppercase character');    
// }
// upperCase('regexp');
// upperCase('RegExp');

//task 2
// function checkEmail(str) {
//     let regExp = /^([^@ \.])+\@\w+\.\w+([^@]$)/;
//     console.log(regExp.test(str) ? true : false);
// }
// checkEmail("Qmail2@gmail.com");

//task 3
// function bdSearch(str) {    
//     let regExp = /d{1,1}(b+)(d{1,1})/i;
//     console.log(str.match(regExp));    
// }
// bdSearch('cdbBdbsbz')

//task 4
// console.log("Java Script".replace(/(\w+)\s(\w+)/, '$2, $1'));

//task 5
// function cardValidation(str) {
//     let regExp = /\d{4,4}[\- ]?\d{4,4}[\- ]?\d{4,4}[\- ]?\d{4,4}$/;
//     console.log(regExp.test(str));
// }
// cardValidation('9999-9999-9999-9999');

//task 6
// function checkEmail(str) {
//     let regExp = /^[^\_\W]\w*\-?\@{1,1}\w*\-?\.\w*\-?/g;
//     console.log(regExp.test(str) ? 'Email is correct!' : 'Email is not correct!');
// }
// checkEmail('my_mail@gmail.com');
// checkEmail('#my_mail@gmail.com');
// checkEmail('my_ma--il@gmail.com');

//task 7
function checkLogin(str) {
let regExp = /^(?=^.{2,10}$)[a-zA-Z]+[\w (\d\.\d)]+$/g;
let regExp2 = /(\d\.\d)|(\d)/g;
    console.log(regExp.test(str));
    console.log(str.match(regExp2));
}
checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');
