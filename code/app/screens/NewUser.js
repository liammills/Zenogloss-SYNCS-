import * as React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';

import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

export default function Welcome ({ navigation }) {

  let [fontsLoaded] = useFonts({
    'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Light': require('../assets/fonts/Rubik-Light.ttf'),
    'EBGaramond-Bold': require('../assets/fonts/EBGaramond-Bold.ttf'),
  });

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [])

    if (!fontsLoaded) {
    return <AppLoading />;
  } else {
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
        <Text style={{fontFamily:'EBGaramond-Bold', color: '#f4f4f4', fontSize: 36 }}>
          Welcome,
         </Text>

           <Text style={{fontFamily:'Rubik-Light', fontSize: 60, color: '#DD1EFE'}}>
             Liam
            </Text>

        {!isLoading &&
        <LinearGradient
        colors={['rgba(236,25,80,1)', 'rgba(221,63,101,1)']}
        style={{ padding: 15, alignItems: 'center', borderRadius: 30, width: 302, marginTop: 80 }}>
            <TouchableOpacity
           style={styles.register}
           onPress={() => navigation.push('MainTab')}>

            <Text style={styles.text}>Find a Pal</Text>
            </TouchableOpacity>
        </LinearGradient>
      }
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
    fontFamily: 'Rubik-Light',
    fontSize: 26,
    fontWeight: '200',
  },
  logo: {
    width: 200,
    height: 180,
    marginTop: 25,
  },
});
