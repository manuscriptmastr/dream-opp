import React from 'react';
import styles from './styles';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import { UpdateTeam, DestroyTeam } from '../../../graphql/team.gql'
import { View, TextInput, Button } from 'react-native';

let TeamCard = ({ team, updateTeam, destroyTeam }) =>
  <View style={styles.team}>
    <TextInput
      style={styles.teamHeader}
      returnKeyType="done"
      onEndEditing={(e) => updateTeam({ title: e.nativeEvent.text })}
    >{team.title}</TextInput>
    <TextInput
      style={styles.teamHeader}
      returnKeyType="done"
      onEndEditing={(e) => updateTeam({ url: e.nativeEvent.text })}
    >{team.url}</TextInput>
    <Button title="Delete" onPress={() => destroyTeam()} />
  </View>

let enhance = compose (
  graphql(UpdateTeam, {
    name: 'updateTeam',
    props: ({ updateTeam, ownProps: { team: { id, title, url } } }) => ({
      updateTeam: (input) => {
        let oldInput = { title, url };
        return updateTeam({
          variables: {
            id,
            input: { ...oldInput, ...input }
          }
        })
      }
    })
  }),
  graphql(DestroyTeam, {
    name: 'destroyTeam',
    options: ({ team: { id }, updateTeams }) => ({
      variables: { id },
      update: () =>
        updateTeams((prev) => ({
          ...prev, teams: prev.teams.filter(team => team.id !== id)
        })
      )
    })
  })
);

export default enhance(TeamCard);