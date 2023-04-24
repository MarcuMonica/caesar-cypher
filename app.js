const containerElement = document.querySelector('.container');




for (let i = 0; i <= 15; i++) {
    const rowElement = document.createElement('div');
    rowElement.classList.add('row');
    containerElement.append(rowElement);

    console.log(rowElement)

    for (let i = 0; i <= 15; i++) {
        const hexagonElement = document.createElement('div');
        hexagonElement.classList.add('hexagon');

        rowElement.appendChild(hexagonElement)
    }
}

function strChallenge(str, num) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let charCode = str[i].charCodeAt();

        if (charCode > 96 && charCode < 123) {
            charCode += num % 26;

            if (charCode > 122) {
                charCode = (charCode - 122) + 96
            } else if (charCode < 97) {
                charCode = (charCode - 97) + 123;
            }
        }

        if (charCode > 64 && charCode < 91) {
            charCode += num % 26;

            if (charCode > 90) {
                charCode = (charCode - 90) + 64;
            } else if (charCode < 65) {
                charCode = (charCode - 65) + 91;
            }
        }
        result += String.fromCharCode(charCode);

    }

    return result;
}

function finalData() {
    mainResult.innerHTML = strChallenge(inputText, inputNumber)
}

const mainResult = document.querySelector('#main-result');
let inputText = '';
let inputNumber = 0;

const textInput = document.querySelector('#text');
textInput.addEventListener('keyup', (e) => {
    inputText = e.target.value;
    finalData();
})

const numberInput = document.querySelector('#number');
numberInput.addEventListener('keyup', (e) => {
    inputNumber = e.target.value;
    finalData();
})



