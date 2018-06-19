import React from 'react';
import styles from './styles';
import { View, Text } from 'react-native';

let OppListItem = ({ opp }) =>
  <View style={styles.oppListItem} >
    <View style={styles.opp} >
      <Text style={styles.oppTitle}>{opp.title}</Text>
      <Text>{opp.description}</Text>
    </View>
  </View>

export default OppListItem;