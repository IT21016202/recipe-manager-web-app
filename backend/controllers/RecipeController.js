const Recipe = require('../models/RecipeModel');
const { check, validationResult } = require('express-validator');

// Add a new recipe
const addRecipe = async (req, res) => {

    // Check for validation
    check('name').notEmpty().withMessage('Recipe name is required');
    check('ingredients').notEmpty().withMessage('Recipe ingredients are required');
    check('description').notEmpty().withMessage('Recipe description is required');

    // Return validation errors
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }
        next();
    }

    // Adding new recipe
    try { 
        const recipe = new Recipe(req.body);
        const result = await recipe.save();

        if(result)
            res.status(201).json({success: true, message: "Recipe Added Successfully"});
        else 
            res.status(400).json({success: false, message: "Invalid Recipe Data"}); 

    } catch (err) {
        res.status(500).json({success: false, message: err.message});
    }
}


// Get all recipes
const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();

        if (!recipes || recipes.length === 0) 
            return res.status(404).json({ success: false, message: 'No recipes found' });

        res.status(200).json({ success: true, data: recipes });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
}


// Get a single recipe by id
const getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);

        if (!recipe) 
            return res.status(404).json({ success: false, message: 'Recipe not found' });

        res.status(200).json({ success: true, data: recipe });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server Error', error: err.message });
    }
}


// Update a recipe by id
const updateRecipeById = async (req, res) => {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedRecipe) 
            return res.status(404).json({ success: false, message: 'Recipe not found' });

        res.status(200).json({ success: true, message: 'Recipe Updated Successfully', data: updatedRecipe });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Failed to update recipe', error: err.message });
    }
}



// Delete a recipe by id
const deleteRecipeById = async (req, res) => {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);

        if (!deletedRecipe) 
            return res.status(404).json({ success: false, message: 'Recipe not found' });

        res.status(200).json({ success: true, message: 'Recipe Deleted Successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Failed to delete recipe', error: err.message });
    }
}


module.exports = {addRecipe, getAllRecipes, getRecipeById, updateRecipeById, deleteRecipeById};