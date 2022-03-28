import React, { memo } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
// styles
import { baseColor } from '../../../../global/style';
// types
import { IMerchant } from '../types/type';

const MerchantItem = memo((props: IMerchant) => {
  const { id, pic, title, vipPrice, salePrice } = props;
  const { width } = useWindowDimensions();

  return (
    <View key={id} style={styles.merchant}>
      <Image
        source={{ uri: pic }}
        style={{ width: (width - 50) / 3, height: 80 }}
      />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.price}>
        <Text style={styles.vipPrice}>&yen;{vipPrice}</Text>
        <Text style={styles.salePrice}>&yen;{salePrice}</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  merchant: {
    flex: 1,
    height: 130,
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 14,
  },
  price: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
  },
  salePrice: {
    fontSize: 12,
    textDecorationLine: 'line-through',
  },
  vipPrice: {
    fontSize: 15,
    color: baseColor,
    fontWeight: '700',
  },
});

export default MerchantItem;
