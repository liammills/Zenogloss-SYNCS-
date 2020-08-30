import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthContext } from '../context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-paper';

import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

export default function LoadingScreen() {
  const { signOut } = React.useContext(AuthContext)

    let [fontsLoaded] = useFonts({
      'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
      'Rubik-Light': require('../assets/fonts/Rubik-Light.ttf'),
      'Rubik-Medium': require('../assets/fonts/Rubik-Medium.ttf'),
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
      <ScrollView contentContainerStyle={styles.container}>
        <Avatar.Image 
          source={require('../assets/profile_liam.jpg')}
          size={200}
          style={{backgroundColor:'transparent', marginBottom: 20}}
          />
        <View style={{flexDirection: 'row', width: '100%'}}>
          <Text style={{fontFamily: 'Rubik-Medium', paddingRight: '55%', fontSize:16, color: '#3EC0C7'}}>About me</Text>
          <Text style={{fontFamily: 'Rubik-Medium', fontSize:16, color: '#3EC0C7', fontWeight: 'bold'}}>Edit Details</Text>
        </View>
        <View style={{alignItems:'flex-start', paddingRight: '30%', marginBottom: 20}}>
          <Text style={styles.subtitle}>Name</Text>
          <Text style={styles.content}>Liam Mills</Text>
          <Text style={styles.subtitle}>Email</Text>
          <Text style={styles.content}>liammills@email</Text>
          <Text style={styles.subtitle}>Bio</Text>
          <Text style={styles.content}>Hi! I’m from Australia. Let’s chat :)</Text>
        </View>
          <Text style={styles.title}>
            Interests
          </Text>
          <View style={{justifyContent:'space-between'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <LinearGradient
                colors={['#EC1950', '#DD3F65']}
                style={{ paddingHorizontal: 15, paddingVertical:5, borderRadius: 50, justifyContent: 'center', marginHorizontal: 8}}>
                  <Text style={{fontFamily: 'Rubik-Light', fontSize: 22, color: '#f4f4f4'}}>Food</Text>
              </LinearGradient>
              <LinearGradient
                colors={['#EC1950', '#DD3F65']}
                style={{ paddingHorizontal: 15, paddingVertical:5, borderRadius: 50, justifyContent: 'center', marginHorizontal: 8}}>
                  <Text style={{fontFamily: 'Rubik-Light', fontSize: 22, color: '#f4f4f4'}}>Fitness</Text>
              </LinearGradient>
              <LinearGradient
                colors={['#EC1950', '#DD3F65']}
                style={{ paddingHorizontal: 15, paddingVertical:5, borderRadius: 50, justifyContent: 'center', marginHorizontal: 8}}>
                  <Text style={{fontFamily: 'Rubik-Light', fontSize: 22, color: '#f4f4f4'}}>Travel</Text>
              </LinearGradient>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 12}}>
              <LinearGradient
                colors={['#EC1950', '#DD3F65']}
                style={{ paddingHorizontal: 15, paddingVertical:5, borderRadius: 50, justifyContent: 'center', marginHorizontal: 8}}>
                  <Text style={{fontFamily: 'Rubik-Light', fontSize: 22, color: '#f4f4f4'}}>Music</Text>
              </LinearGradient>
              <LinearGradient
                colors={['#EC1950', '#DD3F65']}
                style={{ paddingHorizontal: 15, paddingVertical:5, borderRadius: 50, justifyContent: 'center', marginHorizontal: 8}}>
                  <Text style={{fontFamily: 'Rubik-Light', fontSize: 22, color: '#f4f4f4'}}>Football</Text>
              </LinearGradient>
              <LinearGradient
                colors={['#EC1950', '#DD3F65']}
                style={{ paddingHorizontal: 15, paddingVertical:5, borderRadius: 50, justifyContent: 'center', marginHorizontal: 8}}>
                  <Text style={{fontFamily: 'Rubik-Light', fontSize: 22, color: '#f4f4f4'}}>Books</Text>
              </LinearGradient>
            </View>
          </View>

          <Text style={styles.title}>
            My Contacts
          </Text>
            <LinearGradient
              colors={['#EC1950', '#DD3F65']}
              style={{ padding: 10, borderRadius: 10, width: 308, justifyContent: 'center', marginTop: 10}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.contact}>Bang Zhu</Text>
                  <Image
                      style={styles.logo}
                      source={require('../assets/flags/fr.png')}
                    />
                </View>
            </LinearGradient>
            <LinearGradient
              colors={['#3DC0C7', '#4AB4BA']}
              style={{ padding: 10, borderRadius: 10, width: 308, justifyContent: 'center', marginTop: 10}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.contact}>Kim Nguyen</Text>
                  <Image
                      style={styles.logo1}
                      source={require('../assets/flags/mx.png')}
                    />
                </View>
            </LinearGradient>
            <LinearGradient
              colors={['#F8E600', '#EBDC22']}
              style={{ padding: 10, borderRadius: 10, width: 308, justifyContent: 'center', marginTop: 10, marginBottom: 10}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.contact}>John Smith</Text>
                  <Image
                      style={styles.logo2}
                      source={require('../assets/flags/ch.png')}
                    />
                </View>
            </LinearGradient>
            <Text style={styles.subtitle}>+ More</Text>
        <View style={{height: 0.5, width: '70%', backgroundColor: '#f4f4f4', marginTop: 20}} />
        <TouchableOpacity
        onPress={() => signOut()}>
          <LinearGradient
          colors={['#EC1950', '#DD3F65']}
          style={{ padding: 10, alignItems: 'center', borderRadius: 30, width: 308, marginTop: 30 }}>
            <Text style={styles.text}>Sign Out</Text>
        </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    //width: '100%'
  },

  text: {
    color: '#f4f4f4',
    fontFamily: 'Rubik-Light',
    fontSize: 18,
  },
  subtitle: {
    fontFamily: 'Rubik-Regular',
    color: '#46B8BE',
    fontSize: 16,
    marginTop: 4,
  },
  content: {
    color: '#f4f4f4',
    fontSize: 26,
    fontFamily: 'Rubik-Light'
  },
  title: {
    fontFamily: 'Rubik-Medium',
    fontSize: 26,
    color: '#f4f4f4',
    marginVertical: 10
  },
  contact: {
    fontFamily: 'Rubik-Medium',
    color: 'black',
    fontSize: 20,
    paddingLeft: 15,
    paddingTop: 1,
  },
  logo: {
    width: 28,
    height: 28,
    marginLeft: 135,
    borderWidth: 1,
    borderColor: '#404040',
    borderRadius: 50,
  },
  logo1: {
    width: 28,
    height: 28,
    marginLeft: 112,
    borderWidth: 1,
    borderColor: '#404040',
    borderRadius: 50,
  },
  logo2: {
    width: 28,
    height: 28,
    marginLeft: 115,
    borderWidth: 1,
    borderColor: '#404040',
    borderRadius: 50,
  },
});
