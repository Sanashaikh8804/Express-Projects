const express= require('express');
const router= express.Router();
const {getContact, createContact, getContactById, updateContactById, deleteContactById}= require('../controllers/contactController');

router.route(`/`).get (getContact);

router.route(`/`).post(createContact);

router.route(`/:id`).get (getContactById);

router.route("/:id").put (updateContactById);

router.route(`/:id`).delete (deleteContactById);

module.exports= router;
