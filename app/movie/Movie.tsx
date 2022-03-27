import React, { memo } from 'react';
// style
import { globalStyle } from '../../global/style';
// sub cpn
import { Text, View } from 'react-native';

const Movie = memo(() => {
  return (
    <View style={[globalStyle.navScreen]}>
      <Text>Movie</Text>
    </View>
  );
});

export default Movie;
