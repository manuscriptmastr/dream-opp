import React from 'react';
import styles from './styles';
import { View, Text, Image } from 'react-native';
import OppBookmark from '../OppBookmark';
import OppToolbar from '../OppToolbar';

let OppCard = ({ opp, children }) =>
  <View style={styles.opp} >
    <OppBookmark opp={opp} />
    <View style={styles.oppHeader}>
      <Image style={styles.oppAvatar} source={{ uri: opp.team.imgUrl }} />
      <Text style={styles.oppTitle}>{opp.team.title} wants you for their next {opp.role.title}.</Text>
    </View>
    <Text>{opp.description}</Text>
    <OppToolbar opp={opp} >
      {children}
    </OppToolbar>
  </View>

export default OppCard;