const userInput = prompt("Enter a sentence");

function sentenceReverse(userInput) {
  let firstLetter = userInput.charAt(0);
  let lastLetter = userInput.charAt(userInput.length - 1);
  let twoLetters = lastLetter.concat("", firstLetter).toUpperCase();
  let randomLetter = userInput.charAt(Math.round((userInput.length - 1) / 2));
  return randomLetter.concat("", userInput).concat("", twoLetters);
}

function reverseResult(resultSentense) {
  let letters = resultSentense.split("");
  return letters;
}
let resultSentense = sentenceReverse(userInput);
let sentenseLetters = reverseResult(resultSentense);
console.log(sentenseLetters.reverse().join(""));
console.log("IEecnetnes a ma ls");
