import React from 'react';
import styles from './styles';
import { compose, withHandlers } from 'recompose';
import { withApollo } from 'react-apollo'
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { View, TextInput, Button } from 'react-native';

let RoleCard = ({ role, updateRole, destroyRole }) =>
  <View style={styles.role}>
    <TextInput
      style={styles.roleHeader}
      returnKeyType="done"
      onEndEditing={updateRole}
    >{role.title}</TextInput>
    <Button title="Delete" onPress={destroyRole} />
  </View>

const UPDATE = gql`
mutation UpdateRole($id: ID!, $input: RoleInput!) {
  updateRole(id: $id, input: $input) {
    title
    id
  }
}
`;

const DESTROY = gql`
mutation DestroyRole($id: ID!) {
  destroyRole(id: $id) {
    title
    id
  }
}
`;

let enhance = compose (
  withApollo,
  graphql(UPDATE, { name: 'update' }),
  graphql(DESTROY, { name: 'destroy' }),
  withHandlers({
    updateRole: ({ update, role: { id } }) => (e) =>
      update({
        variables: {
          id,
          input: {
            title: e.nativeEvent.text
          }
        }
      }),
    destroyRole: ({ destroy, role: { id }, client }) => () => {
      destroy({ variables: { id } });
      client.resetStore();
    }
  })
);

export default enhance(RoleCard);