import {Dimensions} from 'react-native';
// import React, {Component} from 'react';
const {width, height} = Dimensions.get('window');
const configs = {
  width,
  height,
  colors: {
    label: '#757575',
    text: '#565656',
    placeholderTextColor: '#B7BEC9',
    black: '#000',
    blue: '#0041FF',
    grey: '#ddd',
    white: '#fff',
  },
  fontSize: {
    extraLarge: 18,
    large: 16,
    normal: 14,
    small: 12,
  },
  globalStyle: {
    borderRadius: 10,
  },
};

export default configs;
