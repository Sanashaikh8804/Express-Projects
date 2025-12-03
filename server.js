const express= require('express');
const errorHandler = require('./middleware/errorhandler');
const dotenv= require("dotenv").config();
const app= express();
const connectDb= require('./config/dbConnection');
connectDb();

const port= process.env.PORT || 5000;
app.use(express.json());

app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// errorHandler is an Express error-handling middleware — pass it to app.use with () not {}
app.use(errorHandler);

app.listen(port, ()=> {
    console.log(`server running on ${port}`);
});
