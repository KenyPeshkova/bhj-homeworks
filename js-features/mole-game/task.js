let deadMole = document.getElementById('dead');
let lostMole = document.getElementById('lost');
let counterDead = 0;
let counterLost = 0;

let holes = document.getElementsByClassName('hole');

for (let i = 0; i < holes.length; i++){
    holes[i].addEventListener('click', function(){
       if (holes[i].className.includes('hole_has-mole'))
       {
        counterDead++;
        deadMole.textContent = counterDead;
       } else {
        counterLost++;
        lostMole.textContent = counterLost;
       }

       if (counterDead == 10){
            alert('Победа!');
            counterDead = 0;
            counterLost = 0;
            deadMole.textContent = counterDead;
            lostMole.textContent = counterLost;
        }
       if (counterLost == 5){
            alert('Вы проиграли!');
            counterDead = 0;
            counterLost = 0;
            deadMole.textContent = counterDead;
            lostMole.textContent = counterLost;
        }

    });
}