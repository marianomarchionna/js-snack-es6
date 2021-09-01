// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const squadre = [
    {nome: 'Juventus', punti: 0, falli: 0},
    {nome: 'Inter', punti: 0, falli: 0},
    {nome: 'Milan', punti: 0, falli: 0},
    {nome: 'Roma', punti: 0, falli: 0},
    {nome: 'Napoli', punti: 0, falli: 0},
    {nome: 'Atalanta', punti: 0, falli: 0},
    {nome: 'Lazio', punti: 0, falli: 0}
]

for(let i = 0; i < squadre.length; i++){
    squadre[i].punti = randomNumber(0, 99);
    squadre[i].falli = randomNumber(0, 150);
}

console.log(squadre);

const squadreNuove = [];

for (let i = 0; i < squadre.length; i++) {
    const {nome, falli} = squadre[i];
    squadreNuove.push({nome, falli});
}

console.log(squadreNuove);