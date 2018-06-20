import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../../screens/Home';

let HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    navigationOptions: () => ({
      title: 'Home'
    })
  }
);

export default HomeStack;