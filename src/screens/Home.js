import React from "react";
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

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  return (

    <Layout>
      <ImageBackground source={{ uri: 'https://muslimmatters.org/wp-content/uploads/shutterstock_168576587.jpg' }}
        style={styles.image} resizeMode="cover" blurRadius={3}
      />

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
            <HomeText time={'5:00'} nameTime={'بەیانیان'} />
            <HomeText time={'5:00'} nameTime={'بەیانیان'} />
            <HomeText time={'5:00'} nameTime={'بەیانیان'} />
            <HomeText time={'5:00'} nameTime={'بەیانیان'} />
            <HomeText time={'5:00'} nameTime={'بەیانیان'} />
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