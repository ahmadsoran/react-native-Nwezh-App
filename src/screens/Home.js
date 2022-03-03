import React, { useEffect, useState } from "react";
import { View, StyleSheet, ImageBackground, ScrollView } from "react-native";
import {
  Layout,
  Section,
  SectionContent,
  useTheme,
} from "react-native-rapi-ui";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import HomeText from "../components/homeText";
import { setPrayTimes } from "../features/prayerTimeSlice";
import { useGetPrayTimeQuery } from "../services/appApi";
import maccaDayImg from '../../assets/maka-day.jpg'
import maccaNightImg from '../../assets/masjd-night.jpg'
import { Text } from 'react-native-elements'
import * as en from '../lang/en.json'
import * as ar from '../lang/ar.json'
import * as ku from '../lang/ku.json'
import moment from 'moment'
import * as Notifications from 'expo-notifications';
import { requestPermissionsAsync } from "../components/permissions/notifaction";


export default function ({ navigation }) {
  const dispatch = useDispatch()
  const { isDarkmode, setTheme } = useTheme();
  const [Pt, setPt] = useState({})
  const [callToprayer, setCallToPrayer] = useState(null)
  const [lang, setLang] = useState({})
  const [left, setLeft] = useState(false)
  const { data, isError } = useGetPrayTimeQuery()

  const selectedlang = useSelector((state) => state.SelectLang.Lang)

  if (isError) {
    console.log('not fetch')
  }

  const allPrayTimes = data?.results.datetime
  allPrayTimes?.map((datas) => {
    return dispatch(setPrayTimes(datas.times))
  })
  const TheprayTime = useSelector((state) => state.prayerTimeSlice.prayTime)
  useEffect(() => {
    if (TheprayTime !== undefined || null) {

      setPt(TheprayTime)
    }

  }, [TheprayTime]);
  useEffect(() => {
    if (selectedlang == 'en' || null || undefined || '' || {}) {

      setLang(en.screen)
      setLeft(true)
    }
    if (selectedlang == 'ku') {
      setLang(ku.screen)
      setLeft(false)
    }
    if (selectedlang == 'ar') {
      setLang(ar.screen)
      setLeft(false)

    }


  }, [selectedlang]);

  const today = moment(new Date(Date.now())).format('LT')
  const hasa = '3:46 PM'

  requestPermissionsAsync()


  // Second, call the method

  if (today === Pt.Maghrib) {

    Notifications.scheduleNotificationAsync({
      content: {
        title: 'PrayerTime',
        body: "ئێستا کاتی نويژە ",
        sound: 'alert.wav',
      },
      trigger: null,
    });
  }


  return (

    <Layout>
      <ImageBackground source={maccaNightImg}
        style={{
          opacity: isDarkmode ? 1 : 0,
          width: '120%',
          height: '120%',
          position: 'absolute',
          top: 0,
          left: 0
        }} resizeMode="cover" blurRadius={3}
      />



      {/* <ImageBackground source={isDarkmode ? maccaNightImg : maccaDayImg}
        style={styles.image} resizeMode="cover" blurRadius={3}
      /> */}

      <ImageBackground source={maccaDayImg}
        style={{
          opacity: isDarkmode ? 0 : 1,
          width: '120%',
          height: '120%',
          position: 'absolute',
          top: 0,
          left: 0
        }} resizeMode="cover" blurRadius={3}
      />

      <View style={{
        // zIndex: -1,
        position: 'absolute',
        backgroundColor: isDarkmode ? '#02020298' : '#ffffff00',
        height: '200%',
        width: '100%',
        top: 0,

      }} />

      <SafeAreaView style={{ minHeight: '100%' }} shouldRasterizeIOS={true}>

        <ScrollView fadingEdgeLength={100} >

          <View
            style={{
              paddingHorizontal: '5%',
              minHeight: '100%',
            }}
          >



            <View>
              <Text h1 style={{ fontSize: 50, color: isDarkmode ? 'white' : '#020202ad', textAlign: left ? 'left' : 'right' }}>{lang.prayerTimes}</Text>
            </View>
            <Section backgroundColor={isDarkmode ? '#02020225' : '#ffffff2d'} style={{ marginTop: 50 }} >
              <SectionContent>
                <HomeText time={Pt.Fajr} nameTime={lang.Fajr} />
                <HomeText time={Pt.Sunrise} nameTime={lang.Sunrise} />
                <HomeText time={Pt.Dhuhr} nameTime={lang.Dhuhr} />
                <HomeText time={Pt.Asr} nameTime={lang.Asr} />
                <HomeText time={Pt.Maghrib} nameTime={lang.Maghrib} />
                <HomeText time={Pt.Isha} nameTime={lang.Isha} />
                { }
              </SectionContent>
            </Section>
          </View>
        </ScrollView>
      </SafeAreaView>
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