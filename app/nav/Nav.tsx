import React, { memo } from 'react';
// sub cpn
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import KfTabBar from './tab-bar/TabBar';
import Food from '../food/Food';
import Hotel from '../hotel/Hotel';
import Bank from '../bank/Bank';
import Movie from '../movie/Movie';

const Tab = createBottomTabNavigator();

const Nav = memo(() => {
  return (
    <Tab.Navigator
      tabBar={props => <KfTabBar {...props} />}
      initialRouteName="美食"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="美食" component={Food} />
      <Tab.Screen name="酒店" component={Hotel} />
      <Tab.Screen name="银行" component={Bank} />
      <Tab.Screen name="影院" component={Movie} />
    </Tab.Navigator>
  );
});

export default Nav;
