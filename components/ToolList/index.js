import React from 'react';
import styles from './styles';
import { ScrollView, View } from 'react-native';
import ToolCard from '../ToolCard';

let ToolList = ({ tools }) =>
  <ScrollView style={styles.toolList}>
    {tools.map(tool =>
      <View key={tool.id} style={styles.toolListItem} >
        <ToolCard tool={tool} />
      </View>
    )}
  </ScrollView>

export default ToolList;