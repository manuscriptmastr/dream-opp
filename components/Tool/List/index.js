import React from 'react';
import styles from './styles';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ToolCard from '../Card';

let ToolList = ({ tools, updateTools }) =>
  <KeyboardAwareScrollView style={styles.toolList}>
    {tools.map(tool =>
      <View key={tool.id} style={styles.toolListItem} >
        <ToolCard tool={tool} updateTools={updateTools} />
      </View>
    )}
  </KeyboardAwareScrollView>

export default ToolList;