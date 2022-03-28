import React, { memo } from 'react';
// style
import { globalStyle } from '../../global/style';
// sub cpn
import { ScrollView, Text, View } from 'react-native';
import FoodTop from './food-top/FoodTop';
import FoodMenu from './food-menu/FoodMenu';
import FoodSale from './food-sale/FoodSale';
import FoodSurround from './food-surround/FoodSurround';

const Food = memo(() => {
  return (
    <View style={[globalStyle.navScreen]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* 顶部 */}
        <FoodTop />
        {/* 菜单 */}
        <FoodMenu />
        {/* 超值特惠 */}
        <FoodSale />
        {/* 周边美食 */}
        <FoodSurround />
      </ScrollView>
    </View>
  );
});

export default Food;
