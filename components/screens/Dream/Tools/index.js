import React from 'react';
import { compose, branch, renderNothing } from 'recompose';
import { graphql } from 'react-apollo';
import { ReadTools, CreateTool } from '../../../../graphql/tool.gql';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScreenView from '../../../ScreenView';
import ToolList from '../../../Tool/List';

let ToolsScreen = ({ tools, createTool, updateTools }) =>
  <ScreenView>
    <TouchableOpacity onPress={() => createTool()}>
      <Ionicons name="ios-add" size={25} color="blue" />
    </TouchableOpacity>
    <ToolList tools={tools} updateTools={updateTools} />
  </ScreenView>

let nothingWhileLoading = (isLoading) => branch(isLoading, renderNothing);

let enhance = compose(
  graphql(ReadTools, {
    props: ({ data: { loading, tools, updateQuery: updateTools } }) => ({
      loading, tools, updateTools
    })
  }),
  graphql(CreateTool, {
    name: 'createTool',
    options: ({ updateTools }) => ({
      variables: {
        input: {
          title: "Press to edit"
        }
      },
      update: (_, { data: { createTool } }) =>
        updateTools((prev) => ({
          ...prev, tools: [ ...prev.tools, createTool ]
        })
      )
    })
  }),
  nothingWhileLoading(({ loading }) => loading)
);

export default enhance(ToolsScreen);