import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';
import Constants from 'expo-constants';
import { GiftedChat, MessageText, Bubble } from 'react-native-gifted-chat';
import { LinearGradient } from 'expo-linear-gradient';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

var translate = require('react-node-google-translate');

//const messages = [];

const OtherMessageText = (props) => {
  const {
    currentMessage,
  } = props;
  const { text: currText } = currentMessage;
  const [checked, setChecked] = React.useState(false);

  let translateToSpanish = (text) => {translate({
    text: text,
    source: 'en',
    target: 'es'
  }, function(result) {
    console.log(result);
    currentMessage.text = result;
  })}

  let translateToEnglish = (text) => {translate({
      text: text,
      source: 'es',
      target: 'en'
    }, function(result) {
      console.log(result);
      currentMessage.text = result;
    })}

  checked ? translateToEnglish(currentMessage.text) : translateToSpanish(currentMessage.text)

  return (
    <View style={styles.checkboxView}>
      <MessageText {...props} style={{flex: 1 }} textStyle={{
        left: {
          color: '#000',
        },
        right: {
          color: '#000',
        },
      }}
      currentMessage={{
        ...currentMessage,
      }}/>
      <Switch value={checked} onValueChange={(value) => setChecked(value) } />
    </View>
  );
}

const MyMessageText = (props) => {
  const {
    currentMessage,
  } = props;
  const { text: currText } = currentMessage;
  const [checked, setChecked] = React.useState(false);

  return (
    <View style={styles.checkboxView}>
      <MessageText {...props} style={{flex: 1 }} textStyle={{
        left: {
          color: '#000',
        },
        right: {
          color: '#000',
        },
      }}
      currentMessage={{
        ...currentMessage,
        text: currText.replace('[x]', '').trim(),
      }}/>
    </View>
  );
}

export default Messages = (props) => {
  const [messages, setMessages] = useState([messages]);

  const prefix = '[x] ';

  useEffect(() => {
    setMessages([
    ])
  }, [])
  
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  let [fontsLoaded] = useFonts({
    'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Light': require('../assets/fonts/Rubik-Light.ttf'),
  });

  const renderBubble = (props) => {
    const {
      currentMessage: { text: currText },
    } = props;
    if (currText.indexOf('[x]') === -1) {
      return <Bubble {...props} 
      wrapperStyle={{
        left: {
          backgroundColor: '#fef0dd',
        },
      }}/>
    }

    return <Bubble {...props}
      wrapperStyle={{
          left: {
            backgroundColor: '#fef0dd',
          },
          right: {
            backgroundColor: '#3DC0C7'
          }
        }}

      timeTextStyle={{
        left: {
          color: '#000',
        },
        right: {
          color: '#000',
        },
      }}
    />
  }

  const renderMessageText = (props) => {
    const {
      currentMessage,
    } = props;
    const { text: currText } = currentMessage;
    if (currText.indexOf('[x]') === -1) {
      return <OtherMessageText {...props} />;
    }
    return <MyMessageText {...props} />
  };

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
      <GiftedChat
        messages={messages}
        renderMessageText={renderMessageText}
        renderBubble={renderBubble}
        alignTop={true}
        inverted={false}
        renderUsernameOnMessage={true}
        textInputStyle={{
          fontFamily: 'Rubik-Regular',
        }}
        onSend={messages => {messages[0].text = prefix.concat(messages[0].text), onSend(messages)}}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    padding: 8,
  },
  checkboxView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  }
});
