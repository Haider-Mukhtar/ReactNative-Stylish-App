import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

//Splash Screen
import SplashScreen from 'react-native-splash-screen'

import AppIntroSlider from 'react-native-app-intro-slider';

// Intro Slider
const slides = [
  {
    key: 1,
    page: 1,
    title: 'Choose Products',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    image: require('./assets/onboarding_images/onboarding_1.png'),
    backgroundColor: '#ffffff',
  },
  {
    key: 2,
    page: 2,
    title: 'Make Payment',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    image: require('./assets/onboarding_images/onboarding_2.png'),
    backgroundColor: '#ffffff',
  },
  {
    key: 3,
    page: 3,
    title: 'Get Your Order',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    image: require('./assets/onboarding_images/onboarding_3.png'),
    backgroundColor: '#ffffff',
  }
];

const App = () => {

  //Splash Screen
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const [showHomePage, setShowHomePage] = useState(false);

  const buttonLabel = (label) => {
    return (
      <View style={{ marginTop: 10 }}>
        <Text style={{ color: "#F83758", fontSize: 18, fontWeight: '600', fontFamily: 'Montserrat-Bold' }}>
          {label}
        </Text>
      </View>
    )
  }

  if (!showHomePage) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => {
          return (
            <View style={{ flex: 1, }}>
              <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginHorizontal: 17, marginTop: 17, }}>
                <Text style={{ fontSize: 18, fontWeight: '800', fontFamily: 'Montserrat-ExtraBold', color: '#000000' }}>
                  {item.page}
                </Text>
                <Text style={{ fontSize: 18, fontWeight: '800', fontFamily: 'Montserrat-ExtraBold', color: '#A0A0A1' }}>
                  /3
                </Text>
              </View>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <Image
                  source={item.image}
                  style={{ height: 300, resizeMode: 'contain' }}
                />
                <Text style={{ fontSize: 24, fontWeight: '800', fontFamily: 'Montserrat-ExtraBold', textAlign: 'center', }}>
                  {item.title}
                </Text>
                <Text style={{ fontSize: 14, fontWeight: '600', fontFamily: 'Montserrat-Regular', marginHorizontal: 50, textAlign: 'center', marginTop: 15, }}>
                  {item.text}
                </Text>
              </View>
            </View>
          )
        }}
        activeDotStyle={{
          backgroundColor: '#17223B',
          width: 40,
        }}
        showPrevButton
        showNextButton
        showSkipButton
        renderSkipButton={() => buttonLabel("Skip")}
        renderNextButton={() => buttonLabel("Next")}
        renderPrevButton={() => buttonLabel("Prev")}
        renderDoneButton={() => buttonLabel("Done")}
        onDone={() => {
          setShowHomePage(true)
        }}
      />
    )
  }

  return (
    <View>
      <Text>
        Home Screen
      </Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})