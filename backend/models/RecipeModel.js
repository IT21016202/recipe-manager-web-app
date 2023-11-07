const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

// Defining the Recipe schema
const RecipeSchema = new Schema({
  name: {type: String, required: true},
  ingredients: {type: String, required: true},
  description: {type: String, required: true},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date}
});

// Exporting the Recipe model
const Recipe = mongoose.model("Recipe", RecipeSchema);
module.exports = Recipe;