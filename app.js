// //
// var name = "john"  //fuction-scoped
// let a = 20; //blocked-scoped
// const country = "Bangladesh" //for those variable that won't change

// //Primitive data types
// let c = 20  // type number
// let d = "joy" // type string
// let isRunning = true // type boolean
// let empty = null //empty value - intentional
// let f; //type undefined

// //Reference data types

// const obj = {a:2, b: 3}
// console.log(obj.b)
// const arr = [10,20,30]
// console.log(arr[2])
// function  abcd(a, b) {
//     return a + b
// }
// console.log(abcd(2,3)) 

// //operators
// //arithmetic
// let g = a + c //addition
// let h = a - c //subtraction
// // let i = a * c //multiplication
// let j = a / c //divison
// let k = a % c //remainder
// let l = a ** c //exponential

// //comparison
// console.log( c === 20) //strict equality
// console.log(c !== 5) //strict inequality
// console.log(c > 10) // greater than
// console.log(c < 21) // less than

// //Logical
// const isComming = true;
// const isAdult = false;

// console.log( isComming && isAdult) //AND false
// console.log(isAdult || isComming) // OR true
// console.log(!isComming) // NOT false

// //null

// //Control Flow(if,else if, else)

// let age = 35;


// if (age < 18) {
//     console.log("You are a minor.");
//   } else if (age < 30) {
//     console.log("You are a young adult.");
//   } else {
//     console.log("You are an adult.");
//   }

//   //switch case
// let day = "Thrusday"

// switch (day){
//     case "Sunday" : console.log("Start the week")
//     break;
//     case "Thrusday" : console.log("Tomorrow is weekend")
//     break;
//     default : console.log("just another day")
// }

//Loops

// for (let index = 0; index < 5; index++) {
//     console.log(index)
    
// }

// let car = { brand: "Toyota", model: "Corolla", manufacture: 2024 };
// for (let key in car) {
//   console.log(`${key}: ${car[key]}`);
// }

// for (i = 0; i < 5; i++){
//     console.log(i)
// }

//Function
//function declaration
// function greet(name){
//     return `Hello ${name}`
// }
// console.log(greet("Arif"))

// //arrow function

// const add = (a,b) => a+b
// console.log(add(5,6))
// const add1 = (a,b) => {return a+b}
// console.log(add1(5,6))

// //string play
// let str = "I'm learning js again"
// console.log(str.slice(0,3)) 
// console.log(str.split(" ")) 
// console.log(str.replace("I'm", "You're"))
// console.log(str.includes("js "))

// function oodEven (a){
//     if(a % 2 == 0){
//     return "even"
//     }else{
//         return "ODD"
//     }
// } 
// console.log(oodEven(55))

// let number= 5
// const result = (number % 2 === 0) ? "even" : " odd"
// console.log(result)

// function factorial(n) {
//     if (n === 1) {
//         return 1; // Base case
//     }
//     return n * factorial(n - 1); // Recursive case
// }

// console.log(factorial(5)); // Output: 120


//Nested Function
// const abc = ()=>{
//     function def (){
//         console.log("inner function")
//     }
//     def()
// }
// abc()


//Higher-Order Function
// function higherOrderFunction (func){
//      func()
// }

// higherOrderFunction(()=>{ console.log("This is a HOF")})

//Callback Function : a function can pass as an argument as another function
// const greet = (name, callback)=>{
//     console.log(`Hello ${name}`) ;
//     callback()

// }

// console.log(greet("smn", ()=>{console.log("welcome")}))

//First-Class Functions
// const func = ()=>{
//     console.log("call this")
// }
// const abc = func
// abc()


//pure vs impure function
// pure func can not reliable any outer variable
// function abc (a,b){
//    return a+b
// }
// console.log(abc(4,5))

// //impure depends on variable
// let num = 10;
// function abc1 (a){
//     return num += a
//  }
//  console.log(abc1(5))