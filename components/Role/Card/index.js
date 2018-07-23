import React from 'react';
import styles from './styles';
import { compose, withHandlers } from 'recompose';
import { graphql, withApollo } from 'react-apollo';
import { UpdateRole, DestroyRole } from '../../../graphql/role.gql'
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

let enhance = compose (
  withApollo,
  graphql(UpdateRole, { name: 'update' }),
  graphql(DestroyRole, { name: 'destroy' }),
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