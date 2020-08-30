import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Alert
} from 'react-native';

import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Header from './components/Header';
import AddressForm from './components/AddressForm';

const Dashboard = () => {
  const [location, setLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });

  useEffect(() => {
    currentLocation();
  }, []);

  const alert = (data) => {
    Alert.alert(
      'Location Coordinates',
      `latitude is ${data.latitude} , longitude is ${data.longitude}`,
    );
    return 0;
  };

  const getCurrentLocation = () => {
    currentLocation();
    alert(location);
  };

  const currentLocation = () => {
    Geolocation.getCurrentPosition((info) =>
      setLocation({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
      }),
    );
  };

  const onAddressChange = (address) => {
    console.log('address -> ', address)
  };

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          ...location,
          latitudeDelta: 0.050,
          longitudeDelta: 0.0200,
        }}
      />
      <Header title="Select delivery location" />
      <AddressForm
        onAddressChange={onAddressChange}
        onGetCurrentLocation={getCurrentLocation}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Dashboard;
