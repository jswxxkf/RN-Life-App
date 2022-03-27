import React, { memo, useEffect, useState } from 'react';
// sub cpn
import { Text, View } from 'react-native';
import Launcher from './launcher/Launcher';
import { NavigationContainer } from '@react-navigation/native';
import Nav from './nav/Nav';

const Base = memo(() => {
  const [isShowLauncher, setIsShowLauncher] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowLauncher(false);
    }, 1000);
  }, []);

  return (
    <NavigationContainer>
      {isShowLauncher ? <Launcher /> : <Nav />}
    </NavigationContainer>
  );
});

export default Base;
