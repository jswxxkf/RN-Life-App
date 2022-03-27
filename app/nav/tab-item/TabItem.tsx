import React, { memo } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { baseColor } from '../../../global/style';

interface ITabITemProps {
  image: string;
  label: string;
  isFocused: boolean;
}

const TabItem = memo((props: ITabITemProps) => {
  const { image, label, isFocused } = props;

  return (
    <View style={styles.tabItemWrapper}>
      <Image
        source={{ uri: image }}
        style={[styles.tabImg, { tintColor: isFocused ? baseColor : 'gray' }]}
      />
      <Text style={[styles.tabText, { color: isFocused ? baseColor : 'gray' }]}>
        {label}
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  tabItemWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  tabImg: {
    width: 24,
    height: 24,
  },
  tabText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default TabItem;
