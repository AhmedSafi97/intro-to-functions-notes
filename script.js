// Declaring a function
function greet(firstName, lastName) {
  const fullName = `${firstName} ${lastName}`;

  console.log("firstName", firstName);
  console.log("lastName", lastName);

  return `Hello ${fullName}`;
}

/* Q) what is a function? */
/* Q) describe the anatomy of the function */
/* Q) how can we invoke the function? */
/* Q) greet vs greet() */
/* Q) parameters vs arguments */
/* Q) calling a function with missing arguments */

// Function Expression

const findProduct = function multiply(a, b) {
  return a * b;
};

/* Q) describe what happened here */
/* Q) how can we call this function? */
/* Q) can we omit the function name? */

// function declaration vs function expression(hoisting briefly)

/* <--- just talk briefly, this topic will be covered later---> */

// Functions are first-class objects

const findSquare = function (num) {
  return num ** 2;
};

/* N) Discuss this https://stackoverflow.com/questions/705173/what-is-meant-by-first-class-object*/

/* Q) findSquare instanceof Function */
/* Q) findSquare instanceof Object */
/* Q) Function instanceof Object */
/* Q) Object instanceof Function */
/* Q) can we add a property to a function? */
/* Q) can we store a function in an array */

function addOne(x) {
  return x + 1;
}

const addOneEx = function addOne(x) {
  return x + 1;
};

/* Q) compare addOne and addOneEx*/
/* Q) why don't we get an error that addOne is already defined? */

// Pass a function as an argument

function sayHi() {
  console.log("Hi world");
}

function sayHello() {
  console.log("Hello world");
}

function tellGreet(func) {
  func();
}

/* Q) sayHello() */
/* Q) tellGreet(sayHi) */
/* Q) tellGreet(sayHello) */
/* Q) tellGreet(sayHello())*/
/* Q) if we add a returned value to sayHello, would that make any difference?*/
/* Q) how can we pass an anonymous function as an argument? */
/* Q) how can we make this work tellGreet(sayHello())*/

/* N) A function that is passed as an argument to another function is known 
      as a callback function*/

/* N) A function that takes another function as an argument and/or 
      returns a function is known as a higher-order function*/

function greetSomeone(greeting) {
  return function (name) {
    console.log(greeting, name);
  };
}

/* Q) what does greetSomeone do? */
/* Q) how can we make a function that always uses the greeting "hello"? */

// Funception

function log1() {
  console.log(1);
}

function log2() {
  console.log(2);
}

function log3() {
  console.log(3);
}

/* Q) log1(log2(log3())) wat!!????? */
/* Q) how JS takes care of such an execution? call-stack! engine! runtime! 
      what the hell are these!? */

/* N) graph of js runtime https://i.ibb.co/LS0WPv2/js.png */
/* N) check the call-stack http://latentflip.com/loupe*/

function foo1() {
  const x = foo2();
  return x * 3;
}

function foo2() {
  const y = foo3();
  return Number(y);
}

function foo3() {
  return "1";
}

/* Q) foo1() */
/* N) check call-stack https://github.com/GSG-G9/curriculum/blob/main/coursebook/week-2/intro-to-functions-slides.md#what-was-the-point-of-that */

function callMe(x) {
  callMe(x);
}

/* Q) callMe() */
/* Q) what do we call this type of a function? how can we make a use out of it?*/

// Calling back callbacks

function firstFunction() {
  console.log("I'm the first function");
}

function secondFunction(callback) {
  callback();
  console.log("I'm the second function and I expect a callback as an input");
}

function thirdFunction(callback) {
  callback();
  console.log(
    "I'm the third function, I'm also expecting a callback as an input"
  );
}

/* Q) secondFunction(firstFunction) */
/* Q) is it different from secondFunction(function () { firstFunction()}) */
/* Q) thirdFunction(secondFunction(firstFunction)) */
/* Q) how can we fix that? */

/* <-------- comment the above function due to names conflict ---------> */
// function firstFunction(number) {
//   console.log("I'm the first function and I expect an input:", number);
// }

// function secondFunction(callback) {
//   var number = 1;
//   callback(number);
//   console.log("I'm the second function and I expect a callback as an input");
// }

/* Q) secondFunction(firstFunction) */
/* Q) secondFunction(firstFunction(1)) */
/* Q) can we pass args to firstFunction more dynamically*/

// Synchronous vs. Asynchronous

/* Q) what is single threaded? */
/* Q) what is synchronous code? */
/* Q) what is asynchronous code? */
/* Q) JavaScript is a synchronous or asynchronous? */

function logger() {
  console.log("one");
  console.log("two");
}

/* Q) logger() */

// function fakeSyncNetworkRequest() {
//   for (let i = 0; i < 5000000000; i += 1) {}
//   console.log("one");
// }

/* N) explain the point of code blocking */

// setTimeout(function() {
//   console.log("Hello");
//  }, 3000);

/* Q) what do we expect the code to do when we run it */

function asyncLogger() {
  setTimeout(() => console.log("one"), 3000);
  setTimeout(() => console.log("two"), 1000);
}

/* Q) asyncLogger() */

function weirdLogger() {
  setTimeout(() => console.log("one"), 3000);
  console.log("two");
  console.log("three");
}

/* Q) weirdLogger() */
/* Q) if we change 3000 with 0, would it make any difference? */

function asyncAddOne(number, callback) {
  setTimeout(function () {
    callback(number + 1);
  }, 3000);
}

/* Q) what is this!? */

// var x = 0;
// asyncAddOne(10, function (newValue) {
//   x = newValue;
// });
// console.log(x);

/* Q) what will happen when we run this? */
/* Q) change 3000 to 0, will it make any difference? */
/* Q) how can we catch the result of asyncAddOne? */

// async challenge

function asyncAddOne(number, callback) {
  setTimeout(function () {
    callback(number + 1);
  }, 3000);
}

function asyncMultiplyThree(number, callback) {
  console.log("result from first function:", number);
  setTimeout(function () {
    callback(number * 3);
  }, 3000);
}

/* Q) Multiply the result of the asyncAddOne using asyncMultiplyThree 
      e.g. (10 + 1) * 3 = 33
*/

// Discussing DOM events and network request(how async world works) **in case of extra time**
