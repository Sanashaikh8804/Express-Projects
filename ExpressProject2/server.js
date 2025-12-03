const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;

app.use("/api/blogss", require("./routes/blogsRoute"));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

