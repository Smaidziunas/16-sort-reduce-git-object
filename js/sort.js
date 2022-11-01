"use strict";
console.log("sort.js");

const users = [
  {
    name: "James",
    age: 65,
    gender: "male",
    town: "London",
  },
  {
    name: "Jane",
    age: 27,
    gender: "female",
    town: "Kaunas",
  },
  {
    name: "Mike",
    age: 35,
    gender: "male",
    town: "Amsterdam",
  },
  {
    name: "June",
    age: 47,
    gender: "female",
    town: "London1",
  },
];

// console.table(users);

// isrikiuoti pagal amziu didejanciai
// users.sort((a, b) => a.age - b.age);
// console.table(users);

// isrikiuoti pagal amziu mazejanciai
// users.sort((a, b) => b.age - a.age);
// console.table(users);

// console.log(users[0].town > users[1].town);

// rikiuojam pagal miesta
users.sort((a, b) => (a.town > b.town ? 1 : -1));
console.table(users);

// rikiuojam pagal gender
users.sort((a, b) => a.gender.localeCompare(b.gender));
// console.log("a.gender.localeCompare(b.gender)");
// console.table(users);

// isrikiuoti musu masyva pagal varda
// az
{
  // users.sort((a, b) => a.name.localeCompare(b.name));
  // console.log("a.name.localeCompare(b.name)");
  // console.table(users);
}
// za
{
  //#1
  // users.sort((b, a) => a.name.localeCompare(b.name));
  //#2
  // users.sort((a, b) => (a.name > b.name ? -1 : 1));
  // console.log("a.name.localeCompare(b.name)");
  // console.table(users);
}

// 1.  i ` <p id="nums"></p>` surasyti skaicius is `const nums = [5, 10, 1, 50, 12];`

const pNumsEl = document.getElementById("nums");
const nums = [5, 10, 1, 50, 12];

const stringFromArray = nums.join(", ");
pNumsEl.textContent = stringFromArray;

// 2. paspaudus pelyte ant to paragrafo isrikiuoti tuos skaicius didejancia tvarka

pNumsEl.addEventListener("click", () => {
  console.log("click");
  nums.sort((x, y) => x - y);
  pNumsEl.textContent = nums.join(", ");
});
