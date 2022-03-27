import React, { memo } from 'react';
// style
import { globalStyle } from '../../global/style';
// sub cpn
import { Text, View } from 'react-native';
import FoodTop from './food-top/FoodTop';
import FoodMenu from './food-menu/FoodMenu';

const Food = memo(() => {
  return (
    <View style={[globalStyle.navScreen]}>
      {/* 顶部 */}
      <FoodTop />
      {/* 菜单 */}
      <FoodMenu />
    </View>
  );
});

export default Food;
