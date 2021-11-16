let selectElement = document.querySelector('.shape');
let result = document.querySelector('.result');

selectElement.addEventListener('change', (event) => {
    result.setAttribute('class', 'result '+event.target.value);
    console.log(event.target.value);
});


let submitColor = document.getElementById('button');
submitColor.addEventListener('click',  function () {
    let input = document.querySelector('input').value;
    result.setAttribute('style', 'background-color: '+input);
    console.log(input);
});


