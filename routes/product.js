// here we have imported the required techstack 
const express = require('express')
const mongoose = require('mongoose')

// here we have basically imported the productSchema class 
const productmodel = require('../models/product')  

const router = express.Router()


//getting all the products
router.get('/', async(req , res) =>{
    try{
        allProducts = await productmodel.find()
        res.status(200).json(allProducts)
    }
    catch{
        console.log()

    }
})

//get a single product


//editing a product


//deleting a product





