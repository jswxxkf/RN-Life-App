import React, { memo, useCallback, useState } from 'react';
// sub cpn
import {
  StyleSheet,
  View,
  useWindowDimensions,
  Text,
  ScrollView,
  FlatList,
  Image,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
// styles
import { baseColor } from '../../../global/style';
// config
import featureData from './config/FeatureData.json';

const FoodMenu = memo(() => {
  const { width } = useWindowDimensions();
  const [currSlideNum, setCurrSlideNum] = useState(1);

  const renderItem = useCallback(({ item }) => {
    return (
      <View style={styles.menuItem}>
        <Image source={{ uri: item.image }} style={styles.menuItemImg} />
        <Text style={styles.menuItemText}>{item.title}</Text>
      </View>
    );
  }, []);

  const handleMomentumScrollEnd = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetX = event.nativeEvent.contentOffset.x;
      if (Math.round(offsetX) >= Math.round(width)) {
        setCurrSlideNum(2);
      } else {
        setCurrSlideNum(1);
      }
    },
    [width],
  );

  return (
    <View style={styles.foodMenuWrapper}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={e => handleMomentumScrollEnd(e)}
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
      <View style={styles.dotsArea}>
        <View
          style={[styles.dot, currSlideNum === 1 ? styles.activeDot : {}]}
        ></View>
        <View
          style={[styles.dot, currSlideNum === 2 ? styles.activeDot : {}]}
        ></View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  foodMenuWrapper: {
    backgroundColor: '#fff',
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
  dotsArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 10,
  },
  dot: {
    width: 6,
    height: 6,
    backgroundColor: '#ccc',
    borderRadius: 6,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: baseColor,
  },
});

export default FoodMenu;
