import React, { memo } from 'react';
// style
import { globalStyle } from '../../global/style';
// sub cpn
import { Text, View } from 'react-native';

const Bank = memo(() => {
  return (
    <View style={[globalStyle.navScreen]}>
      <Text>Bank</Text>
    </View>
  );
});

export default Bank;
