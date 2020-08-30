# Zenogloss

Motto ?

## Authors
Liam Mills - University of Sydney

Bangshuo Zhu - University of Sydney

Kim Nguyen - University of Sydney

## Contents

1. [The idea](#the-idea)
2. [How it works](#how-it-works)
3. [Diagrams](#diagrams)
4. [Technology](#technology)
5. [Getting started](#getting-started)
6. [Resources](#resources)
7. [License](#license)

## The idea

We’ve found that most messenger app services are direct messaging in the form of text bubbles. This tends to facilitate quick, brief chats. It is usually quite difficult and awkward to maintain a lengthy conversation, and the nature of direct messaging pressures either party to make a rushed response. On the other hand, emails are usually used for long-form correspondence, but they are clunky by nature, and usually have unintuitive mobile apps that make them frustrating to use. We are aiming at the niche that exists in the space between these two extremes. There is a previously unrealized method of communication that is intuitive and streamlined – akin to direct messaging – but retains the more thorough correspondence of email. Where direct messaging is too shallow, but email/snail mail too slow, Zenogloss can thrive. This middle ground of communication would be the perfect form to take advantage of for communication between pen pals. A pen pal – that is, someone closer to a stranger than a friend (currently) – is someone with whom deeper conversation would be required in order to form a bond. However, this is a relationship that would also benefit from the brevity provided by a streamlined messaging service. After all, not every day is interesting, and sometimes all that is needed is a quick update. With Zenogloss, the best of both worlds awaits!

## How it works

For those who wish to create new cross-cultural friendships, it is possible to choose a random match. Potential pals with comparable interests are matched, and may begin their correspondence at their leisure and in their native languages. For those who wish to chat with known friends, it is also possible to add contacts by username. Just write and the translation service does the rest!

## Diagrams

![Zenogloss architecture diagram](/images/architecture-diagram.png)

This solution is an pen-pal messaging platform, built on a React Native front-end and Node back-end, and integrating the Google Translate RN API, RN Gifted Chat and Auth0.

## Technology

**Google Translate**
- [Google Translate API](https://www.npmjs.com/package/google-translate-api)

**Auth0**
- [Auth0 Universal Login](https://auth0.com/universal-login/)

## Getting started

Use the following steps to get Zenogloss up and running.

### Prerequisite

- Install and configure [Expo](https://docs.expo.io/get-started/installation/)
- Install [React Native CLI dependencies](https://reactnative.dev/docs/getting-started.html).
    - [Node.js](https://nodejs.org/en/)
    - [Watchman](https://facebook.github.io/watchman/docs/install)
    - **iOS only**
        - [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
        - [CocoaPods](https://guides.cocoapods.org/using/getting-started.html)
    - **Android only**
        - [Java Development Kit](https://www.oracle.com/java/technologies/javase-jdk8-downloads.html)
        - [Android Studio](https://developer.android.com/studio/index.html) - add Android 9 (Pie) SDK & configure `ANDROID_HOME`
        - [Create an Android Virtual Device (AVD)](https://developer.android.com/studio/run/managing-avds.html) - with Pie image (API Level 28)
- Clone the [repository](https://github.com/Call-for-Code/Solution-Starter-Kit-Disasters-2020).

### Run the mobile application on Expo

To run the mobile application (using the Xcode iOS Simulator or Android Studio Emulator):

From a terminal:
1. Go to the root directory.
1. Install the dependencies: `npm install`.
1. **iOS only**: Go to the `ios` directory: `cd ios`.
1. **iOS only**: Install pod dependencies: `pod install`.
1. **iOS only**: Return to the `code` directory: `cd ../`.
1. Launch the app in the simulator/emulator:
    - **iOS only**: `npm run ios`
        > **Note**: You should be running at least iOS 13.0. The first time you launch the simulator, you should ensure that you set a Location in the Features menu.
    - **Android only**: `npm run android`
        > **Note**: Your Android Studio needs to have the `Android 9 (Pie)` SDK and a `Pie API Level 28` virtual device.
1. Type `expo start` and choose your emulator (iOS emulator, Android emulator, or via Expo mobile app with QR code).

## Resources

- [React Native](https://reactnative.dev/)
- [Auth0](https://auth0.com/)

## License

This solution starter is made available under the [MIT License](LICENSE).
