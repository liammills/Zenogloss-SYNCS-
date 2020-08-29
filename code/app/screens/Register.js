import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, CheckBox, Picker } from 'react-native';
import { AuthContext } from '../context';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
          colors={['#404040', '#303030']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '110%',
          }}
        />
      <MaterialCommunityIcons name="account-circle" color={'#f4f4f4'} size={120} style={{margin: 4}}/>
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
    height: 36, width: 300, paddingLeft: 10, marginVertical: 6, backgroundColor: 'rgba(95, 135, 189,0.3)'
    },
  text: {
    color: '#f4f4f4',
    fontFamily: 'Rubik-Light',
    fontSize: 20,
    fontWeight: '200',
  },
});
