const ABOUT = document.querySelector(".about_btn");
const GAME  = document.querySelector(".game_btn");
const CONTACT = document.querySelector(".contact_btn");

const LINKS = document.querySelector(".links");

ABOUT.addEventListener("click",(e)=>{
    let about = document.querySelector(".about");
    about.scrollIntoView({behavior:'smooth'});
    e.preventDefault();
});

GAME.addEventListener("click",(e)=>{
    let game = document.querySelector(".game");
    game.scrollIntoView({behavior:'smooth'});
    e.preventDefault();
});



CONTACT.addEventListener("click",(e)=>{
    let contact = document.querySelector(".contact");
    contact.scrollIntoView({behavior:'smooth'});
    e.preventDefault();
});


LINKS.addEventListener("click",(e)=>{
    e.preventDefault();
});