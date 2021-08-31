// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// const bici = [
//     {nome: 'Prima bicicletta', peso: 6.5},
//     {nome: 'Seconda bicicletta', peso: 7},
//     {nome: 'Terza bicicletta', peso: 5.5},
//     {nome: 'Quarta bicicletta', peso: 6},
//     {nome: 'Quinta bicicletta', peso: 7.5}
// ];

// let tmp = bici[0];

// for (let i = 1; i < bici.length; i++) {
//     if(bici[i].peso < tmp.peso)
//     tmp = bici[i];
// }

// const {nome, peso} = tmp;
// console.log(
//     `
//     Nome: ${nome}; Peso: ${peso} kg
//     `
//     );

// BONUS: inserire una arrow function che preso in input l'array di bici ritorni l'oggetto con bici più leggera

let myFunction = () => {
    let bici = [
        {
            nome : prompt('Inserisci il nome della bici num.1'),
            peso : parseInt(prompt('Inserisci il peso della bici num.1'))
        },
        {
            nome : prompt('Inserisci il nome della bici num.2'),
            peso : parseInt(prompt('Inserisci il peso della bici num.2'))
        },
        {
            nome : prompt('Inserisci il nome della bici num.3'),
            peso : parseInt(prompt('Inserisci il peso della bici num.3'))
        }
    ]
    let tmp = bici[0];

    for (let i = 1; i < bici.length; i++) {
        if(bici[i].peso < tmp.peso)
        tmp = bici[i];
    }
    return tmp;
}

console.log(myFunction())