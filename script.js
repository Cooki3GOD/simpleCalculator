// Zmienne
const display = document.querySelector('h1');
const integerBtns = document.querySelectorAll(".integer");
const operatorBtns = document.querySelectorAll(".operator");
const resetBtn = document.querySelector(".reset");
const deleteBtn = document.querySelector(".delete");
const calcButn = document.querySelector(".calcualte");
let num1 = 0;
let num2 = 0;
let op;

// funckje

function toScreen() { // funckja dopsujaca liczby na ekran kalkualtora
    integerBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            if(display.innerText.length < 11) {
                if(display.innerText == 0) { // if zamieniajacy pierwsza liczbe 0 na kliknieta aby uniknac liczby np 0002
                    display.innerText = event.target.innerText;
                    let lastDigit = event.target.innerText;
                }
                else {
                    display.innerText += event.target.innerText;
                }
            }
            else {
                alert("Za dużo znaków!");
            }
        })
    })
}

function reset() { // funckja czyszaca ekran kalkulatora
    resetBtn.addEventListener("click", () => {
        display.innerText = 0;
    })
}

function delDigit() { // Funckja usuwa ostania wpisana liczbe
    deleteBtn.addEventListener("click", (btn) => {
        if( display.textContent.length == 0 || display.textContent.length == 1) {
            return;
        }
        else {
            display.textContent  = display.textContent.slice(0, -1);
        }
    })
}

function operator() {
   operatorBtns.forEach((btn) => {
     btn.addEventListener("click", () => {
        op = event.target.innerText;
        console.log(op);
})
})
}
// Wywolania funkcji

toScreen();
reset();
delDigit(); 