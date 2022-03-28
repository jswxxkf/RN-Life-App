import React, { memo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
// styles
import { baseColor } from '../../../global/style';
import MerchantItem from './c-cpns/MerchantItem';
// config
import merchants from './config/merchants.json';
// types
import { IMerchant } from './types/type';

const FoodSale = memo(() => {
  return (
    <View style={styles.foodSaleWrapper}>
      <View style={styles.header}>
        <Text style={styles.title}>超值特惠</Text>
        <Text style={styles.more}>更多特惠{'>'}</Text>
      </View>
      <View style={styles.content}>
        {merchants.map((merchant: IMerchant) => {
          return <MerchantItem key={merchant.title} {...merchant} />;
        })}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  foodSaleWrapper: {
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
  },
  header: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: baseColor,
  },
  more: {
    fontSize: 16,
    color: 'gray',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default FoodSale;
