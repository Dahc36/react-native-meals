import React from 'react';

import MealList from '../components/MealList';

import { CATEGORIES, MEALS } from '../data/dummy';

function CategoryMeals({ navigation }) {
  const catId = navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.some(v => v === catId));

  return <MealList data={displayedMeals} navigation={navigation} />;
}

CategoryMeals.navigationOptions = ({ navigation }) => {
  const catId = navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return { headerTitle: selectedCategory.title };
};

export default CategoryMeals;
