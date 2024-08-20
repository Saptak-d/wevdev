let input = document.getElementById("input");
let btn = document.getElementById("btn");
let wrng = document.querySelector('.Wrng');
let gusses = document.getElementById("guesses");
let answer = Math.floor(Math.random()*100)+1;
console.log(answer);
let numGuesses = 0;
btn.addEventListener("click", ()=> {
    guessNumber();
})
function guessNumber(){
    if (input.value <1 || input.value >100 || isNaN(input.value))
        wrng.innerHTML = "Enter between 1 to 100";
    else {
        numGuesses++;
        gusses.innerHTML = "Number of Guesses :"+numGuesses;
        if(input.value > answer){
            wrng.innerHTML = "You Guessed too high!";
            input.value="";
        }
        else if(input.value < answer){
            wrng.innerHTML = "You Guessed too Low!";
            input.value="";
        }
        else{
            wrng.innerHTML = "Congratulation  you guessed the number";
        setTimeout(()=>{
            restart();
        },4000)
        
        }

    }
}
 function restart(){
    numGuesses = 0;
     answer = Math.floor(Math.random()*100)+1;
     console.log(answer);
     input.value = "";
    gusses.innerHTML = "Number of Guesses: 0";
   
 }