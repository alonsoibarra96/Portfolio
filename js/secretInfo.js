// Variables
const button = document.getElementById('button');
const secret = document.getElementById('secret');

button.onclick = function() {
    secret.style.display = 'block';
    button.style.display = 'none';
}