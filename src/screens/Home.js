import React, { useState, useEffect } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import {
  Layout,
  Button,
  Text,
  Section,
  SectionContent,
  useTheme,
} from "react-native-rapi-ui";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeText from "../components/homeText";
import adhan from 'adhan'
import moment from 'moment';
import * as Location from 'expo-location';

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  const [location, setLocation] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('may Permission to access location is  denied or no there is no internet connection');
        return;
      }


      const locations = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = locations.coords
      setLocation([latitude, longitude]);
    })();
  }, ['one']);

  var date = new Date(Date.now());
  var coordinates = new adhan.Coordinates(...location);
  var params = adhan.CalculationMethod.MuslimWorldLeague()
  params.madhab = adhan.Madhab.Hanafi;
  var prayerTimes = new adhan.PrayerTimes(coordinates, date, params);
  const fajr = moment(prayerTimes.fajr).format("h:mm");
  const dhuhr = moment(prayerTimes.dhuhr).format("h:mm");
  const asr = moment(prayerTimes.asr).format("h:mm");
  const maghrib = moment(prayerTimes.maghrib).format("h:mm");
  const isha = moment(prayerTimes.isha).format("h:mm");
  var current = prayerTimes.currentPrayer();
  var nextPray = prayerTimes.nextPrayer();


  return (

    <Layout>
      <ImageBackground source={{ uri: 'https://muslimmatters.org/wp-content/uploads/shutterstock_168576587.jpg' }}
        style={styles.image} resizeMode="cover" blurRadius={3}
      />
      <View style={{
        // zIndex: -1,
        position: 'absolute',
        backgroundColor: isDarkmode ? '#02020298' : '#ffffff00',
        height: '200%',
        width: '100%',
        top: 0,

      }} />
      {errorMsg &&
        <View style={{
          zIndex: 10,
          position: 'absolute',
          backgroundColor: 'white',
          height: '120%',
          padding: 20,
          width: '100%',
          top: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'


        }} >
          <Text style={{ color: 'red', fontSize: 40 }}>{errorMsg}</Text>
        </View>
      }
      <SafeAreaView />

      <View
        style={{
          paddingHorizontal: '5%',
          minHeight: '100%',
        }}
      >


        <View style={{ position: 'relative', width: '30%' }}>

          <Button onPress={() => isDarkmode ? setTheme('light') : setTheme('dark')} color={isDarkmode ? 'gray' : 'black'} text={!isDarkmode ? 'dark' : 'lighit'} />
        </View>
        <View>
          <Text style={{ fontSize: 50, color: isDarkmode ? 'white' : 'black', textAlign: 'right' }}>کاتەکانی بانگ</Text>
        </View>
        <Section backgroundColor={isDarkmode ? '#02020225' : '#ffffff2d'} style={{ marginTop: 50 }} >
          <SectionContent>
            <HomeText time={fajr} nameTime={'بەیانیان'} />
            <HomeText time={dhuhr} nameTime={'نیوەڕۆ'} />
            <HomeText time={asr} nameTime={'عەسر'} />
            <HomeText time={maghrib} nameTime={'ێوارە'} />
            <HomeText time={isha} nameTime={'عيشا'} />
          </SectionContent>
        </Section>
      </View>
    </Layout >
  );
}

const styles = StyleSheet.create({
  image: {
    width: '120%',
    height: '120%',
    position: 'absolute',
    top: 0,
    left: 0
  }
})