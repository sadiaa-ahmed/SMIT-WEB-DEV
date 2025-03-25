console.log("This is express server");


// ye server banany ka aik framework hai
// npm start 

// libraries :  nothing but  a bunch of function  Express.js library hai r aik framework hai    (Library main function ko call kerty hain)
// r framework main syntax bhi thora framework ka hota hai
// for expressJs installation :
//            npm install express     
//  expressJs k code ko run kerny k liye node (file ka naam)
// ******************************************************************
// Server Software:
// Server ke upar ek operating system aur software install kiya jata hai jo usko kisi specific kaam ke liye tayar karta hai, jaise:

// Operating System (OS): Windows Server, Linux (Ubuntu, CentOS, etc.)

// Web Server Software: Apache, Nginx, IIS

// Database Server: MySQL, PostgreSQL, MongoDB

// Cloud Server Software: AWS, Google Cloud, Microsoft Azure

// ye sir inzamam k laptop ka ip address hai (http://192.168.210.35:3000)
// (ye procedure sirf same network per filhal kaam kary ga)

// http://192.168.2.105:3000/  (ye mery laptop ka ip address hai)

import express from 'express';
const app = express()
const port = 3000
// (lecture 114 express.js deploy )
//  iss server ko hum kisi cloud per bhejengy (cloud aik terminology device ho gaye hai aisy computer k liye jo internet sy conneted hai ya over the internet access kiya ja saekta ha tu hum kehty hain ye cloud hai .... )
app.get('/', (req, res) => {
    console.log("Hello" , new Date())
    res.send('Hello World!' + new Date())
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


//  what does it mean by APi ?
// Answer: 
//      Application programming interface 
//  In Urdu : 
//       programme apas main communicate kerty hain usy api kehty hain

// hum jo server banayengy uss main hum jo api expose karengy hum uski type http api over the internet access kiya jaye ga r isko hum js ya react app k through access ker rahy hongy
