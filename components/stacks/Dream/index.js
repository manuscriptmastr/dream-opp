import { createStackNavigator } from 'react-navigation';
import DreamScreen from '../../screens/Dream/index';

let DreamStack = createStackNavigator(
  {
    Dream: DreamScreen
  }
);

export default DreamStack;