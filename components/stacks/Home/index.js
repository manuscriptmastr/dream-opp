import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../../screens/Home/index';

let HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  }
);

export default HomeStack;