"use strict";

/*Built-in Objects - hvad er det?
Det giver en række funktioner og værktøjer, som kan bruges til at udføre forskellige opgaver uden at skrive koden fra bunden.
Det giver forskellige metoder til at udføre matematiske operationer som addition, subtraktion, runde tal af, generere tilfældige tal, osv.
*/

/*
Indbyggede objekter kan være:
Math - bruges til matematiske beregninger.
Date - Til arbejde med datoer og tid.
String - Indeholder metoder til at manipulere tekststrenge.
Array - Indeholder metoder til at arbejde med lister af data.
Object - En grundlæggende konstruktion i JavaScript, hvorfra alle andre objekter nedarver egenskaber og metoder.
*/




let randomNumber = Math.random();
console.log (randomNumber);

alert(`your random number is ${randomNumber}`);
//Her vil man ikke få et heltal, man får fx istedet for 0.08407717128887193 

//for at få generere et tilfældigt heltal inden for et bestemt interval fx mellem 1 og 10, skal man bruge Math.random() sammen med andre Math -metoder:

let randomNumberAgain = Math.floor(Math.random()*10)+1;

console.log(randomNumberAgain)
alert(`your random number is ${randomNumberAgain}`);

//her vil man fx få svaret 5. 


//Hvis man gerne vil genererer et tal under nul, fx fra -10 til 0, skal koden være:

let randomNumberUnderZero = Math.floor(Math.random()*10)-10;

console.log(randomNumberUnderZero)
alert(`your random number is ${randomNumberUnderZero}`);

//her vil man fx få svaret -4.


//Date-objektet til Dato- og Tidsstyring

let nu = new Date();
console.log(nu);  // Udskriver den aktuelle dato og tid

let år = nu.getFullYear();       // F.eks. 2024
let måned = nu.getMonth() + 1;   // F.eks. 9 (Måneder går fra 0 til 11, derfor +1)
let dag = nu.getDate();          // F.eks. 3

console.log(år, måned, dag);
alert(`Det nuværende år er ${år}. Vi er i den ${måned} måned og det er den ${dag} september.`)


/*
Date: Dette objekt bruges til at arbejde med datoer og tidspunkter.
getFullYear(): Henter det aktuelle år.
getMonth(): Henter den aktuelle måned (0-baseret, så januar er 0).
getDate(): Henter den aktuelle dag i måneden.

*/


//Tilføje og fjernelse af elementer

let frugter = ["æble", "banan", "pære"];
frugter.push("appelsin");  // Tilføjer "appelsin" til slutningen af listen
let sidste = frugter.pop();  // Fjerner det sidste element ("appelsin") fra listen

console.log(frugter);  // ["æble", "banan", "pære"]
console.log("Sidste frugt: ", sidste);  // "appelsin"

/*push(): Tilføjer et nyt element til slutningen af et array.
pop(): Fjerner det sidste element fra et array og returnerer det. */
