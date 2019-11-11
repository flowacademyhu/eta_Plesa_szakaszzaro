// 1:   szám, logikai érték,       string      speciális   speciális     tömb                   objektum
//       3;      true,            'szöveg',    null,     undefined,     [1, 2, 3]   let plesa = {kor: 24, nem: ferfi}

/* 2:
 Érték szerinti átadás esetén az egyszerű típusok érték szerint adódnak át. Azaz függvényben való módosítások nem érintik az eredeti változó értékét.
 Referencia szerinti esetén ha például tömböt adunk át paraméterként, és azon módosításokat végzünk, akkor a hívó tömb is módosul. Ez sok esetben hasznos, például mikor két tömböt módosítunk, de visszaadni csak egy értéket tud a függvény. */
const fgv = (k) => {
  k.push(1);
};
const k = [];
fgv(k);
console.log(k);

// 3:

const generateArray = (size) => {
  const randomNumbers = [];
  for (let i = 0; i < size; i++) {
    randomNumbers.push(Math.floor(Math.random() * 10) + 1);
  }
  return randomNumbers;
};
const generatedArray = generateArray(10);
console.log(generatedArray);

/* Összegzés tétele */

const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};

console.log('Sum: ', sumArray(generatedArray));

// 4:
/* Megszámlálás tétele: */

const countELement = (element, arr) => {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      counter++;
    }
  }
  return counter;
};
console.log(countELement(3, generatedArray));

// 5:
const text = 'Hello';

switch (text) {
  case 'Hello 1':
    console.log('Hello 1');
    break;

  case 'Hello 2':
    console.log('Hello 2 ');
    break;

  default:
    console.log('Ez a default');
    break;
}
// 6:
const intersection = (array1, array2) => {
  const inters = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        inters.push(array1[i]);
        break;
      }
    }
  }
  return inters;
};

console.log(intersection([1, 2, 3, 4, 5, 6, 5], [3, 4, 3, 5, 6, 8, 9, 11]));

// 7:
const osszeadas = (a, b) => {
  return a + b;
};
const kivonas = (a, b) => {
  return a - b;
};
const szorzas = (a, b) => {
  return a * b;
};
const osztas = (a, b) => {
  return a / b;
};
module.export = {
  add: osszeadas,
  sub: kivonas,
  multi: szorzas,
  div: osztas
};
// 8:
const create2dArray = (n, m) => {
  let hatvany = 0;
  const matrix = [];
  for (let i = 0; i < n; i++) {
    const arr = [];
    for (let j = 0; j < m; j++) {
      arr.push(Math.pow(2, hatvany));
      hatvany++;
    }
    matrix.push(arr);
  }
  return matrix;
};
console.log(create2dArray(3, 3).join('\n'))
;
