import React from 'react';
import styles from './styles';
import { ScrollView, View } from 'react-native';
import TeamCard from '../Card';

let TeamList = ({ teams, updateTeams }) =>
  <ScrollView style={styles.teamList}>
    {teams.map(team =>
      <View key={team.id} style={styles.teamListItem} >
        <TeamCard team={team} updateTeams={updateTeams} />
      </View>
    )}
  </ScrollView>

export default TeamList;