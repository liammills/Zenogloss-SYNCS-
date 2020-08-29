import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Inbox from '../screens/Inbox';
import Messages from '../screens/Messages';
import NewMatch from '../screens/NewMatch';
import RandomMatch from '../screens/RandomMatch';
import FilteredSearch from '../screens/FilteredSearch';
import SearchByUsername from '../screens/SearchByUsername';
import Profile from '../screens/Profile';

const Tab = createMaterialBottomTabNavigator();

const InboxStack = createStackNavigator();
const MatchStack = createStackNavigator();
const ProfileStack = createStackNavigator();

export default MainTab = () => {
  return (
    <Tab.Navigator
    initialRouteName="MatchStack"
    activeColor="#EC1950"
    inactiveColor="#404040"
    labeled = 'false'
    barStyle={{ backgroundColor: '#E4E0C9' }}
    >
      <Tab.Screen
        name="InboxStackScreen"
        component={InboxStackScreen}
        options={{
          tabBarLabel: 'Inbox',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="message-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="MatchStackScreen"
        component={MatchStackScreen}
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


const MatchStackScreen = ({navigation}) => (
 <MatchStack.Navigator initialRouteName="NewMatch">
   <MatchStack.Screen name="NewMatch" component={NewMatch} options={{headerShown:false}}/>
   <MatchStack.Screen name="FilteredSearch" component={FilteredSearch} options={{headerShown:false}}/>
   <MatchStack.Screen name="RandomMatch" component={RandomMatch} options={{headerShown:false}}/>
   <MatchStack.Screen name="SearchByUsername" component={SearchByUsername} options={{headerShown:false}}/>
 </MatchStack.Navigator>
);

const InboxStackScreen = ({navigation}) => (
 <InboxStack.Navigator initialRouteName="Inbox">
   <InboxStack.Screen name="Inbox" component={Inbox} options={{headerShown:false}}/>
   <InboxStack.Screen name="Messages" component={Messages} options={{headerShown:false}}/>
 </InboxStack.Navigator>
);
