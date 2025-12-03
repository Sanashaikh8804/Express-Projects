const express = require('express');
const { route } = require('./contactRoutes');
const { registerUser } = require('../controllers/userController');
const router = express.Router();

router.post("/register", registerUser);

router.post("/login", (req, res) => {
    res.json({ message: "Login the user" });
});

router.get("/current", (req, res) => {
    res.json({ message: "Current user information" });
});

module.exports = router;