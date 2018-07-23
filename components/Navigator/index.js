import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStack from '../stacks/Home';
import DiscoverStack from '../stacks/Discover';
import DreamStack from '../stacks/Dream';
import PlanStack from '../stacks/Plan';

let getIcon = (navigation, focused) => {
  let lib = {
    Home: {
      name: 'home',
      focused: '',
      unfocused: '-outline'
    },
    Discover: {
      name: 'search',
      focused: '',
      unfocused: ''
    },
    Dream: {
      name: 'cloud',
      focused: '',
      unfocused: '-outline'
    },
    Plan: {
      name: 'list',
      focused: '-box',
      unfocused: ''
    }
  }
  let route = navigation.state.routeName;
  let icon = lib[route];
  let prefix = 'ios-';
  let infix = icon.name;
  let suffix = focused ? icon.focused : icon.unfocused;
  return `${prefix}${infix}${suffix}`;
};

let Navigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Discover: DiscoverStack,
    Dream: DreamStack,
    Plan: PlanStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        <Ionicons name={getIcon(navigation, focused)} size={25} color={tintColor} />
    })
  }
);

export default Navigator;