import React from 'react';
import styles from './styles';
import { View } from 'react-native';

let ScreenView = ({ children }) =>
  <View style={styles.screen}>
    {children}
  </View>

export default ScreenView;