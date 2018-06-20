import React from 'react';
import styles from './styles';
import { View, Text, Image } from 'react-native';

let OppCard = ({ opp }) =>
  <View style={styles.opp} >
    <View style={styles.oppHeader}>
      <Image style={styles.oppAvatar} source={{ uri: opp.team.imgUrl }} />
      <Text style={styles.oppTitle}>{opp.team.name} wants you for their next {opp.role}.</Text>
    </View>
    <Text>{opp.description}</Text>
  </View>

export default OppCard;