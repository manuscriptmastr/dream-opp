import React from 'react';
import styles from './styles';
import { View, TextInput } from 'react-native';

let RoleCard = ({ role }) =>
  <View style={styles.role}>
    <TextInput
      style={styles.roleHeader}
      returnKeyType="done"
    >{role.title}</TextInput>
  </View>

export default RoleCard;