import React from 'react';
import styles from './styles';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TeamCard from '../Card';

let TeamList = ({ teams, updateTeams }) =>
  <KeyboardAwareScrollView style={styles.teamList}>
    {teams.map(team =>
      <View key={team.id} style={styles.teamListItem} >
        <TeamCard team={team} updateTeams={updateTeams} />
      </View>
    )}
  </KeyboardAwareScrollView>

export default TeamList;