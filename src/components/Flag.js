import React from 'react';
import PropTypes from 'prop-types';

// React Native
import { StyleSheet, View } from 'react-native';
// Styles
const styles = StyleSheet.create({
  container: {
    marginTop: 1,
  },
  flagpole: {
    position: 'absolute',
    height: 14,
    width: 2,
    backgroundColor: '#222',
    marginLeft: 10,
    marginTop: 2
  },
  flag: {
    position: 'absolute',
    height: 5,
    width: 6,
    backgroundColor: '#F22',
    marginLeft: 4,
    marginTop: 2
  },
  base1: {
    position: 'absolute',
    height: 2,
    width: 6,
    backgroundColor: '#F22',
    marginLeft: 8,
    marginTop: 12
  },
  base2: {
    position: 'absolute',
    height: 2,
    width: 10,
    backgroundColor: '#222',
    marginLeft: 6,
    marginTop: 14
  },
  flagpoleBigger: {
    height: 28,
    width: 4,
    marginLeft: 16
  },
  flagBigger: {
    height: 10,
    width: 14,
    marginLeft: 2,
  },
  base1Bigger: {
    height: 4,
    width: 12,
    marginTop: 22,
    marginLeft: 12
  },
  base2Bigger: {
    height: 4,
    width: 20,
    marginTop: 26,
    marginLeft: 8
  }
});

const Flag = props => {
  return (
    <View style={styles.container}>
        <View style={[
          styles.flagpole, 
          props.bigger ? styles.flagpoleBigger : null
          ]} 
        />
        <View style={[
          styles.flag, 
          props.bigger ? styles.flagBigger : null
          ]} 
        />
        <View style={[
          styles.base1, 
          props.bigger ? styles.base1Bigger : null
          ]} 
        />
        <View style={[
          styles.base2, 
          props.bigger ? styles.base2Bigger : null
          ]} 
        />
    </View>
  );
};

export default Flag;