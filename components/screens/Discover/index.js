import React from 'react';
import { compose, mapProps, branch, renderNothing } from 'recompose';
import { Text } from 'react-native';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import ScreenView from '../../ScreenView';
import OppList from '../../Opp/List';

let DiscoverScreen = ({ opps }) =>
  <ScreenView>
    <OppList opps={opps} >
      <Text>Bookmark</Text>
      <Text>Hide</Text>
    </OppList>
  </ScreenView>

let query = gql`
query {
  opps(input: { bookmarked: false }) {
    id
    role {
      title
    }
    team {
      title
      url
      imgUrl
    }
    description
  }
}
`;

let nothingWhileLoading = (isLoading) => branch(isLoading, renderNothing);

let enhance = compose(
  graphql(query),
  nothingWhileLoading(({ data: { loading } }) => loading),
  mapProps(({ data, ...props }) => ({ ...data, ...props }))
);

export default enhance(DiscoverScreen);