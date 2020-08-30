import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

import Inbox from '../screens/Inbox';
import Messages from '../screens/Messages';
import NewMatch from '../screens/NewMatch';
import RandomMatch from '../screens/RandomMatch';
import NewLetter from '../screens/NewLetter';
import FilteredSearch from '../screens/FilteredSearch';
import SearchByUsername from '../screens/SearchByUsername';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';

const Tab = createMaterialBottomTabNavigator();

const InboxStack = createStackNavigator();
const MatchStack = createStackNavigator();
const ProfileStack = createStackNavigator();

export default MainTab = () => {
  let [fontsLoaded] = useFonts({
    'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Light': require('../assets/fonts/Rubik-Light.ttf'),
    'Rubik-Medium': require('../assets/fonts/Rubik-Medium.ttf'),
  });

  return (
    <Tab.Navigator
    initialRouteName="MatchStackScreen"
    activeColor="#EC1950"
    inactiveColor="#f4f4f4"
    labeled = {false}
    barStyle={{ backgroundColor: '#303030' }}
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
        name="ProfileStackScreen"
        component={ProfileStackScreen}
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
   <MatchStack.Screen name="NewLetter" component={NewLetter} options={{headerShown:false}}/>
   <MatchStack.Screen name="SearchByUsername" component={SearchByUsername} options={{headerShown:false}}/>
 </MatchStack.Navigator>
);

const InboxStackScreen = ({navigation}) => (
 <InboxStack.Navigator initialRouteName="Inbox">
   <InboxStack.Screen name="Inbox" component={Inbox} options={{headerShown:false}}/>
   <InboxStack.Screen name="Messages" component={Messages} options={{headerShown:false}}/>
   <MatchStack.Screen name="NewLetter" component={NewLetter} options={{headerShown:false}}/>
 </InboxStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator
  initialRouteName="Profile"
  screenOptions={{
    headerStyle: {
      backgroundColor: '#404040',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: '200',
      alignSelf: 'center',
    }}}>
    <ProfileStack.Screen name="Profile" component={Profile} options={{
        headerTitle: () =>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize: 26, color: '#f4f4f4', fontFamily: 'Rubik-Medium', paddingLeft: '33%'}}>
            Liam Mills
          </Text>
          <MaterialCommunityIcons
              name="settings"
              size={26}
              color='#EC1950'
              backgroundColor="transparent"
              style={{position: 'absolute', right: 0}}
              onPress={() => navigation.push('Settings')}>
            </MaterialCommunityIcons>
        </View>,
        headerLeft: () => {}
        }}/>
    <ProfileStack.Screen name="Settings" component={Settings} options={{
        title:'',
        }}/>
  </ProfileStack.Navigator>
 );
