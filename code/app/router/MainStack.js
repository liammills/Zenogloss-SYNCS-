import React from 'react';

import Login from '../screens/Login';
import Register from '../screens/Register';
import Welcome from '../screens/Welcome';

import { createStackNavigator } from '@react-navigation/stack';

const MainStack = createStackNavigator();

export default MainStackScreen = () => (
 <MainStack.Navigator initialRouteName="Welcome">
   <MainStack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
   <MainStack.Screen name="Login" component={Login} options={{headerShown:false}}/>
   <MainStack.Screen name="Register" component={Register} />
 </MainStack.Navigator>
);
