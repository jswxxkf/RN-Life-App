import React, { memo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
// styles
import { baseColor } from '../../../../global/style';

const SurroundItem = memo(() => {
  return (
    <View style={styles.surroundItemWrapper}>
      <Image source={{ uri: 'mrfish' }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>店名: 天河店</Text>
        <Text style={styles.rating}>评分: 4.7</Text>
        <Text style={styles.category}>餐饮服务，中餐厅</Text>
      </View>
      <View>
        <Text style={styles.price}>&yen;20.00</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  surroundItemWrapper: {
    flexDirection: 'row',
    marginTop: 8,
    paddingBottom: 8,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  rating: {
    fontWeight: '700',
    fontSize: 16,
    color: 'gray',
  },
  category: {
    fontSize: 16,
    color: '#a4a4a4',
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: baseColor,
    marginLeft: 8,
    marginTop: 16,
  },
});

export default SurroundItem;
