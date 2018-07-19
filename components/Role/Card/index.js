import React from 'react';
import styles from './styles';
import { compose, withHandlers } from 'recompose';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { View, TextInput } from 'react-native';

let RoleCard = ({ role, updateRole }) =>
  <View style={styles.role}>
    <TextInput
      style={styles.roleHeader}
      returnKeyType="done"
      onEndEditing={updateRole}
    >{role.title}</TextInput>
  </View>

let update = gql`
mutation UpdateRole($id: ID!, $input: RoleInput!) {
  updateRole(id: $id, input: $input) {
    title
    id
  }
}
`;

let enhance = compose (
  graphql(update, { name: 'update' }),
  withHandlers({
    updateRole: ({ update, role }) => (e) =>
      update({ variables: { id: role.id, input: { title: e.nativeEvent.text }} })
  })
);

export default enhance(RoleCard);