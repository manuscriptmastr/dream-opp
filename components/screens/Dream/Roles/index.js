import React from 'react';
import { compose, mapProps, branch, renderNothing, withHandlers } from 'recompose';
import { graphql, withApollo } from 'react-apollo';
import { ReadRoles, CreateRole } from '../../../../graphql/role.gql';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScreenView from '../../../ScreenView';
import RoleList from '../../../Role/List';

let RolesScreen = ({ roles, createRole }) =>
  <ScreenView>
    <TouchableOpacity onPress={createRole}>
      <Ionicons name="ios-add" size={25} color="blue" />
    </TouchableOpacity>
    <RoleList roles={roles} />
  </ScreenView>

let nothingWhileLoading = (isLoading) => branch(isLoading, renderNothing);

let enhance = compose(
  withApollo,
  graphql(ReadRoles),
  graphql(CreateRole, { name: 'create' }),
  nothingWhileLoading(({ data: { loading } }) => loading),
  mapProps(({ data, ...props }) => ({ ...data, ...props })),
  withHandlers({
    createRole: ({ create, client }) => () => {
      create({
        variables: {
          input: {
            title: "Press to edit"
          }
        }
      });
      client.resetStore();
    }
  })
);

export default enhance(RolesScreen);