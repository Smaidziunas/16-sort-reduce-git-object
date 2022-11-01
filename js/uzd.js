"use strict";
console.log("uzd.js");

// #  Sort

// 1. i ` <p id="nums"></p>` surasyti skaicius is `const nums = [5, 10, 1, 50, 12];`
// 2. paspaudus pelyte ant to paragrafo isrikiuoti skaicius didejancia tvarka

const pNumsEl = document.getElementById("nums");
const nums = [5, 10, 1, 50, 12];

const stringFromArray = nums.join(", ");
pNumsEl.textContent = stringFromArray;

pNumsEl.addEventListener("click", () => {
  console.log("click");
  nums.sort((x, y) => x - y);
  pNumsEl.textContent = nums.join(", ");
});

//3. sugeneruoti ol sarasa is `const colors = ['red', 'green', 'blue', 'yellow'];`

const colors = ["red", "green", "blue", "yellow"];

const colEl = document.getElementById("colors");

// map generate elements
// const htmlString = colors.map((color) => `<li>${color}</li>`).join('');
// console.log('htmlString ===', htmlString);

// reduce
const htmlString = colors.reduce((acc, color) => acc + `<li>${color}</li>`, "");

//4. pridideti html mygtuka, kuri paspaudus isrikiuoti spalvas pagal abecele mazejancia tvarka

const btnEl = document.getElementById("button");

const htmlString2 = colors.reduce(
  (acc, color) => acc + `<li>${color}</li>`,
  ""
);

colEl.innerHTML = htmlString2;

console.log("htmlString2 ===", htmlString2);

btnEl.addEventListener("click", () => {
  console.log("click");
  innerHTML.sort((b, a) => a.name.localeCompare(b.name));
  console.log("htmlString2 ===", htmlString2);
});
