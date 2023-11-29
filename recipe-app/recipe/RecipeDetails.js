// RecipeDetails.js
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const RecipeDetails = ({ route }) => {
  const { title, difficulty } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.detail}>Difficulty: {difficulty}</Text>
      {/* Add more details as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detail: {
    fontSize: 18,
  },
});

export default RecipeDetails;
