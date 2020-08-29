# Zenogloss

Motto ?

## Authors
Liam Mills - University of Sydney

Bangshuo Zhu - University of Sydney

Kim Nguyen - University of Sydney

## Contents

1. [Overview](#overview)
2. [The idea](#the-idea)
3. [How it works](#how-it-works)
4. [Diagrams](#diagrams)
5. [Documents](#documents)
6. [Technology](#technology)
7. [Getting started](#getting-started)
8. [Resources](#resources)
9. [License](#license)

## Overview

### What's the problem?

@Kim

### How can technology help?

@Kim

## The idea

@Kim

## How it works

@Kim

## Diagrams

![Zenogloss architecture diagram](/images/architecture-diagram.png)

This solution is an pen-pal messaging platform, built on a React Native front-end and Node back-end, and integrating the Google Translate API and Auth0.

1. The user launches the mobile app and ...
1. The user can ...
1. The user can login securely, and trust that their details are in good hands.
1. The user can ...

## Documents

@Kim

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
