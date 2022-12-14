"use strict";
console.log("students.js");

const students = [
  {
    name: "James",
    gender: "male",
    age: 25,
    town: "Vilnius",
    hasCar: true,
  },
  {
    name: "Jill",
    gender: "female",
    age: 28,
    town: "Kaunas",
    hasCar: true,
  },
  {
    name: "Mike",
    gender: "male",
    age: 18,
    town: "Kaunas",
    hasCar: false,
  },
  {
    name: "Jane",
    gender: "female",
    age: 22,
    town: "Klaipeda",
    hasCar: false,
  },
  {
    name: "Jannet",
    gender: "female",
    age: 29,
    town: "Klaipeda",
    hasCar: true,
  },
  {
    name: "Cory",
    gender: "male",
    age: 30,
    town: "Siauliai",
    hasCar: true,
  },
  {
    name: "Minks",
    gender: "male",
    age: 19,
    town: "Siauliai",
    hasCar: false,
  },
];

// ### Students uzdaviniai

// 1r. suskaiciuoti studentu vyru amziu vidurki.
// 2r. suskaiciuoti vairuotoju amziu vidurki.

// 1. atrinkti i nauja masyva studentus kurie turi masina
// 1.1 atrinkti i nauja masyva studentus kurie turi masina su forEach

/* == su FILTER ==
const hasCarFiltered = students.filter((student) => {
  return student.hasCar === true;
});
console.log("hasCarFiltered ===", hasCarFiltered);
*/

/* == REDUCE with external var ==
let arr = [];
const hasCarNew = students.reduce((hasCarArr, student) => {
  if (student.hasCar === true) {
    arr.push(student);
  }
  return;
}, arr[0]);
console.log("arr ===", arr);
*/

/* ==su ForEach ==
students.forEach((student) => {
  if (student.hasCar === true) {
    arr.push(student);
    console.log("student ===", student);
  }
});
console.log("arr ===", arr);
*/

// 2 grazinti jauniausia zmogu
/* ==REDUCE==
const minAge = students.reduce((lowAge, sk) => {
  if (sk.age < lowAge.age) {
    lowAge = sk;
  }
  return lowAge;
}, students[0]);
console.log("lowAge ===", minAge);
*/

// 2. Atrinkti i nauja masyva zmones is Vilniaus
/* ==FILTER==
const fromVlno = students.filter((location) => location.town === "Vilnius");
// console.log("fromVlno ===", fromVlno);
*/

// 2.1 kiek zmoniu is Siauliu?
/* ==REDUCE==
const nbFromSiaule = students.reduce(function (total, location) {
  if (location.town === "Siauliai") total++;
  return total;
}, []);
console.log("nbFromSiaule ===", nbFromSiaule);
*/

// 2.2 kokie yra zmoniu is siaulu indeksai?
/* ==REDUCE==
const iNbFromSiauliai = students.reduce((total, location) => {
  if (location.town === "Siauliai") total.push(students.indexOf(location));
  return total;
}, []);
// console.log("iNbFromSiauliai ===", iNbFromSiauliai);
*/

// 3. Atrinkti i nauja masyva moteris
/* ==FILTER==
const femalesArr = students.filter((object) => object.gender === "female");
console.log("femalesArr ===", femalesArr);
*/

//3.1 Atrinkti i nauja masyva indeksus, objektu kuriuose gender ==== 'female';
/* ==REDUCE==
const femalesIndexes = students.reduce((indexArr, sObj) => {
  if (sObj.gender === "female") {
    indexArr.push(students.indexOf(sObj));
  }
  return indexArr;
}, []);
console.log("femalesIndexes ===", femalesIndexes);
*/

// 4. suzinoti ar yra nors vienas zmogus is Kauno
// 5. suskaiciuoti kiek zmoniu yra jaunesni nei 26
// 6  Grazinti nauja masyva kuriame yra visu zmoniu amziai;
// 6. Grazinti nauja masyva kurio objektuose butu tik vardas ir miestas
// 7. sugeneruoti rikiuoto saraso pavidalu htmle visu zmoniu vardus ir kiek jiems metu
// 8. Gauti visu zmoniu metu suma .reduce
// 9. suskaiciuoti visu zmoniu metu vidurki
// 10 surasti zmongu vardu 'Mike' ir padaryti kad jis nusipirko masina yra tiesa
// 11 sugeneruoti rikiuoto saraso pavidalu htmle visu zmoniu vardus ir kiek jiems metu
