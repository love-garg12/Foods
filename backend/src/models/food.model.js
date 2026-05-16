const mongoose =require('mongoose')

 const foodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    video:{
        type:String,//yaha hamri video ki url ko store karenge or video jo hai cloud par store hogi
        required:true
    },
    description:{
        type:String,
    },
    foodPartner:{
        type:mongoose.Schema.Types.ObjectId,//ye jo hai use ki id hogi jjo bhi ese post karega
        ref:"foodpartner"
    }
 })

 const foodModel = mongoose.model("food",foodSchema);

 module.exports=foodModel