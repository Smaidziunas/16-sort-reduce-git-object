"use strict";
console.log("arrObjReduce.js");

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
    name: "Serbentautas",
    age: 30,
    gender: "male",
    town: "Kaunas",
  },
  {
    name: "Mike",
    age: 35,
    gender: "male",
    town: "Kaunas",
  },
  {
    name: "June",
    age: 47,
    gender: "female",
    town: "London",
  },
];

// gauti visu useriu amziu vidurki

const usersAvg = users.reduce((avg, uObj) => avg + uObj.age, 0) / users.length;

console.log("usersAvg ===", usersAvg);

const ages =
  users.map((uObj) => uObj.age).reduce((avg, sk) => avg + sk, 0) / users.length;
// obj destructuring
// const ages = users.map(({ age }) => age).reduce((avg, sk) => avg + sk, 0) / users.length;
console.log("ages ===", ages);

// 1gauti visu vardu ilgiu vidurki

const userNameLengthAvg = users.reduce((avg, uObj) => {
  const currentUserLength = uObj.name.length;
  const currentUserAvgPart = currentUserLength / users.length;
  return avg + currentUserAvgPart;
}, 0);
console.log("userNameLengthAvg ===", userNameLengthAvg);

console.log(
  "name lengths",
  users.map((u) => u.name.length)
);

// 2 grazinti jauniausia zmogu
const youngest = users.reduce((foundYoungest, uObj) => {
  // Math.min(foundYoungest, uObj.age),
  // users[0].age
  if (uObj.age < foundYoungest.age) {
    foundYoungest = uObj;
  }
  return foundYoungest;
}, users[0]);

console.log("youngest ===", youngest);

// kiek nariu yra is londono

const londUsersObj = users.reduce(
  (accObj, uObj) => {
    // atliekma veiksmus su obj
    if (uObj.town === "London") {
      accObj.London++;
    }
    // grazinam objekta, ne veiksma su objektu
    return accObj;
  },
  { London: 0 }
);
console.log("londUsersObj ===", londUsersObj);
// const rez = {
//   London: 2,
// };
