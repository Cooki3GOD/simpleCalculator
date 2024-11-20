// Consty
const display = document.querySelector('h1');
const integerBtns = document.querySelectorAll(".integer");
const operatorBtns = document.querySelectorAll(".operator");
console.log(display);
console.log(integerBtns);
console.log(operatorBtns);

// funckje

function toScreen() { // funckja dopsujaca liczby na ekran kalkualtora
    integerBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            if(display.innerText == 0) { // if zamieniajacy pierwsza liczbe 0 na kliknieta aby uniknac liczby np 0002
                display.innerText = event.target.innerText;
            }
            else {
                display.innerText += event.target.innerText;
            }
        })
    })
}

function reset() { // funckja czyszaca ekran kalkulatora
    operatorBtns[0].addEventListener("click", () => {
        display.innerText = 0;
    })
}

// Wywolania funkcji

toScreen();
reset();