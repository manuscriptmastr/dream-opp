import React from 'react';
import styles from './styles';
import { ScrollView, View } from 'react-native';
import RoleCard from '../Card';

let RoleList = ({ roles, ...props }) =>
  <ScrollView style={styles.roleList}>
    {roles.map(role =>
      <View key={role.id} style={styles.roleListItem} >
        <RoleCard role={role} {...props} />
      </View>
    )}
  </ScrollView>

export default RoleList;