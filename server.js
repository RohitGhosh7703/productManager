const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const connectToDB = require('./db')

// create app here
const app = express();
connectToDB()
app.use(bodyparser.urlencoded({extended:true , limit: '20mb'}))
app.use(bodyparser.json({extended:true ,limit:'20mb'}))
app.use(cors())


// create one dummy route for the test
app.get('/',(req,res)=>{
    res.send('API IS RUNNING')
})



const port = "5000"

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})
