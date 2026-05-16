const foodModel=require('../models/food.model')
const {v4:uuid}=require('uuid')
const storageService = require('../services/storage.service')

async function createFood(req,res){
    // console.log(req.foodPartner)
    // console.log(req.body)
    // console.log(req.file)
    // ham yaha UUID lagaenge kyo ki hame harah file ka unqui name chahie
    const fileUploadResult = await storageService.uploadFile(req.file.buffer,uuid())
    // fileUploadResult hame hamare video ki ek url dega jisse ki ham apni video ko chala sake
    
    const foodItem = await foodModel.create({
        name:req.body.name,
        description:req.body.description,
        video:fileUploadResult.url,
        foodPartner:req.foodPartner._id
    })
   res.status(201).json({
        message:"food created successfully",
        food:foodItem
   })
}

async function getFoodItems(req,res){
        const foodItems = await foodModel.find({})
        res.status(200).json({
            message:"Food Item fetcheed successfully",
            foodItems
        })
}

module.exports={
    createFood,
    getFoodItems
}