const One = document.querySelector('.One');
const Two = document.querySelector('.Two');
window.addEventListener('scroll', function(){
    const value1 = -15 + window.scrollY/45;
    const value2 = 15 + window.scrollY/-45;
    One.style.transform = "skewY(" + value1 + "deg)";
    Two.style.transform = "skewY(" + value2 + "deg)";
})