import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  Layout,
  TopNav,
  title,
  themeColor,
  useTheme,
} from "react-native-rapi-ui";
import { Button } from 'react-native-elements'
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from 'react-redux';
import { setLang } from '../features/SelectLangSlice';

export default function ({ navigation }) {
  const { isDarkmode } = useTheme();
  const [WhatLangIsIt, setWhatLangIsIt] = useState('?')
  const styles = StyleSheet.create({
    container: {
      padding: "5%",
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start',


    },
    button: {
      paddingHorizontal: '10%',
      margin: '3%',
      paddingVertical: '2.5%',
      borderRadius: 15,
      backgroundColor: isDarkmode ? '#ecececc0' : '#030303c0',



    },



  })



  const dispatch = useDispatch()
  const SL = useSelector((state) => state.SelectLang.Lang)
  const setLnagHandler = (lt) => {
    dispatch(setLang(lt))
    navigation.goBack()
  }
  useEffect(() => {

    if (SL == 'en') {
      setWhatLangIsIt('EN')
    }
    if (SL == 'ar') {
      setWhatLangIsIt('AR')
    }
    if (SL == 'ku') {
      setWhatLangIsIt('KU')
    }

  }, [])


  return (
    <Layout>
      <TopNav
        middleContent="Select language"
        borderColor="#ffffff00"
        backgroundColor="#ffffff00"
        rightTextStyle={{ color: 'gray', fontSize: 13 }}
        rightContent={
          WhatLangIsIt
        }
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : "#191921"} />
        }
        leftAction={() => navigation.goBack()}
      />

      {/* This title using ubuntu font */}
      <Button buttonStyle={styles.button} titleStyle={{ color: isDarkmode ? 'black' : 'white' }}
        iconRight={true}
        iconPosition={'right'}
        icon={{
          name: 'language',
          type: 'font-awesome',
          size: 20,
          color: isDarkmode ? 'black' : 'white',
        }} title='english' onPress={() => setLnagHandler('en')} />
      <Button buttonStyle={styles.button} titleStyle={{ color: isDarkmode ? 'black' : 'white' }}
        iconRight={true}
        iconPosition={'right'}
        icon={{
          name: 'language',
          type: 'font-awesome',
          size: 20,
          color: isDarkmode ? 'black' : 'white',
        }} title='arabic' onPress={() => setLnagHandler('ar')} />
      <Button buttonStyle={styles.button} titleStyle={{ color: isDarkmode ? 'black' : 'white' }}
        iconRight={true}
        iconPosition={'right'}
        icon={{
          name: 'language',
          type: 'font-awesome',
          size: 20,
          color: isDarkmode ? 'black' : 'white',
        }} title='kurdish' onPress={() => setLnagHandler('ku')} />



    </Layout>
  );
}
