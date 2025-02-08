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



//Arrays
// everything in this bracket [] are array
// let arr = ["apple", 10, {name:"smn", age: 30},true]
//array can access with index 0
//  console.log(arr[1])
// arr[1] = 20 //modifying 
//  console.log(arr)
// let arr = ["apple", 10, {name:"smn", age: 30},true]
// //Functions on array
// //common arry method
// arr.pop(); // remove last item
// console.log(arr)
//  arr.push("last") //add an element on the last
// arr.pop(); // remove last item
// arr.shift() // remove first item
// arr.unshift("app") // add an element at beginning
// arr.indexOf(20) // show the index of 20
// const data = arr.slice(1,2) //cut
// const data = arr.reverse()
// const data = arr.sort()
// console.log(data)

//Iterating Over Arrays
//You can loop through arrays using various methods.

// let arr = ["apple", 10, {name:"smn", age: 30},true]

// // for(let i = 0; i < arr.length; i++){
// //     console.log(arr[i])
// // }

// arr.forEach((arr1)=>{ console.log(arr1)})
// let marks = [80, 90, 75, 85];
// for (let i = 0; i < marks.length; i++) {
//     console.log(`Mark ${i + 1}: ${marks[i]}`);
// }

//Objects
// every thing in {} braces are objects
// let person = {
//     name: "Sumon",
//     age: 30,
//     education: "Bsc",
//     isJobHolder : false
// }
//access
// console.log(person.isJobHolder)
// console.log(person["age"])
// //adding
// console.log(person.height = 5.11)
// console.log(person.isJobHolder = true)
// //delete
// console.log(delete person.age)
// console.log(person)

//Nested Objects:
// let person = {
//     name: "Sumon",
//     age: 30,
//     education: "Bsc",
//     isJobHolder : false,
//     address : {
//       city: "Dinajpur",
//       village : "abc"
//     }
// }
// console.log(person.address.village)


//Timing events
//setTimeOut

// setTimeout(()=>{
//   console.log("Hello After 2 sec")
// },2000)

// let interval = setInterval(()=>{
//    console.log("Repeating After every 1 sec")
// },1000)


// setTimeout(()=>{
//   clearInterval(interval)
//   console.log("stopped interval")
// },5000)\

//operation in Objects
//freeze
// let products = {
//     name: "Arif",
//     age: 25
// }

// Object.freeze(products)
// products.name = "sumon"

// console.log(products)

// Object.seal(products)
// products.address = "Rawalpindi";
// delete products.age;
// console.log(products)

//avoid reffernce and how to clone

// let pd = products
// pd.name = "smn"
// console.log(pd)
// console.log(products)

// let pd2 = Object.assign({},products)

// pd2.name = "sumon";
// console.log(pd2)
// console.log(products)

//can use spread operator
// let pd3 = {...products}
// pd3.name = "ahmmad"
// console.log(pd3)
// console.log(products)

//destructuring and this

// let person = {name:"arif", age:27, isDev : true ,
//     details : function (){
//         console.log(`Name : ${this.name} and isdev: ${this.isDev}`)
//     }
// }
// // let {name, isDev , age} = person
// // console.log(name,isDev, age)
// console.log(person.details())

//
// function greet (name, callback){
//     console.log(`hello , ${name}`)
//     callback()

// }

// function sayBye(){
//     console.log("good bye")
// }


// console.log(greet("smn", sayBye))

// function add (x,y){
//     return x + y;

// }

// function calculate (a, b, operation)
// {
// return operation (a, b)
// }

// console.log(calculate(5,3, add))

//
// const data = new Promise((resolve, reject)=>{
//     const success = true;
//     if (success){
//         resolve("Data successfully fetch")
//     }else{
//         reject("failed")
//     }

// })

// data.then((res)=> console.log(res))
// data.catch((err)=> console.log(err))


// let data2 = async function fetchData() {
//     try {
//         const result = await Promise.resolve("Fetched data successfully")
//         console.log(result)
//     } catch (error) {
//         console.error(error)
        
//     }
// }

// console.log(data2())

//dom

// let title = document.createElement("h2")
// title.innerText = "this is a heading"
// title.style.color = "green"
// title.style.backgroundColor ="red"
// document.body.appendChild(title)

// let colors = ["green","red","blue", "yellow", "pink"]
// let index = 0;
// document.querySelector("button").addEventListener("click", function(){
//     let title  = document.querySelector("h1")

//         index = (index + 1) % colors.length
//         title.style.color = colors[index]
    
   
// })
// Build a To-Do App

// Add tasks
// Mark tasks as done
// Remove tasks
// Save tasks to localStorage

// let taskList = document.getElementById("task")

// let value = ""
// document.querySelector("input").addEventListener("input",(event)=>{
//     value= event.target.value
    
// })

// document.querySelector("button").addEventListener("click", function (event){
//     event.preventDefault()
//     let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     tasks.push(value)
//     localStorage.setItem("tasks", JSON.stringify(tasks))
//    let li = document.createElement("li")
//    li.style.display = "flex"
//    li.style.justifyContent = "space-between"
//    let done = document.createElement("button")
//    done.addEventListener("click", function(){
//       li.style.backgroundColor = "green"
//    })
//    done.textContent = "Done Task"
//    let deleteTask = document.createElement("button")
//    deleteTask.addEventListener("click", ()=>{
//     document.querySelector("ul").removeChild(li)
//    })
//    deleteTask.textContent = "Delete"
//    li.textContent = value
//    li.appendChild(done)
//    li.appendChild(deleteTask)

//    document.querySelector("ul").appendChild(li)
   

//    value = ""
//    document.querySelector("input").value = ""

   
// })

// var a;
// var b;
// var c;
// // Only change code above this line

// a = a + 1;
// console.log(a)
// b = b + 5;
// console.log(b)

// c = c + " String!";

//event bubbling

// document.querySelector("#parent").addEventListener("click", ()=>{
//     alert("Parent clicked")
// })
// document.querySelector("#child").addEventListener("click", ()=>{
//     alert("child clicked")
// })

//event capturing
// document.querySelector("#parent").addEventListener("click", ()=>{
// console.log("Parent clicked first due to capturing!")
// },true)
// document.querySelector("#child").addEventListener("click", ()=>{
//     console.log("child clicked")
//      })

//event.target
// document.querySelector("#task").addEventListener("click", (event)=>{
//     console.log("clicked on :",event.target)
// })

//mouse event: mouseenter/mouseleave

// document.querySelector(".box").addEventListener("mouseenter", ()=>{
//     console.log("mouse enter")
// })
// document.querySelector(".box").addEventListener("mouseleave", ()=>{
//     console.log("mouse leave")
// })

//key event
// document.addEventListener("keyup", (event)=>{
//   console.log("you pressed: " ,event.key)
// })
// document.addEventListener("keydown", (event)=>{
//     console.log("you pressed: " ,event.key)
//   })

//   document.addEventListener("enter", (event)=>{
//     if(event.key === "Enter"){
//         console.log("you pressed: " ,event.key)
//     }
  
//   })

//preventing default
// document.querySelector("form").addEventListener("submit", (e)=>{
//      e.preventDefault()
//       console.log("submission prevendet")
// })

//chnge
// document.querySelector("input").addEventListener("change", ()=>{
//     console.log(this.value)
// })
// let button = document.querySelector("#bg");

// button.addEventListener("click", ()=>{
//    button.classList.toggle("active")
// })

//Show/Hide Password
// let input = document.querySelector("#pass")
// document.querySelector(".icon").addEventListener("click", ()=>{
//     if(input.type === "password"){
//         input.type = "text"
//     }else{
// input.type = "password"
//     }
// })
// document.querySelector("#bg").addEventListener("click", ()=>{
//    document.body.style.backgroundColor = "green" 
// })

// window.addEventListener("resize", function () {
//     console.log("Window resized!");
//     let width = window.innerWidth
    
//     console.log(width)
//   });
// window.addEventListener("keyup", (event)=>{
// document.querySelector(".mini-btn").addEventListener("click", ()=>{
//     document.body.style.backgroundColor = "red"
//     console.log(event.key)

//      })
// })


//Using Browser Functionalities in JavaScript
// console.log(window.innerHeight)
// console.log(window.innerWidth)

// //navigator

// console.log(navigator.userAgent)
// console.log(navigator.geolocation)
// console.log(navigator.language)

// //history
// history.back()

// //location
// console.log(location.href)

// //Local Storage (Stores Data Permanently)
// localStorage.setItem("username", "smn"); //set data
// console.log(localStorage.getItem("username")) //get data
// console.log(localStorage.removeItem("username"))
// localStorage.clear()


// // Session Storage (Clears When Tab is Closed)
// sessionStorage.setItem("session", "12345")
// console.log(sessionStorage.getItem("session"))
// sessionStorage.removeItem("session")
// console.log(sessionStorage.getItem("session"))

// //Cookies (Stores Data with Expiry)
//  document.cookie = "username=Arif expires=Fri, 31 Dec 2025 12:00:00 UTC"
//  console.log( document.cookie)

//Web APIs in JavaScript

//fetch

// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(res=> res.json())
// .then(data => console.log(data) )

//geoapi

//Geolocation API (Get User Location)
// const location = navigator.geolocation.getCurrentPosition((position)=>{
//     console.log( position.coords.latitude)
//     console.log(position.coords.longitude)
  
      
// })
// console.log(location)

//project

// document.querySelector("#savebtn").addEventListener("click", (event) => {
//     event.preventDefault(); // Prevent form submission
//     let value = document.querySelector("#save").value; // Get input value
//     localStorage.setItem("value", value); // Save to localStorage
//     console.log(localStorage.getItem("value")); // Log stored value

// });
// document.querySelector("#savebtn1").addEventListener("click", (event) => {
//     event.preventDefault(); // Prevent form submission
//     console.log("Before clear:", localStorage.getItem("value")); // Check stored value before clearing
//     localStorage.clear(); // Clear localStorage
//     console.log("After clear:", localStorage.getItem("value"));
    
// });


//Object-Oriented Programming (OOP) in JavaScript

// class car {
//     constructor (brand, model, cc, manufature){
//         this.brand = brand
//         this.model = model 
//         this.cc = cc 
//         this.manufature = manufature
//     }

//     details(){
//         console.log(`details of this ${this.brand} car : 
//             model : ${this.model}
//             cc : ${this.cc}
//             manufature : ${this.manufature}
           
//             `)
//     }
// }

// const car1 = new car("Ferrari", "F2", 1800, "2024" )
// const car2 = new car("Lambo", "G22", 2100, "2024" )

// car1.details()
// car2.details()


//Constructor and Prototypes
//adding method to prototype

// function Person (name, age){
//     this.name = name 
//     this.age =age

// }

// Person.prototype.greet = function(){
//     console.log(`my name is ${this.name} and my age is ${this.age}`)
// }

// const person1 = new Person("smn", 45)

// person1.greet()


//call
// const person = {
//     name : "smn"
// }

// function greet (){
//     console.log(`Hello ${this.name}`)
// }

// greet.call(person)

//apply
// function introduce(age, city) {
//     console.log(`My name is ${this.name}, I am ${age} years old and live in ${city}.`);
//   }
  
//   introduce.apply(person ="sf", [25, "Dhaka"]);

// Extending a Class

// class Animals {
//     constructor(name){
//         this.name = name
//     }

//     makeSound(){
//         console.log(`${this.name} makes a sound`)
//     }
// }

// class Dog extends Animals{
//     bark (){
//         console.log(`${this.name} alwys barks`)
//     }
// }

// const myDog = new Dog("sundori")
// myDog.makeSound()
// myDog.bark()

// Getter & Setter Methods


//Challenge: Create a Bank Account System
//Create a BankAccount class with properties accountNumber, balance.
//Add methods: deposit(), withdraw(), and getBalance().
//Create an object and test these methods.



// class bankAccount{
//     constructor(accountNumber,balance){
//         this.accountNumber = accountNumber;
//         this.balance = balance
//     }
//     deposite(amount){
//         if(amount > 0){
//             this.balance += amount;
//             console.log(`deposite amount ${amount} and new balance is ${this.balance}`)
//         }else{
//             console.log("desposite amount must be possitive")
//         }
//     }
//     withdraw(amount){
//         if(amount > this.balance){
//             return console.log("Balance is short")
//         }else{
//             this.balance -= amount;
//         console.log(
//                 "scucessfully withdrawed"
//             )
//         }

//     }

//     getBalance(){
//            return console.log(`current balance is ${this.balance}`) ;
//     }
// } 

// let accInfo = new bankAccount(123456, 5000);

// accInfo.getBalance();
// accInfo.deposite(4500);
// accInfo.getBalance ()
// accInfo.withdraw(500)
// accInfo.getBalance()




// Promise.all([
//     fetch("https://jsonplaceholder.typicode.com/posts/1"),
//     fetch("https://jsonplaceholder.typicode.com/posts/2"),
//   ])
//     .then(responses => Promise.all(responses.map(res => res.json())))
//     .then(data => console.log(data))
//     .catch(error => console.log(error));




























































// console.log("smn", "hobby is coding")
// console.log(45*2-10)
// console.log("smn", "hobby is coding")
// console.log(new Date)
// let firstName = "arif"
// let lastName = "ahmmad"
// console.log(firstName + " " + lastName)
// let value = 10;
// console.log(`before ${value}`)
// value= 15;
// console.log(`after ${value}`)
// console.error("error this is big error")
// let b = 10;
// console.log(b*b)

// let a = true;

// let value1 = 5;

// if(a === true ){
//  let total =    value1 + value
//  return console.log(total)
// }

// let age = 17;

// if (age >= 18){
//     console.log("adult")
// }else{
//     console.log("minor")
// }
// console.log(100/0)
