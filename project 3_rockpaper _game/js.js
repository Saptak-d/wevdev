 let userScore = 0;
 let comScore = 0;


 const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");
 const userScorePara =  document.querySelector("#user_score");
 const comScorepara =  document.querySelector("#computer_score");
 const genCompChoice = () => {
    //rock,paper,scissors
    const option = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return option[randomIdx];
 }
 const drawGame = () => {
    msg.innerText = "Draw";
    msg.style.backgroundColor = "#081b31";
 }
 const showWinner = (userWine, userChoice, comChoice ) => {
  if(userWine){
     userScore++;
     userScorePara.innerText = userScore;
      msg.innerText = `You Wine! your ${userChoice} beats ${comChoice}`;
      msg.style.backgroundColor = "green";
    }
  else{
  comScore++;
  comScorepara.innerText = comScore;
  msg.innerText = `You Lost: ${comChoice} beats your ${userChoice} `;
   msg.style.backgroundColor = "red";}
 }
 const playGame = (userChoice) => {
    console.log("user choice =",userChoice)
    //genarate a computer choice
    const comChoice = genCompChoice();
    console.log("computer  choice =",comChoice)
    if(userChoice === comChoice){
      //draw game  
      drawGame();
    }
    else {
      let  userWine = true;
      if(userChoice === "rock"){
        userWine = comChoice === "paper" ? false :true ;
      }
      else if(userChoice === "paper"){
        userWine = comChoice === "scissors" ? false :true ;
      }
      //comchoice = scissors
      else{
        userWine = comChoice === "rock" ? false :true ;
      }
      showWinner(userWine, userChoice, comChoice);

    }

 }
choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id")

       playGame(userChoice);
    }
  )
    
})