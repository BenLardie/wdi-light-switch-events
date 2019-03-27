document.addEventListener('DOMContentLoaded', function() { 

let text = document.getElementsByClassName('status');

text = document.querySelector('body > h1');


let body = document.querySelector('body')

let lightSwitch = document.getElementsByClassName('switch on')[0];

lightSwitch.addEventListener('click', function() {
    body.classList.toggle('dark');
    lightSwitch.classList.toggle('off');
    if (text.innerText == "It's so bright in here!") {
        text.innerText = 'Who turned off the lights';
    } else {
        text.innerText = "It's so bright in here!"
    }
});











});

