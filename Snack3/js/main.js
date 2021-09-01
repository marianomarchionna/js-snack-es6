// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.
const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let lunghezzaArray = parseInt(prompt('Inserire lunghezza array'));
let myArray = [], a, b;

for(let i = 0; i < lunghezzaArray; i++){
    myArray[i] = randomNumber(1, 50);
}

console.log(myArray);

do{
    a = parseInt(prompt('Inserisci il primo numero'));
}while(isNaN(a));
console.log('Primo numero: ' + a);

do{
    b = parseInt(prompt('Inserisci il secondo numero(maggiore del primo)'));
}while(isNaN(b) || a > b);
console.log('Secondo numero: ' + b);

function myFunction(array, a, b){
    return array.filter((element, index) => {
        return a < index && b > index
    });
}

let newArray = myFunction(myArray, a, b);
console.log(newArray);