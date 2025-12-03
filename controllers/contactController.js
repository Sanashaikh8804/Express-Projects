const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");



//Get all contacts
const getContact = asyncHandler(async(req, res)=> {
    const Contacts= await Contact.find();
    res.status(200).json({Contacts});
});

//Create new contacts
const createContact=  asyncHandler(async(req, res)=> {
    console.log("The req body is", req.body);
    const {name, email, phone}= req.body;
    if(!name|| !email|| !phone) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const contact= await Contact.create({
        name,
        email,
        phone,
    });
    res.status(201).json({contact});
});

//Get contact by id
const getContactById=  asyncHandler(async(req, res)=> {
    const contact= await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    
    res.status(200).json({contact});
});

//Update contact by id
const updateContactById= asyncHandler(async(req, res)=> {
    console.log('PUT /api/contacts/:id - req.body:', req.body);
    // find the contact first
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    // perform the update using the incoming body
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.status(200).json(updatedContact);
});

//Delete contact by id
const deleteContactById= asyncHandler(async(req, res)=> {
    console.log('DELETE /api/contacts/:id - id:', req.params.id);
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    // remove the found document
    await Contact.findByIdAndDelete(req.params.id);

    // return 200 with deleted document or a message
    res.status(200).json({ message: 'Contact deleted', contact });
});

module.exports= {getContact, createContact, getContactById, updateContactById, deleteContactById};

