let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn")
let msg=document.querySelector(".msg")
let msgContainer=document.querySelector(".msg-container")
let newGame=document.querySelector(".new-game")

let turn0=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if (turn0){
            box.innerHTML="O";
            turn0=false;
        }
        else{
            box.innerHTML="X";
            turn0=true;
        }
        box.disabled=true
        checkWinner();
    })
})
function resetGame(){
    for(box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
    turn0=true;
    msgContainer.classList.add("hide")
}

function disableBtn(){
    for(let box of boxes){
        box.disabled=true
    }
}
function showWinner(winner){
    msg.innerHTML=`Congratulations ....Player ${winner} has won`;
    msgContainer.classList.remove("hide");
    disableBtn();
}

function checkWinner(){
    for(let pattern of winPatterns){
        const a=boxes[pattern[0]].innerText;
        const b=boxes[pattern[1]].innerText;
        const c=boxes[pattern[2]].innerText;
        if(a!="" && b!="" && c!=""){
            if(a==b && b==c){
                console.log("Winner")
                showWinner(a);
                
            }
        }
    }
}

resetBtn.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame)