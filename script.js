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
    operatorBtns[0].addEventListener("click", () => {
        display.innerText = 0;
    })
}

function delDigit() { // Funckja usuwa ostania wpisana liczbe
    operatorBtns[1].addEventListener("click", (btn) => {
        if( display.textContent.length == 0 || display.textContent.length == 1) {
            return;
        }
        else {
            display.textContent  = display.textContent.slice(0, -1);
        }
    })
}
// Wywolania funkcji

toScreen();
reset();
delDigit(); 