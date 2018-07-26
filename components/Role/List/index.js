import React from 'react';
import styles from './styles';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RoleCard from '../Card';

let RoleList = ({ roles, updateRoles }) =>
  <KeyboardAwareScrollView style={styles.roleList}>
    {roles.map(role =>
      <View key={role.id} style={styles.roleListItem} >
        <RoleCard role={role} updateRoles={updateRoles} />
      </View>
    )}
  </KeyboardAwareScrollView>

export default RoleList;