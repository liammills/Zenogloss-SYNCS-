import React from 'react';

import NewUser from '../screens/NewUser';
import MainTab from './MainTab';

import { createStackNavigator } from '@react-navigation/stack';

const MainStack = createStackNavigator();

export default MainStackScreen = () => (
 <MainStack.Navigator initialRouteName="Welcome">
   <MainStack.Screen name="NewUser" component={NewUser} options={{headerShown:false}}/>
   <MainStack.Screen name="MainTab" component={MainTab} options={{headerShown:false}}/>
 </MainStack.Navigator>
);
