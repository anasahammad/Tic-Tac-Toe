let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg-container");
let msg = document.getElementById("msg");
let newGameBtn = document.getElementById("new-btn");
let resetBtn = document.getElementById("reset-btn");


let turn0 = true;
let count = 0;
const winnerPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        if(turn0){
            box.innerText = "0";
            box.style.color = "#b0413e";
            turn0 = false;
        } else{
            box.innerText = "X";
            box.style.color = "green";
            turn0 = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            msg.innerText = `Game was Draw`;
            msgContainer.classList.remove("hide");
            disableBoxes();
        }
        
    })
})

const checkWinner = ()=>{
    for(let pattern of winnerPattern){
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1 === posVal2 && posVal2 === posVal3){
                msg.innerText = `Congratulations!, Winner is ${posVal1}`;
                msgContainer.classList.remove("hide");
                disableBoxes();
            }
        }
    }
}

const resetGame = () => {
    turn0 = 0;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const enableBoxes = ()=> {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);