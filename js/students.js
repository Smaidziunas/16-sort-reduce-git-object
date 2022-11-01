"use strict";
console.log("main.js");

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

let arr = [];
// const hasCarNew = students.reduce((hasCarArr, student) => {
//   if (student.hasCar === true) {
//     arr.push(student);
//     console.log("student ===", student);
//   }
//   return hasCarArr;
// }, students[0]);

// console.log("studentHasCar", hasCarArr);
// console.log("arr ===", arr);

students.forEach((student) => {
  if (student.hasCar === true) {
    arr.push(student);
    console.log("student ===", student);
  }
});
console.log("arr ===", arr);

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

// 2 grazinti jauniausia zmogu

//
// 2. Atrinkti i nauja masyva zmones is Vilniaus
// 3. Atrinkti i nauja masyva moteris
// 4. suzinoti ar yra nors vienas zmogus is Kauno
// 5. suskaiciuoti kiek zmoniu yra jaunesni nei 26
// 6  Grazinti nauja masyva kuriame yra visu zmoniu amziai;
// 6. Grazinti nauja masyva kurio objektuose butu tik vardas ir miestas
// 7. sugeneruoti rikiuoto saraso pavidalu htmle visu zmoniu vardus ir kiek jiems metu
// 8. Gauti visu zmoniu metu suma .reduce
// 9. suskaiciuoti visu zmoniu metu vidurki
// 10 surasti zmongu vardu 'Mike' ir padaryti kad jis nusipirko masina yra tiesa
// 11 sugeneruoti rikiuoto saraso pavidalu htmle visu zmoniu vardus ir kiek jiems metu
