const color = ["red","yellow","green","blue","grey","purple","voilet","#216873","#91fa87"];

const btnClicker = document.getElementById('btn')
const randomColor = document.querySelector('.color');

btnClicker.addEventListener('click',function(){
   const randomNumber = getRandomNumber();
   document.body.style.backgroundColor = color[randomNumber];
   randomColor.textContent = color[randomNumber];

})

function getRandomNumber(){
     return (Math.floor(Math.random() * color.length));
    }
