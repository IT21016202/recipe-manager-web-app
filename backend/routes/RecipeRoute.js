const router = require('express').Router();
const {addRecipe, getAllRecipes, getRecipeById, updateRecipeById, deleteRecipeById} = require('../controllers/RecipeController');

// Add a new recipe
router.post('/add', addRecipe);

// Get all recipes
router.get('/', getAllRecipes);

// Get a single recipe by id
router.get('/:id', getRecipeById);

// Update a recipe by id
router.patch('/update/:id', updateRecipeById);

// Delete a recipe by id
router.delete('/delete/:id', deleteRecipeById);
  
// Exporting the router
module.exports = router;