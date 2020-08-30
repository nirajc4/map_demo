import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const width = Dimensions.get('window').width;

const AddressForm = ({onGetCurrentLocation, onAddressChange}) => {
  const [address, setAddress] = useState('');

  const confirmAddress = () => {
    onAddressChange(address);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.formContainer}>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={styles.inputStyle}
              placeholderTextColor="#fff"
              placeholder="Enter full address"
              autoFocus={false}
              value={address}
              onChangeText={(e) => setAddress(e)}
            />
            <TouchableOpacity
              onPress={confirmAddress}
              style={styles.submitButton}>
              <Text>Go</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.currentLocationButton}
            onPress={onGetCurrentLocation}>
            <Text style={styles.currentLocationButtonText}>
              Get Current Location
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 5,
    right: 5,
  },
  innerContainer: {
    height: 150,
    width: width - 10,
    backgroundColor: '#fff',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  formContainer: {
    marginTop: 10,
    marginLeft: 15,
  },
  inputStyle: {
    backgroundColor: 'grey',
    width: width - 80,
    height: 50,
    fontSize: 12,
    paddingLeft: 15,
    borderRadius: 25,
    color: '#fff',
  },
  submitButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentLocationButton: {
    height: 50,
    marginTop: 20,
    borderWidth: 0.5,
    width: width - 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#35364E',
  },
  currentLocationButtonText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#35364E',
  },
});

AddressForm.prototype = {
  onGetCurrentLocation: PropTypes.func,
  onAddressChange: PropTypes.func,
};

AddressForm.defaultProps = {
  onGetCurrentLocation: () => {},
  onAddressChange: () => {},
};

export default AddressForm;
