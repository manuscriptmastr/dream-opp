import React from 'react';
import { compose, mapProps, branch, renderNothing } from 'recompose';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import ScreenView from '../../../ScreenView';
import TeamList from '../../../Team/List';

let TeamsScreen = ({ teams }) =>
  <ScreenView>
    <TeamList teams={teams} />
  </ScreenView>

let query = gql`
query {
  teams {
    id
    title
    url
    imgUrl
  }
}
`;

let nothingWhileLoading = (isLoading) => branch(isLoading, renderNothing);

let enhance = compose(
  graphql(query),
  nothingWhileLoading(({ data: { loading } }) => loading),
  mapProps(({ data, ...props }) => ({ ...data, ...props }))
);

export default enhance(TeamsScreen);