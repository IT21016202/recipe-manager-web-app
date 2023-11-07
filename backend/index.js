// Creating backend server
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors  = require('cors');
require("dotenv").config(); 

// Importing environment variables
const port = process.env.PORT || 8080
const mongo_url = process.env.MONGO_URI;

app.use(cors());
app.use(bodyParser.json());

// Connecting to MongoDB
mongoose.connect(mongo_url, {});
const connection = mongoose.connection; 

connection.once("open", () => {
  console.log("Database Connection Successful");
})

const RecipeRoute = require('./routes/RecipeRoute');
app.use('/recipes', RecipeRoute);

// Starting server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
