import React from 'react';
import { compose, branch, renderNothing } from 'recompose';
import { graphql } from 'react-apollo';
import { ReadRoles, CreateRole } from '../../../../graphql/role.gql';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScreenView from '../../../ScreenView';
import RoleList from '../../../Role/List';

let RolesScreen = ({ roles, createRole }) =>
  <ScreenView>
    <TouchableOpacity onPress={() => createRole()}>
      <Ionicons name="ios-add" size={25} color="blue" />
    </TouchableOpacity>
    <RoleList roles={roles} />
  </ScreenView>

let nothingWhileLoading = (isLoading) => branch(isLoading, renderNothing);

let enhance = compose(
  graphql(ReadRoles, {
    props: ({ data: { loading, roles, updateQuery } }) => ({
      loading, roles, updateQuery
    })
  }),
  graphql(CreateRole, {
    name: 'createRole',
    options: ({ updateQuery }) => ({
      variables: {
        input: {
          title: "Press to edit"
        }
      },
      update: (_, { data: { createRole } }) =>
        updateQuery((prev) => ({
          ...prev, roles: [ ...prev.roles, createRole ]
        })
      )
    })
  }),
  nothingWhileLoading(({ loading }) => loading)
);

export default enhance(RolesScreen);