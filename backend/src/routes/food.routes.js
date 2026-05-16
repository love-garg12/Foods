const express = require('express');
const foodController=require('../controllers/food.controller')
const authMiddleware=require('../middlewares/auth.middleware')
const router=express.Router();
const multer=require('multer')/* is ka use ham fontend se koi file ati hai uske lie karte hai
 kyo ki express ka server jo hai kisi bhi formate ki file(like video,image,etc) ko nahi pad 
 sakta esi liye ye multer use hota hai
 or ise ham {req.file} se lete hai */
const upload= multer({
    storage:multer.memoryStorage(),
})


/*POST /api/food/[protected] per ye call hogi ise bhi protect karna hia */
router.post('/',authMiddleware.authFoodPartnerMiddleware,upload.single("video")/*frontend se video name*/,
foodController.createFood)

/* GET/api/food/[protected]*/ 
router.get('/',authMiddleware.authUserMiddleware,foodController.getFoodItems)


module.exports=router