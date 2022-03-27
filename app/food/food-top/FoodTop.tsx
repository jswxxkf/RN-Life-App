import React, { memo } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
// style
import { baseColor } from '../../../global/style';

const FoodTop = memo(() => {
  return (
    <View style={styles.foodTopWrapper}>
      <Text style={styles.citySelection}>广州市▼</Text>
      <View style={styles.searchBox}>
        <Image source={{ uri: 'icon_search' }} style={styles.searchImg} />
        <TextInput
          style={styles.searchInput}
          placeholder="请输入..."
          underlineColorAndroid="transparent"
        />
      </View>
      <Image source={{ uri: 'icon_user' }} style={styles.avatarImg} />
    </View>
  );
});

const styles = StyleSheet.create({
  foodTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    backgroundColor: baseColor,
  },
  citySelection: {
    paddingHorizontal: 8,
    color: '#fff',
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 32,
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingLeft: 12,
  },
  searchImg: {
    width: 20,
    height: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  avatarImg: {
    width: 30,
    height: 30,
    marginHorizontal: 8,
  },
});

export default FoodTop;
