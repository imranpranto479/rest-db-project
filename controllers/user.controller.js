const {v4: uuidv4} = require("uuid");

const User = require("../models/user.model");


const getAllUsers = async (req,res)=>{
   try{const users = await User.find();// database theke data ana
   res.status(200).json(users) // data gulo response hisabe show korano
}
catch(error)
{
res.status(500).send(error.message);
}
};

//individual user search er zonno
const getOneUser = async(req,res)=>{
    try{
    const user = await User.findOne({id: req.params.id})
    res.status(200).json(user);
    }
    catch(error)
    {
        res.status(500).send(error.message);
    }
}; //use korte route e jete hobe

//create user (post method er zonno)
const createUser = async (req,res)=>{
     try{
           //new user moddhe schema onuzai create kora lagbe
           const newUser = new User({
            id: uuidv4(),
            name: req.body.name,
            age: Number(req.body.age),
        })
        //data database e save er zonno await function use korbo
        await newUser.save();
        res.status(201).json(newUser); //response
     }
     catch(error)
     {
        res.status(500).sned(error.message);
     }

  
};

//update user er zonno
const updateUser = async (req,res)=>{
    try{
        const user = await User.findOne({id: req.params.id})
        //id khuja hoise zeta ke update korbo

user.name = req.body.name;
user.age = Number(req.body.age);
        
     //data database e save er zonno await function use korbo
     await user.save();
     res.status(200).json(user); //response
  }
  catch(error)
  {
     res.status(500).send(error.message);
  }
};
//delete user er zonno function
const deleteUser = async(req,res)=>{
    try{
        await User.deleteOne({id: req.params.id})
        res.status(200).json({message: "user is deleted"});
        }
        catch(error)
        {
            res.status(500).send(error.message);
        }
};

//exporting user.controller.js

module.exports = {getAllUsers, getOneUser, createUser, updateUser, deleteUser};