const boxes = document.querySelectorAll('.box');
const res = document.querySelector('#res');
const msg = document.querySelector('.msg');
const m = document.querySelector('#m');
const nbtn = document.querySelector('#nbtn');

let turnO = false;
const wP = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnO) {
            box.innerText = 'O';
            box.style.color = '#42273B';
            turnO = false;
        } else {
            box.innerText = 'X';
            box.style.color = '#9EE493';
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of wP) {
        let [a, b, c] = pattern;
        if (
            boxes[a].innerText &&
            boxes[a].innerText === boxes[b].innerText &&
            boxes[a].innerText === boxes[c].innerText
        ) {
            showWinner(boxes[a].innerText);
            return;
        }
    }
};

const showWinner = (winner) => {
    m.innerText = `Congratulations, ${winner} is the winner!`;
    msg.classList.remove('hide');
    boxes.forEach(box => box.disabled = true);
};

const resetGame = () => {
    turnO = false;
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    msg.classList.add('hide');
};

res.addEventListener('click', resetGame);
nbtn.addEventListener('click', resetGame);
