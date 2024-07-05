// console.log("The reple contains code for the Ultimatee ")

// let a="114";
// console.log(a)
// a = harry;
// console.log(a)

// var b=34;
// var a=23;
// {
//     let a=2;
//     console.log("this")
// }
// console.log (b)

// NNBBSSU

// let a= "harry";
// let b= 114;
// let c= true;
// let d= null;
// let e = undefined ;
// let f= Symbol("Hello world ");
// // let g = BigInt("567")
// let g = BigInt("234") + BigInt("678")

// console.log(a,b,c,d,e,f,g)
// console.log()

// console.log("Operators in Js")

// let a = 45;
// let b = 4;

// console.log("a + b =",a+b)
// console.log("a - b =",a-b)
// console.log("a * b =",a*b)
// console.log("a / b =",a/b)
// console.log("a ** b =",a**b)
// console.log("a % b =",a%b)
// console.log("a++ =",a++)
// console.log("++a =",++a)
// console.log("a-- =",a--)
// console.log("--a =",--a)

// Assignment Operator

// let a = 4;
// let b = 2;

// a += 4;
// console.log(a);

// a /= 8;
// console.log(a);

// a -= 6;
// console.log(a);

// a *= 4;
// console.log(a);

// a %= 4;
// console.log(a);


// Practise 1 (Copy main )

// Practise set 2 :
//  In Lecture 08:
// problem 1:

// let age = 18;
// if(age>10 && age<20){
//     console.log("your age lies between 10 and 20")
// }
// else{
//     console.log("your age  dosent lies between 10 and 20")
// }
// (Prompt  run nahi hoga vs code per....... Browser per run hoga )

// Problem 2:

//  let age = 14;
// switch (age) {
//     case 12:
//       console.log("Your age is 12")    
//       break;
//     case 14:
//         console.log("your age  is 14")
//         break;
//       case 19:
//             console.log("your age  is 19")
//             break;
//     default:
//     console.log("your age is not special ")
// }

// Problem  3;
// num = 24;
// if(num%2==0 && num%3==0){
//     console.log("V.Good")
// }
// else{
//     console.log("Good")
// }

// Problem 4:

// num = 28;
// if(num%2==0 ||  num%3==0){
//     console.log("True")
// }
// else{
//     console.log("False")
// }
      
// Problem 05:

// let age = 16;
// console.log((age>=18 ? "you can drive" :"you cannot drive"))

// LOOPS:
// For In Loops:

//  ye object ko print kerny k liye use hota hai

// let obj = {
//     harry : 56,
//     shiv  : 76 ,
//     saad : 68 ,
//     sara : 79
// }
// for(let a in obj) {
//     console.log(a);
// }

// For Of Loops :

// for(let b of "Harry") {
//     console.log(b);
// }

// let myName = "ali";
// for(let i=0; i<5;i++){
//     console.log(myName)
// }

// let str2 ="Please give Rs 1000"
// // let amount= str2.slice("Please give Rs".length)
// let amount =str2.slice(15)
// console.log(amount)

// // string sy number main convert kerny k liye :
// let str2 ="Please give Rs 1000"

// let amount =Number.parseInt(str2.slice(15))
// console.log(amount)
// console.log(typeOfAmount )

// let friend ="Deepika"
// friend[3]="R"
// console.log(friend)   // friend is not changed , because string is immutable



// // for loop
// let num=[3,54, 1, 2, 4]
// // for (let i=0 ; i<num.length; i++){
// //      console.log(num[i])
// // }

// num.forEach((element)=>{
//     console.log(element*element)
// }
// )

// Array from :

// let i = "Harry"
// let arr =Array.from(i)
// console.log(arr)

// Practice Number 1:

// let arr= [1, 2, 3, 4, 5, 6,83]
// let a =" enter a number"
// a = Number.parseInt(a)
// arr.push(a)
// console.log (arr)

            // Number guessing Game 

// let a = Method.random()*100;
// a = Number.perseInt(a)
// let inp ;
//  let score = 100;

// while(inp!= a){
//     score = score -1;
//   inp = prompt("Enter The Number") ;
//   if(inp == a){
//     console.log("Congradulation!");
//     console.log(`You guess the actual number in ${100-score} chances`)
//   }
//   else if(inp > a && inp < 100){
//   consol.log("Your number is greater than the actual number ")
//   }
//   else if(inp < a && inp > 0){
//     consol.log("Your number is smaller  than the actual number ")
//     }
//     else{
//         console.log("Enter between 1 and 100")
//     }
// }


