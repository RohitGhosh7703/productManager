const mongoose = require('mongoose')

const connectToDB = async () =>{
    try{
        await mongoose.connect('mongodb+srv://RohitGhosh:RohitAdmin@cluster0.fqtmuzv.mongodb.net/')
        console.log('MongoDb database connection established')
    }
    catch(error){
        console.log(`Error detected is ${error.message}`)
        process.exit(1)
    }
}

module.exports = connectToDB;