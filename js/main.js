document.addEventListener('DOMContentLoaded', function() { 

let text = document.getElementsByClassName('status');

text = document.querySelector('body > h1');
text.innerText = "let's flip this switch";

let body = document.querySelector('body')

let lightSwitch = document.getElementsByClassName('switch on')[0];

lightSwitch.addEventListener('click', function() {
    alert('OH NO YOU FLIPPED THE SWITCH!');
    body.classList.add('dark');
});











});

