let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');

menu.onclick = () => {
    navbar.classList.toggle('active')
    menu.classList.toggle('move')
}

// Typing Animation
var typed = new Typed(".ty",{
    strings:["","Sell.","Buy.","Repair.",],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
