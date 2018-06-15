import { createStackNavigator } from 'react-navigation';
import DiscoverScreen from '../../screens/Discover/index';

let DiscoverStack = createStackNavigator(
  {
    Discover: DiscoverScreen
  }
);

export default DiscoverStack;