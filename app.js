let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".moves");
const uScore=document.querySelector("#user-score"); 
const cScore=document.querySelector("#comp-score"); 
const msg=document.querySelector("#msg");



const genComp=()=>{
    const options=["rock","Paper","Scissors"];
    const ranIndx = Math.floor(Math.random() * 3);
    return options[ranIndx];

}
const Draw=()=>{
    msg.innerText=`Oops! It's a Tie`;
    msg.style.backgroundColor="blue";

}
const checkScore=(userWin,userChoice,compChoice)=>{
    if(userWin===true){
        userScore++;
        uScore.innerText=userScore;
        msg.innerText=`You Won! Your ${userChoice} won over ${compChoice}`;
        msg.style.backgroundColor="green";


    }
    else{
        compScore++;
        cScore.innerText=compScore;
        msg.innerText=`You Lose! ${compChoice} won over your ${userChoice}`;
        msg.style.backgroundColor="red";

    }
    
}
const playGame=(userChoice)=>{
    console.log(userChoice);
    const compChoice = genComp();
    console.log(compChoice);

    if(userChoice === compChoice){
        Draw();

    }
    else{
        let userWin=true;
        if (userChoice === "rock"){
            // now computers choice can be either scissprs or paper
            if(compChoice==="Scissors"){
                userWin=true;

                
            }
            else{
                userWin=false;
            }

            
        }
        else if(userChoice === "paper"){
            // now computers choice can be either rock or scissors
            if(compChoice==="rock"){
                userWin=true;
            }
            else{
                userWin=false;
            }
           

        }
        else {

            if (userChoice === "Scissors"){
                // now computers choice can be either rock or paper
                if(compChoice==="rock"){
                    userWin=false;
                }
                else{
                    userWin=true;
                }
           

            }
            

 
        }
        checkScore(userWin,userChoice,compChoice);
    }




}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

        

    });

})   