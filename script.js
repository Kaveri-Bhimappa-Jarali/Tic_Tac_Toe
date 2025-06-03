let boxes = document.querySelectorAll(".box");
let new_btn = document.querySelector("#new");
let reset = document.querySelector("#reset");
let msg = document.getElementById("msg");

const Winpattern = [
    [0,1,2], [0,4,8], [0,3,6], [1,5,7], [2,6,8], [3,4,5], [6,7,8], [2,4,6]
];

let turn = true;

const disableBoxes = () => {
    boxes.forEach(box => box.disabled = true);
};

const enableBoxes = () => {
    boxes.forEach(box => {
        box.disabled = false;
        box.innerHTML = "";
    });
};

const reset_Game = () => {
    turn = true;
    enableBoxes();
    msg.innerHTML = "";
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn) {
            box.innerText = "O";
            turn = false;
        } else {
            box.innerText = "X";
            turn = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of Winpattern) {
        let value1 = boxes[pattern[0]].innerText;
        let value2 = boxes[pattern[1]].innerText;
        let value3 = boxes[pattern[2]].innerText;

        if (value1 && value2 && value3 && value1 === value2 && value2 === value3) {
            disableBoxes();
            msg.innerHTML = `Congratulations, Winner is ${value1}`;
        }
    }
};

reset.addEventListener("click", reset_Game);