// SpoonacularService.js

import axios from 'axios';

const apiKey = 'YOUR_SPOONACULAR_API_KEY';

export const getRecipeDetails = async (recipeId) => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${recipeId}/information`,
      {
        params: {
          apiKey: apiKey,
          // Other parameters as needed
        },
      }
    );

    // Handle the response data
    return response.data;
  } catch (error) {
    // Handle errors
    console.error('Error fetching recipe details:', error);
    throw error; // Optionally rethrow the error for the calling code to handle
  }
};