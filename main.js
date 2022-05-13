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
(voteAge <= age) ? console.log('szavazhatsz!') : console.log('nem szavazhatsz!')

//Compound operator
let a = 11;
console.log(a += a);

//Ternary operator
let credit = 15;
console.log(credit *= credit > 28 ? 2 : 3)

//Összegző algoritmus
let numberArray = [1, 2, 3, 5, 8, 13, 21];
let storage = 0;

for (let i = 0; i < numberArray.length; i++) {
    storage += numberArray[i];
}

console.log("A tömb összege: " + storage);

//Számláló algoritmus
let numberTwoArray = [1, 2, 3, 5, 8, 12, 20];
let piece = 0;

for (let i = 0; i < numberTwoArray.length; i++) {
    /*if (numberTwoArray[i] % 2 == 0) {
        piece++
    }*/

    (numberTwoArray[i] % 2 == 0) ? piece++ : console.log()
}

console.log("A tömbben lévő páros számok darabszáma: " + piece);

//Szélsőérték algoritmusa
let numberThreeArray = [1, 2, 3, 150, 100, 11, 20];
let biggest = numberThreeArray[0];

for (let i = 0; i < numberThreeArray.length; i++) {
    if (numberThreeArray[i] > biggest) {
        biggest = numberThreeArray[i];
    }

    // ( numberThreeArray[i] > biggest) ? biggest = numberThreeArray[i] : console.log()
}

console.log("A tömbben lévő legnagyobb szám: " + biggest);

//Eldöntés algoritmusa
let numberFourArray = [1, 22, 5, 150, 51, 11, 20];
let contains = "hamis";

for (let i = 0; i < numberFourArray.length && contains == "hamis"; i++) {
    if (numberFourArray[i] == 5) {
        contains = "igaz";
    }
}

console.log("A tömbben megtalálható az 5: " + contains);

//OBJEKTUMOk
let user = {
    name: "John Doe",
    age: 22,
    city: "New York"
}

user = {
    name: "piri",
    age: 33,
    city: "Washington"
}

const userNew = {
    name: "John Doe",
    age: 22,
    city: "New York",
    writeInValue: function() {
        console.log(this.name);
    }
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

let number = [1, 2, 3, 5, 8, 12, 20];

for (let k in userNew) {
    console.log("kulcs: " + k + " érték: " + userNew[k]);
}

for (let k in number) {
    console.log(number[k]);
}

console.log("6. elem: " + number[5]);
console.log("User neve: " + userNew["name"] + " " + userNew.name + "Ez e user neve: ${user.name}");

const userFuck = { name: 'Jim', age: 33 }
console.log(`Hello, my name is ${userFuck.name} and I'm ${userFuck.age} age old.`);

const weather = {
    type: 'Rainy', 
    uv: 'low' 
};
for (const k in weather) {
    console.log(`a kulcs neve: ${k} és értéke: ${weather[k]}`);
}

for (const k of Object.keys(weather)) {
    console.log(k);
}

for (const k of Object.values(weather)) {
    console.log(k);
}

for (const k of Object.entries(weather)) {
    console.log(k);
}

userNew.name = "Józsi, bazd meg :)";
userNew.writeInValue();
console.log(userNew.name);

userNew.writeData = function() {
    console.log(`Ez e nevem: ${this.name} és ez a korom: ${this.age}`);
}

userNew.writeData();

//DOM
let tesztInputs = document.querySelectorAll("input[type='text']");

//input elem példány CSS formázása
Element.prototype.setBorder = function() {
    this.style.border = "1px solid red";
    this.style.fontWeight = "700";
    this.classList.add('manipulált');
};

for (let i=0; i<tesztInputs.length; i++) {
    tesztInputs[i].setBorder();
}

//HTML elem attribútum módosítása
function massModify(selector, attribute, value) {
    let nodeList = document.querySelectorAll(selector);
    for (let i = 0; i < nodeList.length; i++) {
        //nodeList[i][attribute] = value;  
        nodeList[i].setAttribute(attribute, value);  
    }
}

//massModify("input", "placeholder", "Ide kellene írni valamit");

//HTML elem létrehozása
let helpText = document.createElement("small");
helpText.className = "text-muted";
helpText.innerHTML = "Helyes adja meg az email címet!";

let parent = document.querySelector(".form-group:nth-child(2)");
parent.appendChild(helpText);

//Események
let buttonBtn = document.querySelector('.btn');
/*buttonBtn.onclick = function() {
    console.log("Ez egy klikk esemény!");
}*/

buttonBtn.addEventListener('click', function(){
    //myForm.reset();
});

//Űrlap elküldése
let myForm = document.querySelector('#myForm');

myForm.addEventListener("submit",function(ev){
    ev.preventDefault();
    console.log("Elküldve!");

    let inputs = this.querySelectorAll("input");
    let values= {};

    for (let i = 0; i < inputs.length; i++) {
        values[inputs[i].name] = inputs[i].value; 
    }
   
    console.log(values);
});