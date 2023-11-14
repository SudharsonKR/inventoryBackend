const express=require('express')
const cors=require('cors')
const { db } = require('./db/db')
const {readdirSync} = require('fs') 
const app=express()

require('dotenv').config()
app.use(cors())
const PORT=process.env.PORT

//middlewares
app.use(express.json())


// app.get('/', (req, res)=>{    
//     res.send('Success working fine with postman')  
// })
//routes
readdirSync('./routes').map((route)=>app.use('/api/v1', require('./routes/' + route)))

const server = ()=>{
    db()
app.listen(PORT, ()=>{
    console.log('Listening to port: ', PORT);
})
    
}

server()