
function helloUser (name, response) {
    let date  = new Date();
    let currDate = date.toString();
    let message = '';
    let actualHours = (date.getHours());
    if(actualHours >= 18 && actualHours <24) {
        message = 'Good evening';
    } else if (actualHours >= 24 && actualHours < 08) {
        message = 'Good night';
    } else if (actualHours >= 08 && actualHours < 18) {
        message = 'Good day';
    }
    let res = response.write(`Date of request: ${currDate} <br> ${message}, ${name}`);
    return res;
}
exports.helloUser = helloUser;