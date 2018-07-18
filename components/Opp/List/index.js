import React from 'react';
import styles from './styles';
import { ScrollView, View } from 'react-native';
import OppCard from '../Card';

let OppList = ({ opps, children }) =>
  <ScrollView style={styles.oppList} >
    {opps.map((opp) =>
      <View key={opp.id} style={styles.oppListItem} >
        <OppCard opp={opp} >
          {children}
        </OppCard>
      </View>
    )}
  </ScrollView>

export default OppList;
