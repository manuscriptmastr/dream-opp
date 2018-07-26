import React from 'react';
import { compose, branch, renderNothing } from 'recompose';
import { graphql } from 'react-apollo';
import { ReadTeams, CreateTeam } from '../../../../graphql/team.gql';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScreenView from '../../../ScreenView';
import TeamList from '../../../Team/List';

let TeamsScreen = ({ teams, createTeam, updateTeams }) =>
  <ScreenView>
    <TouchableOpacity onPress={() => createTeam()}>
      <Ionicons name="ios-add" size={25} color="blue" />
    </TouchableOpacity>
    <TeamList teams={teams} updateTeams={updateTeams} />
  </ScreenView>

let nothingWhileLoading = (isLoading) => branch(isLoading, renderNothing);

let enhance = compose(
  graphql(ReadTeams, {
    props: ({ data: { loading, teams, updateQuery: updateTeams } }) => ({
      loading, teams, updateTeams
    })
  }),
  graphql(CreateTeam, {
    name: 'createTeam',
    options: ({ updateTeams }) => ({
      variables: {
        input: {
          title: "Press to edit",
          url: "https://www.google.com/"
        }
      },
      update: (_, { data: { createTeam } }) =>
        updateTeams((prev) => ({
          ...prev, teams: [ ...prev.teams, createTeam ]
        })
      )
    })
  }),
  nothingWhileLoading(({ loading }) => loading)
);

export default enhance(TeamsScreen);