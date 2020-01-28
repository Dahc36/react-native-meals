import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Categories from '../screens/Categories';
import CategoryMeals from '../screens/CategoryMeals';
import Favorites from '../screens/Favorites';
import Filters from '../screens/Filters';
import MealDetail from '../screens/MealDetail';

import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator(
  {
    Categories,
    CategoryMeals,
    MealDetail,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
    },
  }
);

const FavoritesNavigator = createStackNavigator(
  {
    Favorites,
    MealDetail,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.secondary : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.secondary,
    },
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => (
        <Ionicons color={tabInfo.tintColor} name="ios-restaurant" size={25} />
      ),
      tabBarColor: Colors.primary,
      tabBarOptions: {
        activeTintColor: Colors.primary,
      },
    },
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => (
        <Ionicons color={tabInfo.tintColor} name="ios-star" size={25} />
      ),
      tabBarColor: Colors.secondary,
      tabBarOptions: {
        activeTintColor: Colors.secondary,
      },
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: 'white',
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig);

const FiltersNavigator = createStackNavigator(
  {
    Filters,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
    },
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFav: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals',
      },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.primary,
      labelStyle: {
        fontFamily: 'open-sans-bold',
      },
    },
  }
);

export default createAppContainer(MainNavigator);
