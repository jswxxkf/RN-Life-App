import React, { memo } from 'react';
// sub cpn
import { Image, Text, View, useWindowDimensions } from 'react-native';

const Launcher = memo(() => {
  const { width, height, scale } = useWindowDimensions();

  return (
    <View>
      <Image source={{ uri: 'launcher_image' }} style={{ width, height }} />
    </View>
  );
});

export default Launcher;
