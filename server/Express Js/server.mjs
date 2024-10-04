console.log("This is express server");



// npm start 

// libraries :  nothing but  a bunch of function  Express.js library hai r aik framework      (Library main function ko call kerty hain)
// r framework main syntax bhi thora framework ka hota hai
// for expressJs installation :
//            npm install express     
//  expressJs k code ko run kerny k liye node (file ka naam)

import express from 'express';
const app = express();

app.get('/', (req , res) =>{
    console.log('Hello!',  new Date());
    res.send('Hello' + new Date());
})

app.get('/profile', (req , res) =>{
    console.log('this is profile!',  new Date());
    res.send('This is profile' + new Date());
})

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})
