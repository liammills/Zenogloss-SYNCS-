import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthContext } from '../context';

import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

export default function LoadingScreen() {
  const { signOut } = React.useContext(AuthContext)

    let [fontsLoaded] = useFonts({
      'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
      'Rubik-Light': require('../assets/fonts/Rubik-Light.ttf'),
    });

  return (
    <View style={styles.container}>
      <LinearGradient
          // Background Linear Gradient
          colors={['#404040', '#303030']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '110%',
          }}
        />
      <TouchableOpacity
      onPress={() => signOut()}>
        <LinearGradient
        colors={['#EC1950', '#DD3F65']}
        style={{ padding: 12, alignItems: 'center', borderRadius: 30, width: 308 }}>
          <Text style={styles.text}>Sign Out</Text>
      </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  text: {
    color: 'white',
    fontFamily: 'Rubik-Light',
    fontSize: 18,
  },
});
