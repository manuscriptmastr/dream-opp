import React from 'react';
import { compose, branch, renderNothing } from 'recompose';
import { graphql } from 'react-apollo';
import { ReadOpps } from '../../../graphql/opp.gql';
import { Text } from 'react-native';
import ScreenView from '../../ScreenView';
import OppList from '../../Opp/List';

let HomeScreen = ({ opps }) =>
  <ScreenView>
    <OppList opps={opps} >
      <Text>Skills</Text>
      <Text>Plan</Text>
    </OppList>
  </ScreenView>

let nothingWhileLoading = (isLoading) => branch(isLoading, renderNothing);

let enhance = compose(
  graphql(ReadOpps, {
    props: ({ data: { loading, opps, updateQuery: updateOpps } }) => ({
      loading, opps, updateOpps
    }),
    options: {
      variables: {
        input: {
          bookmarked: true
        }
      }
    }
  }),
  nothingWhileLoading(({ loading }) => loading),
);

export default enhance(HomeScreen);