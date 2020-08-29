import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Inbox from '../screens/Inbox';
import NewMatch from '../screens/NewMatch';
import Profile from '../screens/Profile';

const Tab = createMaterialBottomTabNavigator();

const InboxStack = createStackNavigator();
const MatchStack = createStackNavigator();
const ProfileStack = createStackNavigator();

export default MainTab = () => {
  return (
    <Tab.Navigator
    initialRouteName="NewMatch"
    activeColor="#EC1950"
    inactiveColor="#404040"
    labeled = 'false'
    barStyle={{ backgroundColor: '#E4E0C9' }}
    >
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarLabel: 'Inbox',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="message-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="NewMatch"
        component={NewMatch}
        options={{
          tabBarLabel: 'Match',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus-circle-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
