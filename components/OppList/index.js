import React from 'react';
import styles from './styles';
import { ScrollView } from 'react-native';
import OppListItem from '../OppListItem';

let OppList = ({ opps }) =>
  <ScrollView style={styles.oppList} >
    {opps.map((opp) =>
      <OppListItem key={opp.id} opp={opp} />
    )}
  </ScrollView>

export default OppList;
