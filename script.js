
let randomNumber = Math.floor(Math.random() * 20 + 1) 

const myGuess =  document.querySelector('#guess')

const start = document.querySelector('#start')

const level = document.querySelector('#level')

let trials = document.querySelector('#trials')

let gameOver = false;
console.log(randomNumber)


function genRan(){
    // Generating a random number

    console.log(randomNumber)       
}

 // CHECKING IF NUMBERS ARE EXACTLY THE SAME

 function checker(){ if (randomNumber == myGuess.value){
        level.value++
        document.querySelector('#report').textContent = 'correct !'
        trials.value = trials.max;
        randomNumber = Math.floor(Math.random() * 20 + 1)
        console.log(randomNumber)
}else{
    document.querySelector('#report').textContent = 'Incorrect !'
}}


 // adding an event listener to submit the input value (guess)
 const guessButton = document.querySelector('#submit') 
  
 guessButton.addEventListener('click', function (){

     console.log(myGuess.value)

   
        trials.value--

    if(document.querySelector('#trials').value == 0){
        gameOver = true;
        if(gameOver == true){
            document.querySelector('#report').textContent = 'Game Over !!!'
            guessButton.classList.add('invisible')
            level.value = 0;
        }
    }

    console.log(trials.value) 
 })

start.addEventListener('click', ()=>{
    gameOver = false
    document.querySelector('#trials').value = 10;
    guessButton.classList.remove('invisible')
    document.querySelector('#report').textContent = '';
})



