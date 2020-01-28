import React from 'react';
import { FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CategoryGridTile from '../components/CategoryGridTile';
import HeaderButton from '../components/HeaderButton';

import { CATEGORIES } from '../data/dummy';

function Categories({ navigation }) {
  function renderCategory(itemData) {
    const { item } = itemData;
    return (
      <CategoryGridTile
        color={item.color}
        onPress={() => {
          navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: item.id,
            },
          });
        }}
        title={item.title}
      />
    );
  }

  return <FlatList data={CATEGORIES} numColumns={2} renderItem={renderCategory} />;
}

Categories.navigationOptions = navData => ({
  headerTitle: 'Meal Categories',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Menu"
        iconName="ios-menu"
        onPress={() => navData.navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
});

export default Categories;
