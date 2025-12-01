//Get all contacts
const getContact = ((req, res)=> {
    res.status(200).json({message:"Get all contacts"});
});

//Create new contacts
const createContact=  ((req, res)=> {
    console.log("The req body is", req.body);
    const {name, email, phone}= req.body;
    if(!name|| !email|| !phone) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    res.status(201).json({message:"Create contact"});
});

//Get contact by id
const getContactById=  ((req, res)=> {
    
    res.status(200).json({message:"Create contact"});
});

//Update contact by id
const updateContactById= ((req, res)=> {
    res.status(200).json({message:`Update contacts for ${req.params.id}`});
});

//Delete contact by id
const deleteContactById= ((req, res)=> {
    res.status(201).json({message:`delete contactes for ${req.params.id}`});
});

module.exports= {getContact, createContact, getContactById, updateContactById, deleteContactById};

