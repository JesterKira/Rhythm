const body = document.querySelector("body");
const burgerMenu = document.querySelector(".burger");
const navigation = document.querySelector(".navigation");

burgerMenu.addEventListener("click", function() {
    burgerMenu.classList.toggle('active');
    navigation.classList.toggle('active');
    body.classList.toggle('lock');
})