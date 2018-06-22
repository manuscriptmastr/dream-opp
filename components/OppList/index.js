import React from 'react';
import styles from './styles';
import { ScrollView, View, Text } from 'react-native';
import OppCard from '../OppCard';

let OppList = ({ opps }) =>
  <ScrollView style={styles.oppList} >
    {opps.map((opp) =>
      <View key={opp.id} style={styles.oppListItem} >
        <OppCard opp={opp} >
          <Text>Skills</Text>
          <Text>Plan</Text>
        </OppCard>
      </View>
    )}
  </ScrollView>

export default OppList;
