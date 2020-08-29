import * as React from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';
import Constants from 'expo-constants';
import { GiftedChat, MessageText, Bubble } from 'react-native-gifted-chat';
import { LinearGradient } from 'expo-linear-gradient';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

const messages = [
  {
    _id: 1,
    text: 'Sed efficitur varius dignissim.',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'Bang Zhu',
      avatar: 'https://placeimg.com/140/140/any',
      language: 'fr'
    },
  },
  {
    _id: 2,
    text: '[x] Lorem ipsum\ndolor sit amet',
    createdAt: new Date(),
    user: {
      _id: 1,
    },
  },
  {
    _id: 3,
    text: 'Vivamus cursus nisi sit amet risus\nursus fringilla.',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'Bang Zhu',
      avatar: 'https://placeimg.com/140/140/any',
      language: 'fr',
    },
  },
  {
    _id: 4,
    text: '[x] Lorem ipsum',
    createdAt: new Date(),
    user: {
      _id: 1,
    },
  },
  {
    _id: 5,
    text: '[x] Aliquam erat volutpat.',
    createdAt: new Date(),
    user: {
      _id: 1,
    },
  },
  {
    _id: 6,
    text: '[x] Aliquam erat volutpat.',
    createdAt: new Date(),
    user: {
      _id: 1,
    },
  },
  {
    _id: 7,
    text: '[x] Aliquam erat volutpat.\n\n\n\n\n\n\n\n\n\n\n\n\n\n fuckyou',
    createdAt: new Date(),
    user: {
      _id: 1,
    },
  },
  {
    _id: 8,
    text: '[x] Aliquam erat volutpat.',
    createdAt: new Date(),
    user: {
      _id: 1,
    },
  },
];

const OtherMessageText = (props) => {
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
  let [fontsLoaded] = useFonts({
    'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Light': require('../assets/fonts/Rubik-Light.ttf'),
  });

  const renderBubble = (props) => {
    const {
      currentMessage: { text: currText },
    } = props;
    if (currText.indexOf('[x]') === -1) {
      return <Bubble {...props} />
    }

    return <Bubble {...props}
      wrapperStyle={{
          left: {
            backgroundColor: '#fef0dd',
          },
          right: {
            backgroundColor: '#fef0dd'
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
        onSend={messages => {}}
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
