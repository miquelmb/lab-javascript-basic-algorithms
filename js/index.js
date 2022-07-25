// Iteration 1: Names and Input
const hacker1 = "Miquel";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Waze";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if ((hacker2.length > hacker1.length)){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}


// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let newName = ""
for (let i = 0; i < hacker1.length; i++){
    newName += (hacker1[i]+" ");
}   
console.log(newName.toUpperCase());

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reverseName = ""
for (let i = 1; i <= hacker2.length; i++){
    reverseName += (hacker2[hacker2.length - i]);
}   
console.log(reverseName);

// 3.3 Depending on the lexicographic order of the strings, print:
for (let i = 0; i < hacker1.length +1; i++){
    //ASCII code of letter [i] in word 1 is lower than in word 2
    if (hacker1.charCodeAt(i) < hacker2.charCodeAt(i)){
        console.log("The driver's name goes first");
        break;
        //ASCII code of letter [i] in word 2 is lower than in word 1
    } else if (hacker2.charCodeAt(i) < hacker1.charCodeAt(i)){
        console.log("Yo, the navigator goes first definitely");
        break;
        //if the word is the same until one is shorter than the other. Shorter wins!
    } else if (isNaN(hacker1.charCodeAt(i)) && isNaN(hacker2.charCodeAt(i)) === false){
        console.log("The driver's name goes first");
        break;
        //same case as above but with word 2
    } else if (isNaN(hacker2.charCodeAt(i)) && isNaN(hacker1.charCodeAt(i)) === false){
        console.log("Yo, the navigator goes first definitely");
        break;
        //if all characters in word 1 & 2 are the same
    } else if (isNaN(hacker1.charCodeAt(i)) && isNaN(hacker2.charCodeAt(i))){
        console.log("What?! You both have the same name?");
        break;
        //go to the beginning of the loop but with the next character
    } else {
        continue;
    }
}

// Bonus 1:

// Generate 3 paragraphs. Store the text in a variable type of string.
let paragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent suscipit, sem nec pharetra pellentesque, tortor lacus bibendum leo, at ullamcorper nulla tellus et metus. Integer id dolor sed risus porttitor luctus. Etiam nec tellus massa. Vivamus ac quam dictum, convallis nulla ac, rhoncus quam. Ut lectus justo, interdum vitae ligula vitae, porta facilisis mi. Nulla odio felis, faucibus vel sapien at, venenatis varius erat. Ut sed turpis convallis, facilisis tellus nec, faucibus mauris. In malesuada, enim a rutrum condimentum, risus massa interdum ipsum, at sagittis nunc metus eu neque. Etiam ullamcorper mauris sagittis malesuada ornare. Curabitur dapibus tempus condimentum. Donec at mattis diam, eu aliquam orci. Vestibulum eleifend neque quis sem dictum laoreet. Ut commodo lorem sed justo rutrum vulputate. Morbi eleifend, elit id blandit sodales, erat ipsum consequat felis, et fermentum eros risus in felis. Sed nec libero quis odio vestibulum malesuada sit amet et dolor. Aenean at est vel sapien placerat laoreet id ut nisi. Quisque aliquet felis lectus, a tincidunt justo congue sit amet. Vivamus ligula ante, facilisis sed urna eget, rhoncus semper nunc. Donec laoreet arcu sed nibh molestie, quis placerat purus tempus. Ut ac vulputate turpis. Ut consequat euismod ligula, a ultricies leo. Sed eget imperdiet massa. Maecenas eget tincidunt nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis aliquam orci, at semper quam condimentum et. Sed in urna diam. Fusce sit amet leo eget quam aliquet commodo. Aenean ut accumsan dui. Nulla a arcu maximus, hendrerit urna vel, aliquet arcu. In hac habitasse platea dictumst.";
// Make your program count the number of words in the string.
var totalWords = 1;
for (let i = 0; i < paragraphs.length; i++){
    if (paragraphs[i] === " ") { 
      totalWords++;
  }
}
console.log(`The three paragraphs have ${totalWords} words`)

// // Make your program count the number of times the Latin word et appears.
var countingEts = 0;
for (let j = 0; j < paragraphs.length; j++){
    if ((paragraphs[j] === "e") && (paragraphs[j+1] === "t")){
        countingEts++;
    }
}
console.log(`The three paragraphs have ${countingEts} et's`)

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we
// assigned to this variable is a Palindrome.
// Here are some examples of palindromes:
//      "A man, a plan, a canal, Panama!"
//      "Amor, Roma"
//      "race car"
//      "stack cats"
//      "step on no pets"
//      "taco cat"
//      "put it up"
//      "Was it a car or a cat I saw?"
//      "No 'x' in Nixon".

//pasar frase a mayúsculas
let phraseToCheck = "Was it a car or a cat I saw?";
let upperCasePhrase = phraseToCheck.toUpperCase();

//hacer que cree un array con las letras por separado desde el principio al final

//variables para almacenar el nuevo array
let arrayNormal = []
let arrayReverse = []

//bucle for para crear array con carácteres de la frase, y evitar espacios o símbolos del tipo . , ! ?
for(let i = 0; i < upperCasePhrase.length; i++) {   
    if (upperCasePhrase.charCodeAt(i) >= 65 && upperCasePhrase.charCodeAt(i) <= 90){
        arrayNormal += upperCasePhrase[i];
    }
}
//bucle como el anterior pero para dar la vuelta al string
for (let i = upperCasePhrase.length; i >= 0; i--){
    if (upperCasePhrase.charCodeAt(i) >= 65 && upperCasePhrase.charCodeAt(i) <= 90){
        arrayReverse += upperCasePhrase[i];
    }
}

//comparar strings y hacer print del caso correcto, si es palíndromo o no.
if (arrayNormal === arrayReverse){
    console.log("This string is a palindrome")
} else {
    console.log("This string is not a palindrome")
}