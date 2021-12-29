var quant = document.querySelectorAll(".Quant");
var prices = document.querySelectorAll(".price");
var likes = document.querySelectorAll(".fa");
// console.log(quant);
// console.log(prices);
// console.log(likes);

for (let i = 0; i < likes.length; i++) {
    likes[i].addEventListener("click", function () {
        if (likes[i].style.color === "rgb(226, 192, 209)") {
            likes[i].style.color = "rgb(255, 0, 0)";
        } else {
            likes[i].style.color = "rgb(226, 192, 209)";
        }
    });
}
// plus buttons
var plusBtns = document.querySelectorAll(".plus-btn");
console.log(plusBtns);

for (let i = 0; i < plusBtns.length; i++) {
    plusBtns[i].addEventListener("click", function () {
        quant[i].value++;
        totalPrice();
    });
}

//minus buttons
var minusBtns = document.querySelectorAll(".minus-btn");
for (let i = 0; i < minusBtns.length; i++) {
    minusBtns[i].addEventListener("click", function () {
        if (quant[i].value > 1) {
            quant[i].value--;
            totalPrice();
        }
    });
}
var deleteBtns = document.querySelectorAll(".delete");
for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", function () {
        deleteBtns[i].parentNode.remove();
        totalPrice();
    });
}

function totalPrice() {
    var sum = 0;
    for (let i = 0; i < prices.length; i++) {
        sum += prices[i].innerHTML * quant[i].value;
    }
    document.getElementById("finalPrice").value = sum;
}
