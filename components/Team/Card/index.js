import React from 'react';
import styles from './styles';
import { View, Text } from 'react-native';

let TeamCard = ({ team }) =>
  <View style={styles.team}>
    <Text style={styles.teamHeader}>{team.title}</Text>
  </View>

export default TeamCard;