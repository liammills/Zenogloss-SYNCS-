import * as React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthContext } from '../context';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

export default function Welcome ({ navigation }) {

  const { signIn } = React.useContext(AuthContext)

  let [fontsLoaded] = useFonts({
    'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Light': require('../assets/fonts/Rubik-Light.ttf'),
  });

    if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <LinearGradient
            colors={['#404040', '#303030']}
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
          <Text style={styles.normalFont}>Don't have an account ?</Text>
          <TouchableOpacity
          onPress={() => navigation.push('Register')}>
            <LinearGradient
            colors={['#EC1950', '#DD3F65']}
            style={{ padding: 15, alignItems: 'center', borderRadius: 30, width: 308 }}>
              <Text style={styles.text}>Register</Text>
          </LinearGradient>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
        onPress={() => signIn()}>
          <LinearGradient
          colors={['rgba(236,25,80,0.7)', 'rgba(221,63,101,0.7)']}
          style={{ padding: 15, alignItems: 'center', borderRadius: 30, width: 182, marginVertical: 35 }}>
            <Text style={styles.text2}>Sign In</Text>
          </LinearGradient>
        </TouchableOpacity>
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
    color: '#f4f4f4',
    fontFamily: 'Rubik-Regular',
    paddingBottom: 28
  },
  normalFont: {
    fontSize: 12,
    fontWeight: '200',
    color: '#f4f4f4',
    paddingRight: 20,
    marginLeft: 25,
    marginBottom: 3
  },
  text: {
    color: '#f4f4f4',
    fontFamily: 'Rubik-Regular',
    fontSize: 24,
    fontWeight: '200',
  },
  text2: {
    color: '#f4f4f4',
    fontFamily: 'Rubik-Light',
    fontSize: 20,
    fontWeight: '200',
  },
  logo: {
    width: 200,
    height: 180,
    marginTop: 25,
  },
});
