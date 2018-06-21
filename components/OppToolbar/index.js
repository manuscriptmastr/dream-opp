import React from 'react';
import styles from './styles';
import { compose, withState, withHandlers } from 'recompose';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

let OppToolbar = ({ opp, isVisible, toggleVisibility }) =>
  <View style={styles.oppToolbar} >
    <Ionicons
      style={styles.oppMore}
      name="ios-more"
      size={isVisible ? 30 : 20}
      onPress={toggleVisibility}
    />
  </View>

let enhance = compose(
  withState('isVisible', 'setVisibility', false),
  withHandlers({
    toggleVisibility: ({ setVisibility }) => () => setVisibility(v => !v)
  })
);

export default enhance(OppToolbar);