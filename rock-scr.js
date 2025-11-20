let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user_score= document.querySelector("#user-score");
const comp_score=document.querySelector("#comp-score");

const gencompChoice=()=>{
    let opptions=["rock","paper","scissor"];
   const randomIdx= Math.floor(Math.random()*3);
   return opptions[randomIdx];
};


const gamedraw=()=>{
    console.log("Game was draw");
    msg.innerText="Game Was Draw.Play Again!";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
       if(userWin){
        console.log("you win");
        msg.innerText=`You Win, Your ${userChoice} Beats To ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        user_score.innerText=userScore;
       }
       else{
        console.log("you lose");
        msg.innerText=`You Lose, ${compChoice} Beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        comp_score.innerText=compScore;
       }
}

const myGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    // genrate computer choice
   let compChoice= gencompChoice();
   console.log("comp choice=",compChoice);
   
   if(userChoice===compChoice){
    gamedraw();
   }else{
    let userWin=true;
    if(userChoice === "rock"){
        //paper,scissor
        userWin= compChoice ==="paper"? false: true;
    }
    else if(userChoice==="paper"){
        //rock,scissor
        userWin= compChoice ==="scissor"? false: true;
    }
    else{
        //rock,paper
        userWin= compChoice ==="rock"? false: true;
    }
    showWinner(userWin,userChoice,compChoice);
   }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
         const userChoice=choice.getAttribute("id");
        myGame(userChoice);

    })
});