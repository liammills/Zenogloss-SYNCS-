import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';

import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

export default function NewMatch({navigation}) {
  let [fontsLoaded] = useFonts({
    'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Light': require('../assets/fonts/Rubik-Light.ttf'),
  });

  return (
    <View style={styles.container}>
      <LinearGradient
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
            source={require('../assets/penpals.png')}
          />

          <TouchableOpacity
         onPress={() => navigation.push('RandomMatch')}>
            <LinearGradient
            colors={['#EC1950', '#DD3F65']}
            style={{ padding: 15, alignItems: 'center', borderRadius: 50, width: 308, height: 100, marginVertical: 10, justifyContent: 'center' }}>
                <Text style={styles.text1}>
                Random Match
                </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
         onPress={() => navigation.push('FilteredSearch')}>
            <LinearGradient
            colors={['#3DC0C7', '#4AB4BA']}
            style={{ padding: 15, alignItems: 'center', borderRadius: 30, width: 260, marginVertical: 20 }}>
                <Text style={styles.text2}>
                Filtered Search
                </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
         onPress={() => navigation.push('SearchByUsername')}>
            <LinearGradient
            colors={['#F8E600', '#EBDC22']}
            style={{ padding: 15, alignItems: 'center', borderRadius: 30, width: 260 }}>
                <Text style={styles.text2}>
                Search by Username
                </Text>
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
    backgroundColor: '#404040',
    padding: 8,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 25,
  },
  text1: {
    fontFamily: 'Rubik-Light',
    fontSize: 26,
    color: '#f4f4f4'
  },
  text2: {
    fontFamily: 'Rubik-Light',
    fontSize: 22,
    color: '#404040'
  },
});
