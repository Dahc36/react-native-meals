import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

const styles = StyleSheet.create({
  filters: {},
});

function Filters() {
  return (
    <View style={styles.filters}>
      <Text>Filters</Text>
    </View>
  );
}

Filters.navigationOptions = navData => ({
  headerTitle: 'Filter Meals',
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

export default Filters;
