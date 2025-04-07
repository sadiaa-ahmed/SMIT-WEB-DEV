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
// import cors from 'cors';
import path from 'path'; 

const app = express()
const __dirname = path.resolve();
// app.use(cors())
// const port =  3000

// (lecture 114 express.js deploy )
//  iss server ko hum kisi cloud per bhejengy (cloud aik terminology device ho gaye hai aisy computer k liye jo internet sy conneted hai ya over the internet access kiya ja saekta ha tu hum kehty hain ye cloud hai .... )

// app.get('/', (req, res) => {
//     console.log("Hello" , new Date())
//     res.send('Hello World!' + new Date())
// })

app.get('/profile', (req, res) => {
    console.log("This is profile!" , new Date())
    res.send('This is profile!' + new Date())
})
app.get('/weather/:cityName', (req, res) => {
    console.log("This is profile!" , new Date())

    let weatherData = {
        karachi:{
            city : 'Karachi' ,
            tempInC: '30',
            humidity: 56,
            high: 32,
            low:18 ,
        },
        Lahore:{
            city : 'Lahore' ,
            tempInC: '5',
            humidity: 56,
            high: 32,
            low: 18 ,
        }
    }
    let userInputCityName = req.params.cityName.toLowerCase();

    let weatherDataToSend = weatherData[userInputCityName];
    if(weatherDataToSend){
        res.send(weatherDataToSend);
    }else{
        res.status(404).send(`weather data is not avalibale for ${req.params.cityName}`);
    }

    // res.send({
    //     city : 'Beijing' ,
    //     tempInC: '30',
    //     humidity: 56,
    //     high: 32,
    //     low:18 ,
    // })
})

app.use('/', express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000 ; 
app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}`)
})


//  what does it mean by APi ?
// Answer: 
//      Application programming interface 
//  In Urdu : 
//       programme apas main communicate kerty hain usy api kehty hain

// hum jo server banayengy uss main hum jo api expose karengy hum uski type http api over the internet access kiya jaye ga r isko hum js ya react app k through access ker rahy hongy

// hello world express.js ka server banaya hai r usko deploy kia hai cyclic k cloud per (deployment on cloud (cyclic.sh))

// ******************nodemon *******************************

// Install nodemon Locally and Use npx
// If you don't want to install it globally:

// In your project directory, run:

// bash
// Copy
// Edit
// npm install --save-dev nodemon
// Then start your server using:

// npx nodemon server.mjs    (iss command sy khudhi server restart ho jaye ga )

// corsorigin request ko handle kerny k liye use hota hai cors ......... 