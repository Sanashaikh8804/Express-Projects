const asyncHandler= require("express-async-handler");

//Register a user
//POST /api/users/register
const registerUser= asyncHandler(async(req, res)=> {
    const {email, password}= req.body;
    if(!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const userAvailable= await UserActivation.findone({email});
    if(userAvailable) {
        res.status(400);
        throw new Error("User already registered");
    }
    
    res.json({message: "Register the user"});
});

const loginUser= asyncHandler(async(req, res)=> {
    res.json({message: "Login the user"});
});

const currentUser= asyncHandler(async(req, res)=> {
    res.json({message: "Current user information"});
});

module.exports= {registerUser, loginUser, currentUser};