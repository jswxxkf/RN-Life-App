import React, { memo } from 'react';
// style
import { globalStyle } from '../../global/style';
// sub cpn
import { Text, View } from 'react-native';

const Hotel = memo(() => {
  return (
    <View style={[globalStyle.navScreen]}>
      <Text>Hotel</Text>
    </View>
  );
});

export default Hotel;
