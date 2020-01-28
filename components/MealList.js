import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import MealItem from '../components/MealItem';

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});

function MealList({ data, navigation }) {
  function itemRenderer(dataItem) {
    const { item } = dataItem;
    return (
      <MealItem
        affordability={item.affordability}
        complexity={item.complexity}
        duration={item.duration}
        image={item.imageUrl}
        onPress={() => {
          navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: item.id,
            },
          });
        }}
        title={item.title}
      />
    );
  }

  return (
    <View style={styles.list}>
      <FlatList data={data} renderItem={itemRenderer} style={{ width: '100%' }} />
    </View>
  );
}

export default MealList;
