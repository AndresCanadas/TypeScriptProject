export {};
console.log("Hello");

//Differences between Let and const
/*
let count = 1;
count = 2; // ✅ works

const name = "Alice";
// name = "Bob"; ❌ Error: Cannot assign to 'name' because it is a constant.

// But with objects:
const user = { id: 1, username: "Alice" };
user.username = "Bob"; // ✅ allowed (modifying object property)

// user = { id: 2, username: "Charlie" }; ❌ Error (cannot reassign)
*/

/*
const names:string[] = ["Jhon", "Clarck", "Tony"];
console.log(names);

const user: {name:string, age:number}={
    name:"Tony Stark",
    age: 54
}
console.log(user);
*/
//I love you
//Me too

function userID(): number {
  return 20;
}

console.log(userID());

interface UserModel {
  Username: string;
  Age: number;
  email: string;
  UserIdname: () => string;
}

const a: UserModel = {
  Username: "Andres",
  Age: 26,
  email: "a@a.com",
  UserIdname: function () {
    return "ss";
  },
};

console.log(a.UserIdname());

class myapp {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName() {
    console.log(this.name);
  }
}
let user1 = new myapp("Tony");
user1.getName();

let number: number[] = [1, 2, 3, 4, 5, 6];

number.push(7);

console.log(number);

let colours: string[] = ["Red", "Blue", "Purple"];

/* colours.shift();

colours.unshift("Green");

console.log(colours); */

let array1: number[] = [1, 2];
let array2: number[] = [3, 4];
console.log(array1, array2);

let add: number[] = array1.concat(array2);
console.log(add);

let sliced: string[] = colours.slice(1, 3);
console.log(sliced);

let num: number[] = [2, 3, 56, 78, 23];
let square: number[] = num.map((y) => y * y);
console.log(square);

let num2: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
let evennum: number[] = num2.filter((y) => y % 2 === 0);
console.log(evennum);
//Quita valores segun el filtro

let reducearray: number[] = [22, 4, 6, 78, 24];
let sum = reducearray.reduce((acc, curr) => Math.max(acc, curr));
console.log(sum);

const fruits: string[] = ["Apple", "banana", "Mango", "Orange"];
fruits.forEach((fruits) => console.log(fruits));

let score: number[] = [140, 136, 275, 443, 788];
let highscore = score.find((score) => score > 300);
console.log(highscore);
let highscoreIndex = score.findIndex((score) => score > 300);
console.log(highscoreIndex);

class Parent {
  name: string = "";
  setMyName(name: string) {
    this.name = name;
  }
}

class Child extends Parent {
  myName() {
    return this.name;
  }
}
const name1 = new Child();
name1.setMyName("Andres");
console.log(name1.myName());

/* import myLogin from "./signup.ts";
import mySignup from "./login.ts";

let login = new myLogin();
console.log(login);

let signup = new mySignup();
console.log(signup);

let data: unknown;

data = true;
data = "Hello";
data = 23;
 */
/* let values: number;

values = data;

console.log(values); */
