import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const width = Dimensions.get('window').width;

const Header = ({title}) => (
  <View style={styles.container}>
    <View style={styles.titleParent}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {position: 'absolute', top: 0},
  titleParent: {
    height: 50,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(53,53,53,0.1)',
    borderRadius: 10,
  },
  title: {fontSize: 24, fontWeight: '700', color: '#35363A'},
});

Header.prototype = {
  title: PropTypes.string.isRequired,
};

export default Header;
