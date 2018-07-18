import React from 'react';
import { compose, mapProps, branch, renderNothing } from 'recompose';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import ScreenView from '../../../ScreenView';
import ToolList from '../../../Tool/List';

let ToolsScreen = ({ tools }) =>
  <ScreenView>
    <ToolList tools={tools} />
  </ScreenView>

let query = gql`
query {
  tools {
    id
    title
  }
}
`;

let nothingWhileLoading = (isLoading) => branch(isLoading, renderNothing);

let enhance = compose(
  graphql(query),
  nothingWhileLoading(({ data: { loading } }) => loading),
  mapProps(({ data, ...props }) => ({ ...data, ...props }))
);

export default enhance(ToolsScreen);