import React from 'react';
import styles from './styles';
import { FlatList } from 'react-native';
import { withKeyProps } from '../../lib/helpers.js';
import OppListItem from '../OppListItem';

let OppList = ({ opps }) =>
  <FlatList
    style={styles.oppList}
    data={withKeyProps(opps)}
    renderItem={({ item }) =>
      <OppListItem key={item.key} opp={item} />
    }
  />;

export default OppList;