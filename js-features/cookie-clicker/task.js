let cookie = document.getElementById('cookie');
let countCook = document.getElementById('clicker__counter');
let number = 0;

cookie.addEventListener('click',function() {
    number++;
    countCook.innerHTML = number;
    if(cookie.style.width == "150px"){
        cookie.style.width ="200px"; }
        else {cookie.style.width = "150px";}
    
});