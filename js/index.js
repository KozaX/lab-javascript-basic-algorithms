// Iteration 1: Names and Input
let hacker1 = 'Peter Parker';
let hacker2 = 'Messing Withyou';

let message;

console.log("The driver's name is " + hacker1);
console.log('The navigators name is ' + hacker2);

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

//3.1
let driver = hacker1.split('');
console.log(driver);
driver = driver.join(' ').toUpperCase();
console.log(driver);

//3.2
let drunkDriver = hacker1.split('');
drunkDriver.reverse();
drunkDriver = drunkDriver.join('');
console.log(drunkDriver);

//3.3

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log('Yo, the navigator goes first definitely.');
} else {
  console.log(`What?! You both have the same name?`);
}

// Bonus 1

let loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id tempus dolor. Vivamus sagittis ligula dolor, vitae ullamcorper urna vestibulum in. Duis commodo tincidunt diam eu convallis. Donec tincidunt scelerisque dui eu luctus. Phasellus non felis nulla. Morbi in elementum justo, eget sagittis justo. Sed eu lacus venenatis, tristique erat sit amet, pulvinar est.Phasellus sit amet augue a magna mollis accumsan. Maecenas dui risus, molestie vitae semper rutrum, condimentum ultrices risus. Aliquam eget posuere eros, vitae faucibus quam. Fusce aliquet aliquet metus nec convallis. Integer venenatis purus sed sapien sodales, ut auctor diam laoreet. Vestibulum pellentesque sapien id elementum pellentesque. Phasellus nec aliquet neque. Donec lectus ex, vestibulum et ipsum sed, facilisis sollicitudin lectus. Fusce aliquet ultricies quam at sodales. Fusce mi neque, posuere non diam vulputate, feugiat fringilla purus. Suspendisse eu fermentum tellus, non commodo ante. Vestibulum condimentum nisi ut metus porta, in vehicula lacus condimentum. Etiam dapibus pretium metus, sed condimentum odio dapibus sit amet. Suspendisse risus mi, egestas sit amet iaculis eget, fermentum nec orci. Suspendisse potenti. Donec lacus risus, commodo sit amet consectetur ac, imperdiet sed mauris.Proin aliquet neque at eleifend sodales. Vivamus facilisis commodo pulvinar. Nunc ante nulla, accumsan id tortor in, iaculis mattis velit. Nullam vitae tellus gravida, ornare arcu id, finibus justo. Morbi nec tincidunt metus. Morbi sodales in sapien vitae ullamcorper. Aenean ut ultricies ligula. Donec in nunc sed dui volutpat accumsan vel vel metus. Etiam cursus enim ut ultricies hendrerit.';
let allWords = loremIpsum.split(' ');
let countWords = 0;
//number of words
for (let i = 0; i < allWords.length; i++) {
  countWords++;
}
console.log(countWords);
//number os et's
let countEts = 0;
for (let i = 0; i < allWords.length; i++) {
  if (allWords[i] === 'et') {
    countEts++;
  }
}

console.log(countEts);
