import * as React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';


export default function LoadingScreen2() {
  let [fontsLoaded] = useFonts({
    'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Light': require('../assets/fonts/Rubik-Light.ttf'),
  });

  return (
    <View style={styles.container}>
      <Image
          style={styles.logo}
          source={require('../assets/logo.png')}
        />
        <Text style={{color:'#f4f4f4', fontFamily: 'Rubik-Light', fontSize: 24}}>
          Finding your pal...
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#404040',
    padding: 8,
  },
  logo: {
    width: 250,
    height: 250,
  }
});
