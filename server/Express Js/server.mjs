console.log("This is express server");


// ye server banany ka aik framework hai
// npm start 

// libraries :  nothing but  a bunch of function  Express.js library hai r aik framework hai    (Library main function ko call kerty hain)
// r framework main syntax bhi thora framework ka hota hai
// for expressJs installation :
//            npm install express     
//  expressJs k code ko run kerny k liye node (file ka naam)

import express from 'express';
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})