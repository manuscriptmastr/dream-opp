import React from 'react';
import styles from './styles';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import { UpdateRole, DestroyRole } from '../../../graphql/role.gql'
import { View, TextInput, Button } from 'react-native';

let RoleCard = ({ role, updateRole, destroyRole }) =>
  <View style={styles.role}>
    <TextInput
      style={styles.roleHeader}
      returnKeyType="done"
      onEndEditing={(e) => updateRole({ title: e.nativeEvent.text })}
    >{role.title}</TextInput>
    {/* <Button title="Delete" onPress={destroyRole} /> */}
  </View>

let enhance = compose (
  graphql(UpdateRole, {
    name: 'updateRole',
    props: ({ updateRole, ownProps: { role: { id } } }) => ({
      updateRole: (input) => updateRole({
        variables: {
          id,
          input
        }
      })
    })
  }),
  // graphql(DestroyRole, {
  //   name: 'destroyRole'
  // }),
  // withHandlers({
  //   updateRole: ({ update, role: { id } }) => (e) =>
  //     update({
  //       variables: {
  //         id,
  //         input: {
  //           title: e.nativeEvent.text
  //         }
  //       }
  //     }),
  //   destroyRole: ({ destroy, role: { id }, client }) => () => {
  //     destroy({ variables: { id } });
  //     client.resetStore();
  //   }
  // })
);

export default enhance(RoleCard);