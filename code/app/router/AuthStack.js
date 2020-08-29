import React from 'react';

import Login from '../screens/Login';
import Register from '../screens/Register';
import Welcome from '../screens/Welcome';

import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

export default AuthStackScreen = () => (
 <AuthStack.Navigator initialRouteName="Welcome">
   <AuthStack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
   <AuthStack.Screen name="Login" component={Login} options={{headerShown:false}}/>
   <AuthStack.Screen name="Register" component={Register} options={{headerShown:false}} />
 </AuthStack.Navigator>
);
