hamburger = document.querySelector('.menu');
navbar = document.querySelector('.links');
navbar_atags = document.querySelectorAll('.links > ul a');
sign_up = document.querySelector('.sign-up-btn');

hamburger.addEventListener("click", function(){
    navbar.classList.toggle('links');
    sign_up.classList.toggle('sign-up-btn');
    navbar_atags.forEach(element => {
        element.classList.toggle('link');
    });
    navbar.classList.toggle('mob-nav');
});