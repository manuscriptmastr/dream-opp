import React from 'react';
import styles from './styles';
import { compose, withState, withHandlers } from 'recompose';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

let OppToolbar = ({ opp, isVisible, toggleVisibility, children }) =>
  <View style={styles.oppToolbar} >
    {isVisible ? children : null}
    <Ionicons
      style={styles.oppMore}
      name="ios-more"
      size={30}
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