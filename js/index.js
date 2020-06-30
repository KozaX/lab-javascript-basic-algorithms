// Iteration 1: Names and Input
let hacker1 = 'Peter Parker';
let hacker2 = 'Messing Withyou';

let message;

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  message = `The driver has the longest name, it has ${hacker1.length} characters.`;
  console.log(message);
} else if (hacker1.length < hacker2.length) {
  message = `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`;
  console.log(message);
} else {
  message = `Wow, you both have equally long names, ${hacker1.length} characters!`;
}

// Iteration 3: Loops

/*3.1 Print all the characters of the driver's name, separated by a space and
 [in capitals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
  i.e. `"J O H N"`
*/
let auxString = '';
for (let i = 0; i < hacker1.length; i++) {
  if (i < hacker1.length - 1) {
    auxString += hacker1[i] + ' ';
  } else {
    auxString += hacker1[i];
  }
}

console.log(auxString);

/*3.2 Print all the characters of the navigator's name, in reverse order. 
  i.e. `"nhoJ"`*/
let auxReverseString = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
  auxReverseString += hacker2[i];
}
console.log(auxReverseString);

/*3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>
      - `The driver's name goes first.` <br>
      - `Yo, the navigator goes first definitely.` <br>
      - `What?! You both have the same name?`*/
if (hacker1.toUpperCase() < hacker2.toUpperCase()) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.toUpperCase() > hacker2.toUpperCase()) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

/* Bonus 1:
Go to [lorem ipsum generator](http://www.lipsum.com/) and:
  - Generate 3 paragraphs. Store the text in a variable type of string.
  - Make your program count the number of words in the string.
  - Make your program count the number of times the Latin word [`et`](https://en.wiktionary.org/wiki/et#Latin) appears.*/

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis enim eget rhoncus rhoncus. Sed a ex ut urna interdum varius ac quis sem. Suspendisse bibendum tellus sit amet nibh tristique imperdiet. Sed aliquam lectus eu ultrices lobortis. Fusce ac eleifend erat, eget mattis massa. Aenean vehicula vulputate convallis. Phasellus diam tortor, aliquam vitae aliquet id, placerat venenatis nulla. Integer porta ex id auctor eleifend. Nulla facilisi. Donec eget quam nisl. Duis non eros metus. In hac habitasse platea dictumst.

  Vivamus non vehicula orci. Integer nec ligula ante. Nullam quis neque vitae enim sollicitudin aliquet sed et quam. Suspendisse blandit vitae purus vitae hendrerit. Pellentesque vitae cursus turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus commodo diam ac nibh posuere viverra. Mauris accumsan, urna quis rhoncus rutrum, eros diam pulvinar nulla, et pellentesque massa odio non orci. Nunc nunc risus, lobortis ac lacinia in, mattis quis mi. Sed tincidunt tincidunt semper. Mauris eu quam dolor. Praesent nulla urna, vestibulum in mi vel, cursus viverra erat. Vivamus sed scelerisque odio. Ut eu leo porta, pellentesque lorem ut, ullamcorper dolor. Aliquam ac nibh ut ligula eleifend tincidunt.
  
  Sed vel molestie lacus. In faucibus aliquet turpis, eu feugiat odio aliquet a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sit amet ante eu eros mollis rutrum eu sit amet leo.et Sed at sapien eu nisl consequat pellentesque. Nullam ac aliquam purus. Aenean sed fermentum justo. Phasellus pretium augue sed sodales faucibus. Cras eget gravida lacus. Nullam bibendum mattis libero et quis etfaucibus.`;
let wordCount = 0;
for (let i = 0; i < lorem.length; i++) {
  if (lorem[i] === ' ') {
    wordCount++;
  }
}
if (lorem) {
  wordCount += 1;
}
console.log('The lorem has ' + wordCount + ' words');

let etCount = 0;
for (let i = 0; i < lorem.length; i++) {
  if (
    lorem[i] === ' ' &&
    lorem[i + 1].toUpperCase() === 'E' &&
    lorem[i + 2].toUpperCase() === 'T' &&
    (lorem[i + 3].toUpperCase() <= 'A' || lorem[i + 3].toUpperCase() >= 'Z')
  ) {
    etCount++;
  }
}
console.log(`There are ${etCount} ets in the text.`);

/*#### Bonus 2:
Create a new variable `phraseToCheck` and have it contain some string value. Write a code that will check if the value we assigned to this variable is a [Palindrome](https://en.wikipedia.org/wiki/Palindrome). Here are some examples of palindromes: 
  - "A man, a plan, a canal, Panama!"
  - "Amor, Roma"
  - "race car"
  - "stack cats"
  - "step on no pets"
  - "taco cat"
  - "put it up"
  - "Was it a car or a cat I saw?" and "No 'x' in Nixon". */

let parseToCheck = 'race car';

let auxParseString = '';

for (let i = 0; i < parseToCheck.length; i++) {
  if (parseToCheck[i] >= 'A' && parseToCheck[i] <= 'z') {
    auxParseString += parseToCheck[i];
  }
}
let simpleParseString = auxParseString.toLowerCase();
console.log(simpleParseString);

let reverseString = '';
for (let i = simpleParseString.length - 1; i >= 0; i--) {
  reverseString += simpleParseString[i];
}
console.log(reverseString);

if (simpleParseString === reverseString) {
  console.log(`It's a Palindrome`);
} else {
  console.log(`It's not a Palindrome`);
}
