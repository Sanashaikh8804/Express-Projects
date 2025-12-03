const bcrypt = require("bcryptjs");
const asyncHandler= require("express-async-handler");
const User = require("../models/userModel");

// Register a user
// POST /api/users/register
const registerUser= asyncHandler(async(req, res)=> {
    const {name, email, password}= req.body;
    if(!name || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }

    const userAvailable= await User.findOne({email});
    if(userAvailable) {
        res.status(400);
        throw new Error("User already registered");
    }

    const hashedPassword= await bcrypt.hash(password, 10);
    console.log('registerUser - hashedPassword:', hashedPassword);
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    // avoid returning the password field in the response
    const userObj = user.toObject();
    delete userObj.password;
    console.log(`user created ${user}`);
    if(user) {
        res.status(201).json({_id: user._id, email: user.email});
    }
    else {
        res.status(400);
        throw new Error("User data is not valid");
        
    }

    res.status(201).json({message: "User registered successfully", user: userObj});
});

const loginUser= asyncHandler(async(req, res)=> {
    res.json({message: "Login the user"});
});

const currentUser= asyncHandler(async(req, res)=> {
    res.json({message: "Current user information"});
});

module.exports= {registerUser, loginUser, currentUser};