const userModel=require('../models/user.model');
const foodPartnerModel=require('../models/foodpartner.model')
const bcrypt=require('bcryptjs');
const jwt =require('jsonwebtoken')

async function registerUser (req,res){
    const {fullName,email,password} = req.body;
    const isUserAlreadyExists= await userModel.findOne({
        email
    }) 
    if(isUserAlreadyExists){
        return res.status(400).json({
            message:"User already exist"
        })
    }
    const hashedPassword = await bcrypt.hash(password,10)

    const user = await userModel.create({
        fullName,
        email,
        password:hashedPassword
    })
    const token = jwt.sign({
        id:user._id,
    },process.env.JWT_SECRET)
    res.cookie("token",token)

    res.status(201).json({
        message:"User registered successfully",
        user:{
            _id:user._id,
            email:user.email,
            fullName:user.fullName
        }
    })

}

async function loginUser (req,res){
    const {email , password}=req.body;
     
    const user = await userModel.findOne({email});
    if(!user){
      res.status(400).json({message:"Invalid email or passsword"})
    }
    const isPasswordValid = await bcrypt.compare(password,user.password)

    if(!isPasswordValid){
        res.status(400).json({message:"Invalid email or passsword"})
    }

    const token = jwt.sign({
        id:user._id,
    },process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(200).json({
        message:"User login successfully",
        user:{
            _id:user._id,
            email:user.email,
            fullName:user.fullName
        }
    })
}

function logoutUser (req,res){
      res.clearCookie("token")
      res.status(200).json({
        message:"User looged out successfully"
      })
}

async function registerFoodPartner(req,res){
      const {name , email , password, phone , address,contactName}=req.body;

      const isAccountAlready = await foodPartnerModel.findOne({email})

      if(isAccountAlready){
        return res.status(400).json({
            message:"Food Partner Already exists"
        })
      }
      
      const hashPassword=await bcrypt.hash(password,10)

      const foodPartner = await foodPartnerModel.create({
           name,
           email,
           password:hashPassword,
           phone,
           address,
           contactName
      })

      const token = jwt.sign({
        id:foodPartner._id,
        
      },process.env.JWT_SECRET)
       
      res.cookie("token",token);

      res.status(200).json({
        message:"food Partner register successefully",
        foodPartner:{
            _id:foodPartner._id,
            email:foodPartner.email,
            name:foodPartner.name
        }
      })
}

async function loginFoodPartner(req,res){
         const {email,password}=req.body

         const foodPartner = await foodPartnerModel.findOne({
            email
        })
        if(!foodPartner){
            return res.status(400).json({
                message:"Invalid email or password"
            })
        }

        const isPasswordValid=await bcrypt.compare(password,foodPartner.password)

        if(!isPasswordValid){
            return res.status(400).json({
                message:"Invalid password"
            })
        }
        const token=jwt.sign({
            id:foodPartner._id,
        },process.env.JWT_SECRET)

        res.cookie("token",token)
        
        
        res.status(200).json({
            message:"Food Partner is login successfuly",
            foodPartner:{
                _id:foodPartner._id,
                email:foodPartner.email,
                name:foodPartner.name
            }
        })
}

function logoutFoodPartner(req,res){
      res.clearCookie("token")
      res.status(200).json({
        message:"Food Partner logout successfully"
      })
}

module.exports={
    registerUser,
    loginUser,
    logoutUser,
    logoutFoodPartner,
    registerFoodPartner,
    loginFoodPartner
}