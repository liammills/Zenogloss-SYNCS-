import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import { Avatar } from 'react-native-paper';

import LoadingScreen2 from './LoadingScreen2';

export default function RandomMatch({ navigation }) {
  const [isLoading, setIsLoading] = React.useState(true);

  let [fontsLoaded] = useFonts({
    'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Light': require('../assets/fonts/Rubik-Light.ttf'),
    'Rubik-Medium': require('../assets/fonts/Rubik-Medium.ttf'),
    'EBGaramond-Bold': require('../assets/fonts/EBGaramond-Bold.ttf'),
    'EBGaramond-Italic': require('../assets/fonts/EBGaramond-Italic.ttf'),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, [])

  if (isLoading) {
    return <LoadingScreen2 />;
  }

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
        <Avatar.Image 
          source={require('../assets/bang_profile.jpg')}
          size={200}
          style={{backgroundColor:'transparent'}}
          />
        <View style={{marginTop: 10, marginBottom: 20, alignItems: 'center' }}>
          <Text style={{fontFamily:'EBGaramond-Bold', color: '#f4f4f4', fontSize: 36}}>
            Meet
          </Text>
          <Text style={{fontFamily:'Rubik-Light', color: '#DD1EFE', fontSize: 56, marginTop: -8, marginBottom: -5}}>
            Bang
          </Text>
          <Text style={{fontFamily:'EBGaramond-Italic', color: '#f4f4f4', fontSize: 24}}>
            from France
          </Text>
        </View>
        <Text style={{fontFamily: 'Rubik-Medium', fontSize: 16, fontWeight: '700', color:'#3DC0C7', textAlign:'left', marginRight: '79%'}}>
          Bio
        </Text>
        <Text style={{fontFamily: 'Rubik-Light', fontSize: 20, color:'#f4f4f4', textAlign:'left', width: '85%', marginTop: 3}}>
         Hi! I’m from Toulouse in France. I love to eat and travel. Let’s chat :)
        </Text>
        <TouchableOpacity
          onPress={() => navigation.push('NewLetter')}>
            <LinearGradient
            colors={['#EC1950', '#DD3F65']}
            style={{ padding: 15, alignItems: 'center', borderRadius: 30, width: 308, marginTop: 40, marginBottom: 10 }}>
              <Text style={styles.text}>Say Hi!</Text>
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
    color: '#f4f4f4',
    fontFamily: 'Rubik-Regular',
    fontSize: 24,
    fontWeight: '200',
  },
});
