import React from 'react';
import styles from './styles';
import { View } from 'react-native';
import OppList from '../../OppList/index';

let testJobs = [
  {
    role: 'Front End Developer',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aspernatur esse officiis magnam quos est beatae sed. Ipsum, nobis reiciendis.',
    team: {
      name: 'Airbnb',
      imgUrl: 'https://www.shareicon.net/data/128x128/2016/07/10/119904_airbnb_512x512.png'
    }
  },
  {
    role: 'DevOps Engineer',
    description: 'Ipsum dolor sit amet consectetur adipisicing elit. Eos aspernatur esse officiis magnam quos est beatae sed.',
    team: {
      name: 'Stitch Fix',
      imgUrl: 'https://www.bbb.org/ProfileImages/a1682585-0b9d-4916-8851-7d407ec8ba7a.png'
    }
  },
  {
    role: 'Back End Developer',
    description: 'Cookie cheesecake whataburger omega fish oil cucumber burger bacon philly steak chicken corn stew.',
    team: {
      name: 'Apple',
      imgUrl: 'https://image.freepik.com/free-icon/apple-logo_318-40184.jpg'
    }
  }
]

let HomeScreen = () =>
  <View style={styles.screen}>
    <OppList opps={testJobs} />  
  </View>

export default HomeScreen;