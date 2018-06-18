import { createMaterialTopTabNavigator } from 'react-navigation';
import RolesScreen from '../../screens/Dream/Roles/index';
import ToolsScreen from '../../screens/Dream/Tools/index';
import TeamsScreen from '../../screens/Dream/Teams/index';

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