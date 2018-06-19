import React from 'react';
import styles from './styles';
import { View } from 'react-native';
import OppList from '../../OppList/index';

let testJobs = [
  {
    title: 'Airbnb wants you as their next front end developer!',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aspernatur esse officiis magnam quos est beatae sed. Ipsum, nobis reiciendis.'
  },
  {
    title: 'StitchFix wants you as their DevOps engineer!',
    description: 'Ipsum dolor sit amet consectetur adipisicing elit. Eos aspernatur esse officiis magnam quos est beatae sed.'
  },
  {
    title: 'Apple needs your expertise as a back end developer!',
    description: 'Cookie cheesecake whataburger omega fish oil cucumber burger bacon philly steak chicken corn stew.'
  }
]

let HomeScreen = () =>
  <View style={styles.screen}>
    <OppList opps={testJobs} />  
  </View>

export default HomeScreen;