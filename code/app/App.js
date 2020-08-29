//import 'react-native-gesture-handler';
import React from 'react';
import { AuthContext } from './context';
import { NavigationContainer } from '@react-navigation/native';

import AuthStackScreen from './router/AuthStack';
import MainStackScreen from './router/MainStack';
import LoadingScreen from './screens/LoadingScreen';

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken('abc');
      },
      register: () => {
        setIsLoading(false);
        setUserToken('abc');
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    }
  })

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [])

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken ? (
          <MainStackScreen />) : (
            <AuthStackScreen />
          )}
      </NavigationContainer>
    </AuthContext.Provider>
  );

};

export default App;


// Go to station -- book -- confirmation from other party
// List station
