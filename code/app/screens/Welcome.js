import * as React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';

import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

export default function Welcome ({ navigation }) {

  let [fontsLoaded] = useFonts({
    'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
  });

    if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <LinearGradient
            // Background Linear Gradient
            colors={['#EFEDE1', '#E4E0C9']}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: '110%',
            }}
          />
        <Image
            style={styles.logo}
            source={require('../assets/logo.png')}
          />
        <Text style={styles.title}>
          zenogloss
        </Text>
        <View>
          <Text style={styles.normalFont}>don't have an account ?</Text>
            <LinearGradient
            colors={['#EC1950', '#DD3F65']}
            style={{ padding: 15, alignItems: 'center', borderRadius: 30, width: 308 }}>
                <TouchableOpacity
               style={styles.register}
               onPress={() => navigation.push('Register')}>

                <Text style={styles.text}>register</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>

        <LinearGradient
        colors={['rgba(236,25,80,0.6)', 'rgba(221,63,101,0.6)']}
        style={{ padding: 15, alignItems: 'center', borderRadius: 30, width: 182, marginVertical: 35 }}>
            <TouchableOpacity
           style={styles.register}
           onPress={() => navigation.push('Login')}>

            <Text style={styles.text2}>sign in</Text>
            </TouchableOpacity>
        </LinearGradient>
      </View>
   );
 }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  title: {
    margin: 16,
    fontSize: 48,
    textAlign: 'center',
    color: '#606060',
    fontFamily: 'Rubik-Regular',
    paddingBottom: 20
  },
  normalFont: {
    fontSize: 12,
    fontWeight: '200',
    color: '#404040',
    paddingRight: 20,
    marginLeft: 25,
    marginBottom: 3
  },
  text: {
    color: 'white',
    fontFamily: 'Rubik-Regular',
    fontSize: 24,
    fontWeight: '200',
  },
  text2: {
    color: '#404040',
    fontFamily: 'Rubik-Regular',
    fontSize: 20,
    fontWeight: '200',
  },
  logo: {
    width: 200,
    height: 180,
    marginTop: 25,
  },
});
