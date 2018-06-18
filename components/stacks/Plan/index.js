import { createStackNavigator } from 'react-navigation';
import PlanScreen from '../../screens/Plan/index';

let PlanStack = createStackNavigator(
  {
    Plan: PlanScreen
  },
  {
    navigationOptions: () => ({
      title: 'Plan'
    })
  }
);

export default PlanStack;