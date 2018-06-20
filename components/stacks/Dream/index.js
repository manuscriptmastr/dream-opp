import { createMaterialTopTabNavigator } from 'react-navigation';
import RolesScreen from '../../screens/Dream/Roles';
import ToolsScreen from '../../screens/Dream/Tools';
import TeamsScreen from '../../screens/Dream/Teams';

let DreamStack = createMaterialTopTabNavigator(
  {
    Roles: RolesScreen,
    Tools: ToolsScreen,
    Teams: TeamsScreen
  },
  {
    navigationOptions: () => ({
      tabBarOptions: {
        style: {
          backgroundColor: 'white'
        },
        labelStyle: {
          fontWeight: '700',
          color: 'black'
        },
        indicatorStyle: {
          backgroundColor: 'blue'
        }
      }
    })
  }
);

export default DreamStack;