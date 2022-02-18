import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import HomeText from "../components/homeText";
import { setPrayTimes } from "../features/prayerTimeSlice";
import { useGetPrayTimeQuery } from "../services/appApi";

export default function ({ navigation }) {
  const dispatch = useDispatch()
  const { isDarkmode, setTheme } = useTheme();
  const [Pt, setPt] = useState({})
  const { data, isError } = useGetPrayTimeQuery()

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

  console.log(Pt)
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
            <HomeText time={Pt.Fajr} nameTime={'بەیانیان'} />
            <HomeText time={Pt.Sunrise} nameTime={'بەیانیان'} />
            <HomeText time={Pt.Dhuhr} nameTime={'بەیانیان'} />
            <HomeText time={Pt.Asr} nameTime={'بەیانیان'} />
            <HomeText time={Pt.Maghrib} nameTime={'بەیانیان'} />
            <HomeText time={Pt.Isha} nameTime={'بەیانیان'} />

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