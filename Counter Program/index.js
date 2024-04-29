
const increaseButton = document.getElementById("increase");
const resetButton = document = document.getElementById("reset");
const decreaseButton = document.getElementById("decrease");

let count = 0;

increaseButton.onclick = function(){
    count++;
    document.getElementById("display").textContent = count;
}

decreaseButton.onclick = function(){
    count--;
    document.getElementById("display").textContent = count;
}

resetButton.onclick = function(){
    count = 0;
    document.getElementById("display").textContent = count;
}



