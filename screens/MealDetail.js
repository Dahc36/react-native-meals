import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

import { CATEGORIES, MEALS } from '../data/dummy';

const styles = StyleSheet.create({
  mealDetail: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function MealDetail({ navigation }) {
  const mealId = navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return (
    <View style={styles.mealDetail}>
      <Text>{selectedMeal.title}</Text>
    </View>
  );
}

MealDetail.navigationOptions = ({ navigation }) => {
  const mealId = navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log('marked as favorite');
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default MealDetail;
