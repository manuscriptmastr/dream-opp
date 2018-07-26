import React from 'react';
import styles from './styles';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import { UpdateTool, DestroyTool } from '../../../graphql/tool.gql'
import { View, TextInput, Button } from 'react-native';

let ToolCard = ({ tool, updateTool, destroyTool }) =>
  <View style={styles.tool}>
    <TextInput
      style={styles.toolHeader}
      returnKeyType="done"
      onEndEditing={(e) => updateTool({ title: e.nativeEvent.text })}
    >{tool.title}</TextInput>
    <Button title="Delete" onPress={() => destroyTool()} />
  </View>

let enhance = compose (
  graphql(UpdateTool, {
    name: 'updateTool',
    props: ({ updateTool, ownProps: { tool: { id } } }) => ({
      updateTool: (input) => updateTool({
        variables: {
          id,
          input
        }
      })
    })
  }),
  graphql(DestroyTool, {
    name: 'destroyTool',
    options: ({ tool: { id }, updateTools }) => ({
      variables: { id },
      update: () =>
        updateTools((prev) => ({
          ...prev, tools: prev.tools.filter(tool => tool.id !== id)
        })
      )
    })
  })
);

export default enhance(ToolCard);