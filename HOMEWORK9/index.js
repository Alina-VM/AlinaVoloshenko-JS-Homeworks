//task 1
// $('a[href^="https://"]').attr('target', '_blank');

//task2
// function changeH2() {
//     const h2head = $('h2.head');
//     h2head.css('background', 'green');
//     h2head.find('.inner').css('fontSize', '35px');
// }
// changeH2()

//task3
// function replaceDiv() {
//     const divs = $('h3+div');
//     const h3s = $('h3');
//     for (let i = 0; i < divs.length; i++) {
//         h3s[i].before(divs[i]);
//     }
// }
// replaceDiv()

//task 4
function disableCheckbox() {
    $('[type="checkbox"]').on('change', function(){
            if ($('[type=checkbox]:checked').length >=3) {
                    $('[type="checkbox"]').attr("disabled", true);
                }
    });    
};
disableCheckbox();
