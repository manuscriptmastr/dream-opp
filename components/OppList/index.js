import React from 'react';
import styles from './styles';
import { ScrollView } from 'react-native';
import OppListItem from '../OppListItem';

let OppList = ({ opps }) =>
  <ScrollView style={styles.oppList} >
    {opps.map((opp, i) =>
      <OppListItem key={i} opp={opp} />
    )}
  </ScrollView>;

export default OppList;
