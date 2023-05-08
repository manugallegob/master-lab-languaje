/* -------------------------------------------------------------------------- */
/*                             1. Array operations                            */
/* -------------------------------------------------------------------------- */

const arr1 = ["manuel", "vicente", "luis", "antonio", "rosa"];
const arr2 = ["mango", "pera", "manzana", "sandia", "fresa"];
const arr3 = ["coche", "moto", "bici", "patinete", "avion"];

/* ---------------------------------- Head ---------------------------------- */

const head = ([first] = [arr]) => first;
console.log("****** Head *****");
console.log(head(arr1));

/* ---------------------------------- Tail ---------------------------------- */

const tail = ([, ...rest] = [arr]) => rest;
console.log("****** Tail *****");
console.log(tail(arr1));

/* ---------------------------------- Init ---------------------------------- */

const init = (arr) => arr.slice(0, -1);
console.log("****** Init *****");
console.log(init(arr1));

/* ---------------------------------- Last ---------------------------------- */

const last = (arr) => arr.slice(-1);
console.log("****** Last *****");
console.log(last(arr1));

/* -------------------------------------------------------------------------- */
/*                                  2. Concat                                 */
/* -------------------------------------------------------------------------- */

const concat = (a, b) => [...a, ...b];
console.log("****** Concat *****");
console.log(concat(arr1, arr2));

//Opcional 1

const concat2 = (...arrays) => arrays.reduce((acc, current) => [...acc, ...current], []);
console.log("****** Concat Optional 1 *****");
console.log(concat2(arr1, arr2, arr3));

//Opcional 2

const concat3 = (...arrays) => {
  let result = [];
  for (arr of arrays) result = [...result, ...arr];
  return result;
};
console.log("****** Concat Optional 2 *****");
console.log(concat3(arr1, arr2, arr3));

/* -------------------------------------------------------------------------- */
/*                               3. Clone Merge                               */
/* -------------------------------------------------------------------------- */

/* ---------------------------------- Clone --------------------------------- */

const obj1 = {
  name: "manuel",
  age: 26,
  email: "email@email.com",
};

const clone = (source) => {
  return Object.assign({}, source);
};
console.log("****** Clone *****");
console.log(clone(obj1));

const clone2 = (source) => {
  let result = {};
  for (prop in source) {
    result[prop] = source[prop];
  }
  return result;
};

console.log("****** Clone 2 *****");
console.log(clone2(obj1));

/* ---------------------------------- Merge --------------------------------- */

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

const merge = (source, target) => {
  let result = clone(target);
  for (prop in source) {
    result[prop] = source[prop];
  }
  return result;
};
console.log("****** Merge *****");
console.log(merge(a, b));

/* -------------------------------------------------------------------------- */
/*                                4. Read Books                               */
/* -------------------------------------------------------------------------- */

const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

function isBookRead(books, titleToSearch) {
  let bookFind = books.find((book) => book.title === titleToSearch);
  return bookFind === undefined ? false : bookFind.isRead;
}

console.log("****** Read Books *****");
console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

/* -------------------------------------------------------------------------- */
/*                                Slot Machine                                */
/* -------------------------------------------------------------------------- */

class SlothMachine {
  constructor() {
    this.coins = 0;
  }

  generatorBool() {
    return Math.random() >= 0.5;
  }

  play() {
    this.coins++;
    const bool1 = this.generatorBool();
    const bool2 = this.generatorBool();
    const bool3 = this.generatorBool();
    if (bool1 && bool2 && bool3) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log('"Good luck next time!!"');
    }
  }
}

console.log("****** Slot Machine *****");
const machine1 = new SlothMachine();
const machine2 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine2.play();
machine2.play();
machine2.play();
machine2.play();

