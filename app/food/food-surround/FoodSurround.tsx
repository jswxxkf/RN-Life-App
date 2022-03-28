import React, { memo, useEffect, useState } from 'react';
// sub cpn
import {
  StyleSheet,
  Text,
  View,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import SurroundItem from './c-cpns/SurroundItem';
// utils
import Geolocation from 'react-native-geolocation-service';

const FoodSurround = memo(() => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    // 拿到坐标后，发送与地理位置相关的请求
  }, [longitude, latitude]);

  useEffect(() => {
    requestPermissions()
      .then(() => {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          error => console.log(error.code, error.message),
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 10000,
          },
        );
      })
      .catch(err => console.log(err));
  }, []);

  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        'android.permission.ACCESS_FINE_LOCATION',
      );
    } else if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('whenInUse');
    }
  };

  return (
    <View style={styles.foodSurroundWrapper}>
      <Text style={styles.title}>周边美食</Text>
      {new Array(4).fill(0).map((_, index) => {
        return <SurroundItem key={index} />;
      })}
    </View>
  );
});

const styles = StyleSheet.create({
  foodSurroundWrapper: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
});

export default FoodSurround;
