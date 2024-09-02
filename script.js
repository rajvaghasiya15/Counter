const decrement = document.getElementsByClassName("decrement")[0];
const reset = document.getElementsByClassName("reset")[0];
const increment = document.getElementsByClassName("increment")[0];

const h1 = document.getElementsByClassName("number")[0];

let number = 0;

function decrementfn() {
    if(number>0)
        number--;
    h1.innerText = number
}
function resetfn() {
    number = 0;
    h1.innerText = number
}
function incrementfn() {
    number++;
    h1.innerText = number
}
// console.log(decrement)

decrement.addEventListener('click', decrementfn);
reset.addEventListener('click', resetfn);
increment.addEventListener('click', incrementfn);
