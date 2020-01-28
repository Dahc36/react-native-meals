import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';

import { MEALS } from '../data/dummy';
import Colors from '../constants/Colors';

function Favorites({ navigation }) {
  const displayedMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

  return <MealList data={displayedMeals} navigation={navigation} />;
}

Favorites.navigationOptions = navData => ({
  headerTitle: 'Your Favorites',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        color={Colors.secondary}
        title="Menu"
        iconName="ios-menu"
        onPress={() => navData.navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
});

export default Favorites;
