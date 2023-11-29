// RecipeList.js
import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';

const RecipeList = ({ navigation }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async () => {
    try {
      const apiKey = 'YOUR_RAPIDAPI_KEY'; // Replace with your actual RapidAPI key
      const response = await fetch(
        'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex?instructionsRequired=true',
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
            'X-RapidAPI-Key': apiKey,
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();
      setRecipes(data.results);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        navigation.navigate('RecipeDetails', { title: item.title, difficulty: item.difficulty });
      }}
    >
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={recipes}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  item: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  itemText: {
    fontSize: 18,
  },
});

export default RecipeList;
