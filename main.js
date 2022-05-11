
//Ternary operator
let age = 9;
let voteAge = 18;

//Hosszabban
/*if (voteAge <= age) {
    console.log('szavazhatsz!')
} else (
    console.log('nem szavazhatsz!')
)*/

//Rövidebben
(voteAge <= age) ? console.log('szavazhatsz!'): console.log('nem szavazhatsz!') 

//Compound operator
let a = 11;
console.log(a += a);

//Ternary operator
let credit = 15;
console.log(credit *= credit > 28 ? 2 : 3)

//Összegző algoritmus
let numberArray = [1,2,3,5,8,13,21];
let storage = 0;

for (let i= 0; i < numberArray.length; i++) {
    storage += numberArray[i];
}

console.log("A tömb összege: " + storage);

//Számláló algoritmus
let numberTwoArray = [1,2,3,5,8,12,20];
let piece = 0;

for (let i=0; i < numberTwoArray.length; i++) {
    /*if (numberTwoArray[i] % 2 == 0) {
        piece++
    }*/
    
    ( numberTwoArray[i] % 2 == 0) ? piece++ : console.log()
}

console.log("A tömbben lévő páros számok darabszáma: " + piece);

//Szélsőérték algoritmusa
let numberThreeArray = [1,2,3,150,100,11,20];
let biggest = numberThreeArray[0];

for (let i = 0; i < numberThreeArray.length; i++) {
   if (numberThreeArray[i] > biggest) {
        biggest = numberThreeArray[i];
   }
   
   // ( numberThreeArray[i] > biggest) ? biggest = numberThreeArray[i] : console.log()
}

console.log("A tömbben lévő legnagyobb szám: " + biggest);

//Eldöntés algoritmusa
let numberFourArray = [1,22,5,150,51,11,20];
let contains = "hamis";

for (let i = 0; i < numberFourArray.length && contains == "hamis"; i++) {
    if (numberFourArray[i] == 5) {
        contains = "igaz";
    }
}

console.log("A tömbben megtalálható az 5: " + contains); 

//OBJEKTUMOk
let user = {
    name : "John Doe",
    age: 22,
    city: "New York"
}

user = {
    name : "piri",
    age: 33,
    city: "Washington"
}

const userNew = {
    name : "John Doe",
    age: 22,
    city: "New York"
}

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(Object.keys(user).length);
//console.log(user.name = "Pista");
console.log(user);
console.log(userNew.name);
console.log(userNew.name = "Béla báá");
console.log(userNew);


let number = [1,2,3,5,8,12,20];

for (let k in number) {
    console.log("kulcs: " + k + " érték: " + number[k]);
}