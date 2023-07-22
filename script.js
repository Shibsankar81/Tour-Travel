
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

let videoBtn = document.querySelectorAll('.vid-btn');


window.onscroll = () =>{
searchBtn.classList.remove('fa-times');
searchBar.classList.remove('active');

formBtn.classList.remove('fa-times');
loginForm.classList.remove('active');

menu.classList.remove('fa-times');
navbar.classList.remove('active');
}


searchBtn.addEventListener('click', () =>{
searchBtn.classList.toggle('fa-times');
searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
loginForm.classList.toggle('active');
});

formClose.addEventListener('click', () =>{
loginForm.classList.remove('active');
});

menu.addEventListener('click',() =>{
menu.classList.toggle('fa-times');
navbar.classList.toggle('active');
});

videoBtn.forEach(btn =>{
btn.addEventListener('click', ()=>{
    document.querySelector('.controls .active').classList.remove('active');
    btn.classList.add('active');
    let src = btn.getAttribute('data-src');
    document.querySelector('#video-slider').src = src;
});
});

//review-section
var swiper = new Swiper(".review-slider", {
spaceBetween: 20,
loop:true,
autoplay: {
delay: 2500,
disableOnInteraction: false,
},
breakpoints: {
640: {
  slidesPerView: 1,
},
768: {
  slidesPerView: 2,
},
1024: {
  slidesPerView: 3,
},
},
});

////brand section

var swiper = new Swiper(".brand-container-slider", {
 spaceBetween: 20,
 loop:true,
autoplay: {
 delay: 2500,
 disableOnInteraction: false,
        },
breakpoints: {
 450: {
   slidesPerView: 2,
     },
 768: {
   slidesPerView: 3,
 },
 991: {
   slidesPerView: 4,
 },
 1200: {
   slidesPerView: 5,
 },
},
});
///gallery section
let loadMoreBtn = document.querySelector('.gallery .load-more .btn1');
let currentItem = 3;
loadMoreBtn.onclick = () =>{
let boxes = [...document.querySelectorAll('.gallery .box-container .box')];
for (var i = currentItem; i < currentItem+3; i++){
boxes[i].style.display = 'inline-block';
};
currentItem += 3;
if(currentItem >= boxes.length){
loadMoreBtn.style.display = 'none';
}
}


///color change theme
document.querySelector('.home .color-switcher .switcher-btn').onclick = () =>{
document.querySelector('.home .color-switcher').classList.toggle('active');
};
let themeButtons = document.querySelectorAll('.theme-buttons');
themeButtons.forEach(color =>{
color.addEventListener('click', () =>{
let dataColor = color.getAttribute('data-color');
document.querySelector(':root').style.setProperty('--main-color',dataColor);

});
});

//dark mode theme
let themeToggler = document.querySelector('.theme-toggler');
themeToggler.onclick = () =>{
themeToggler.classList.toggle('active');

if(themeToggler.classList.contains('active')){
document.body.classList.add('active');
}else{
document.body.classList.remove('active');
}

}

//AOS

AOS.init({
duration: 900,
offset:150,
});




