import React from 'react';
import styles from './styles';
import { View, Text } from 'react-native';

let RoleCard = ({ role }) =>
  <View style={styles.role}>
    <Text style={styles.roleHeader}>{role.title}</Text>
  </View>

export default RoleCard;