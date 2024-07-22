let timer = document.getElementById('timer');
const intervalTimer = setInterval(countDown, 500);
function countDown(){
  timer.textContent --;
 if (timer.textContent == -1)
 {alert ("Вы победили в конкурсе!")
 clearInterval(intervalTimer);
 timer.textContent = 0; }; 
}