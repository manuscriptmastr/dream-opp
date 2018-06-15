import { createBottomTabNavigator } from 'react-navigation';
import HomeStack from '../stacks/Home/index';
import DiscoverStack from '../stacks/Discover/index';
import DreamStack from '../stacks/Dream/index';
import PlanStack from '../stacks/Plan/index';

let BottomNav = createBottomTabNavigator(
  {
    Home: HomeStack,
    Discover: DiscoverStack,
    Dream: DreamStack,
    Plan: PlanStack
  }
);

export default BottomNav;