import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, CheckBox, Picker } from 'react-native';
import { AuthContext } from '../context';
import { LinearGradient } from 'expo-linear-gradient';

export default function Register () {
  const { register } = React.useContext(AuthContext)

  const [username, onChangeUser] = React.useState('username');
  const [password, onChangePass] = React.useState('password');
  const [carModel, setCarModel] = React.useState('');
  const [isDriver, setIsDriver] = React.useState(false);
  const [isProvider, setIsProvider] = React.useState(false);

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
        style={{height:100, width:100, margin: 4}}
        source={require('../assets/logo.png')}
      />
      <Text style={{color:'#5f87bd', textDecorationLine: 'underline'}}>Upload an image</Text>
      <View style={{margin:10, alignItems: 'center'}}>
      <TextInput
        style={styles.password}
        onChangeText={text => onChangePass(text)}
        placeholder="first name"
        autoCorrect={false}
      />
      <TextInput
        style={styles.password}
        onChangeText={text => onChangePass(text)}
        placeholder="last name"
        autoCorrect={false}
      />
      <TextInput
        style={styles.password}
        onChangeText={text => onChangePass(text)}
        placeholder="email"
        autoCorrect={false}
        autoCapitalize='none'
      />
      <TextInput
        style={styles.password}
        onChangeText={text => onChangePass(text)}
        placeholder="confirm email"
        autoCorrect={false}
        autoCapitalize='none'
      />
      <TextInput
        style={styles.password}
        onChangeText={text => onChangePass(text)}
        placeholder="password"
        autoCorrect={false}
        autoCapitalize='none'
        secureTextEntry
      />
      <TextInput
        style={styles.password}
        onChangeText={text => onChangePass(text)}
        placeholder="confirm password"
        autoCorrect={false}
        autoCapitalize='none'
        secureTextEntry
      />
      <TouchableOpacity style={styles.password}>
            <Picker
              selectedValue={carModel}
              prompt='Main Vehicle'
              mode='dropdown'
              style={{ position: 'relative', height: 40, width: 300, color: '#aaa' }}
              onValueChange={value => setCarModel(value)}
              itemStyle={{ fontSize: 14 }}
            >
              <Picker.Item label="Nationality" value="" />
              <Picker.Item label="N/A" value="na" />
              <Picker.Item label="Australia" value="au" />
              <Picker.Item label="Italy" value="it" />
              <Picker.Item label="China" value="ch" />
              <Picker.Item label="United States" value="us" />
            </Picker>
          </TouchableOpacity>

          <TouchableOpacity
         onPress={() => register()}>
            <LinearGradient
            colors={['#EC1950', '#DD3F65']}
            style={{ padding: 15, alignItems: 'center', borderRadius: 30, width: 308 }}>
              <Text style={styles.text}>register</Text>
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
  login: {
    marginTop: 10,
    marginHorizontal: 5,
    marginBottom: 0,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#5f87bd',
    borderWidth: 1,
    borderColor: '#ecf0f1',
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 15,
    width: 140,
    alignItems: 'center'
  },
  loginText: {
      color: 'white',
      fontSize: 13
  },
  password: {
    height: 36, width: 300, paddingLeft: 10, marginVertical: 6, backgroundColor: 'rgba(95, 135, 189,0.3)'
    },
  register: {
    marginTop: 6,
    marginBottom: 0,
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#5f87bd',
    borderWidth: 1,
    borderColor: '#ecf0f1',
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 45,
  },
});
