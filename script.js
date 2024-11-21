// Zmienne
const display = document.querySelector('h1');
const integerBtns = document.querySelectorAll(".integer");
const operatorBtns = document.querySelectorAll(".operator");
const resetBtn = document.querySelector(".reset");
const deleteBtn = document.querySelector(".delete");
const calcButn = document.querySelector(".calculate");
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
        num1 = 0;
        num2 = 0;
        op = 0;
        score = 0;
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

function operator() { // funkcja przypisujace wartosci do zmiennej operator
   operatorBtns.forEach((btn) => {
     btn.addEventListener("click", () => {
        op = event.target.innerText;
        console.log(op);
        num1 = parseFloat(display.innerText);
        display.innerText = num2;
    })
})
}

function calculate() { // funckja obliczajaca wynik
    let score = 0;
    calcButn.addEventListener("click", () => {
        num2 = parseFloat(display.innerText);
        switch (op) {
            case "+":
                score = num1 + num2;
                display.innerText = score;
                break;
            case "%":
                score = num1 % num2;
                display.innerText = score;
                break;
                case "-":
                    score = num1 - num2;
                    display.innerText = score;
                    break;
                case "X":
                    score = num1 * num2;
                    display.innerText = score;
                    break;  
                case "/":
                    score = num1 / num2;
                    display.innerText = score;
                    break;                           
            default:
                break;
        }
     })
}



// Wywolania funkcji

toScreen();
reset();
delDigit(); 
operator();
calculate();