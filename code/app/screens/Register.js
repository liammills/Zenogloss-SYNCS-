import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, Picker } from 'react-native';
import { AuthContext } from '../context';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Register () {
  const { register } = React.useContext(AuthContext)

  const [username, onChangeUser] = React.useState('username');
  const [password, onChangePass] = React.useState('password');
  const [carModel, setCarModel] = React.useState('');

  return (
    <View style={styles.container}>
      <LinearGradient
          // Background Linear Gradient
          colors={['#404040', '#303030']}
          style={{
            position: 'absolute',
            left: -5,
            right: 0,
            top: -10,
            height: '110%',
            width: '120%',
          }}
        />
      <MaterialCommunityIcons name="account-circle" color={'#f4f4f4'} size={130} style={{margin: 4 }}/>
      <Text style={{color:'#3DC0C7', textDecorationLine: 'underline'}}>Upload an image</Text>
      <View style={{margin:10, alignItems: 'center'}}>
      <TextInput
        style={styles.password}
        onChangeText={text => onChangePass(text)}
        placeholder="First name"
        placeholderTextColor='#505050'
        autoCorrect={false}
      />
      <TextInput
        style={styles.password}
        onChangeText={text => onChangePass(text)}
        placeholder="Last name"
        placeholderTextColor='#505050'
        autoCorrect={false}
      />
      <TextInput
        style={styles.password}
        onChangeText={text => onChangePass(text)}
        placeholder="Email"
        placeholderTextColor='#505050'
        autoCorrect={false}
        autoCapitalize='none'
      />
      <TextInput
        style={styles.password}
        onChangeText={text => onChangePass(text)}
        placeholder="Confirm email"
        placeholderTextColor='#505050'
        autoCorrect={false}
        autoCapitalize='none'
      />
      <TextInput
        style={styles.password}
        onChangeText={text => onChangePass(text)}
        placeholder="Password"
        placeholderTextColor='#505050'
        autoCorrect={false}
        autoCapitalize='none'
        secureTextEntry
      />
      <TextInput
        style={styles.password}
        onChangeText={text => onChangePass(text)}
        placeholder="Confirm password"
        placeholderTextColor='#505050'
        autoCorrect={false}
        autoCapitalize='none'
        secureTextEntry
      />
      <TouchableOpacity style={styles.picker}>
            <Picker
              selectedValue={carModel}
              prompt='Main Vehicle'
              mode='dropdown'
              style={{ position: 'relative', height: 40, width: 300, color: '#505050' }}
              onValueChange={value => setCarModel(value)}
              itemStyle={{ fontSize: 14 }}
            >
              <Picker.Item label="Nationality" value="" />
              <Picker.Item label="N/A" value="na" />
              <Picker.Item label="Australia" value="au" />
              <Picker.Item label="China" value="ch" />
              <Picker.Item label="Italy" value="it" />
              <Picker.Item label="United States" value="us" />
            </Picker>
          </TouchableOpacity>

          <TouchableOpacity
         onPress={() => register()}>
            <LinearGradient
            colors={['#EC1950', '#DD3F65']}
            style={{ padding: 10, alignItems: 'center', borderRadius: 30, width: 308, marginTop: 15 }}>
              <Text style={styles.text}>Register</Text>
          </LinearGradient>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    margin: 5,
    flex: 1
  },
  normalFont: {
    fontSize: 12,
    fontWeight: '200',
    textAlign: 'center',
    color: 'rgba(0,0,0,0.5)',
    marginTop: 20,
  },
  loginText: {
      color: 'white',
      fontSize: 13
  },
  password: {
    height: 36,
    width: 300,
    paddingLeft: 20,
    marginVertical: 6,
    backgroundColor: 'rgba(148,212,216,1)',
    borderWidth:1,
    borderColor: '#3DC0C7',
    borderRadius:20
  },
  picker: {
    height: 36,
    width: 300,
    paddingLeft: 5,
    marginVertical: 6,
    backgroundColor: 'rgba(148,212,216,1)',
    borderWidth:1,
    borderColor: '#3DC0C7',
    borderRadius:20,
    justifyContent: 'center'
    },
  text: {
    color: '#f4f4f4',
    fontFamily: 'Rubik-Light',
    fontSize: 20,
    fontWeight: '200',
  },
});
