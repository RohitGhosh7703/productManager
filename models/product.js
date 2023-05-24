const mongoose =  require('mongoose')

const productSchema  = new mongoose.Schema({
    productName :{
        type : String
    },
    productPrice :{
        type:Number
    },
    productCategory :{
        type : String
    },
    productDescrtiption :{
        type:String
    },
    productCreator:{
        type:String
    },
    productRating:{
        type:Number,
    }
});

module.exports = mongoose.model("products",productSchema)