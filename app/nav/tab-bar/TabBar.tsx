import React, { memo, useCallback, useRef } from 'react';
// sub cpn
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
// types
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import TabItem from '../tab-item/TabItem';

const KfTabBar = memo((props: BottomTabBarProps) => {
  const { state, navigation, descriptors } = props;
  const { current: images } = useRef([
    'icon_food',
    'icon_hotel',
    'icon_bank',
    'icon_movie',
  ]);

  return (
    <View style={styles.tabBarWrapper}>
      {state.routes.map((route, index) => {
        const label = route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({
              name: route.name,
              merge: true,
              params: undefined,
            });
          }
        };

        return (
          <TouchableOpacity
            key={label}
            style={styles.tabItem}
            onPress={onPress}
          >
            <TabItem
              image={images[index]}
              label={label}
              isFocused={isFocused}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
});

const styles = StyleSheet.create({
  tabBarWrapper: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#ddd',
  },
  tabItem: {
    flex: 1,
  },
});

export default KfTabBar;
