import React from 'react';
import styles from './styles';
import { View, Text } from 'react-native';

let ToolCard = ({ tool }) =>
  <View style={styles.tool}>
    <Text style={styles.toolHeader}>{tool.title}</Text>
  </View>

export default ToolCard;