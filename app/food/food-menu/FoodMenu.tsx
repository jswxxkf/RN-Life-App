import React, { memo, useCallback } from 'react';
// sub cpn
import {
  StyleSheet,
  View,
  useWindowDimensions,
  Text,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
// config
import featureData from './config/FeatureData.json';

const FoodMenu = memo(() => {
  const { width } = useWindowDimensions();

  const renderItem = useCallback(({ item }) => {
    return (
      <View style={styles.menuItem}>
        <Image source={{ uri: item.image }} style={styles.menuItemImg} />
        <Text style={styles.menuItemText}>{item.title}</Text>
      </View>
    );
  }, []);

  return (
    <View style={styles.foodMenuWrapper}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <View style={[styles.box, { width }]}>
          <FlatList
            numColumns={5}
            data={featureData.data[0]}
            renderItem={renderItem}
          />
          <FlatList
            numColumns={5}
            data={featureData.data[1]}
            renderItem={renderItem}
          />
        </View>
        <View style={[styles.box, { width }]}>
          <FlatList
            numColumns={5}
            data={featureData.data[2]}
            renderItem={renderItem}
          />
          <FlatList
            numColumns={5}
            data={featureData.data[3]}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  foodMenuWrapper: {
    backgroundColor: '#eee',
  },
  box: {},
  menuItem: {
    flex: 1,
    height: 90,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  menuItemImg: {
    width: 45,
    height: 45,
  },
  menuItemText: {},
});

export default FoodMenu;
