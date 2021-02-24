
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

toggle.addEventListener('click', function(){
    links.classList.toggle('links-show')
})