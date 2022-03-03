import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Layout, useTheme } from 'react-native-rapi-ui';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-elements'
import * as en from '../lang/en.json'
import * as ar from '../lang/ar.json'
import * as ku from '../lang/ku.json'
import { useSelector } from 'react-redux';
export default function ({ navigation }) {
	const { isDarkmode, setTheme } = useTheme()
	const [lang, setLang] = useState({})


	const styles = StyleSheet.create({
		container: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-evenly',
			// alignItems: 'center',



		},
		button: {
			padding: '5%',
			marginTop: '10%',
			borderRadius: 20,

			backgroundColor: isDarkmode ? '#ecececc0' : '#030303c0',



		},
		btnCon: {
			shadowColor: isDarkmode ? '#ffffff' : '#000000',
			shadowOffset: { width: 0, height: 0 },
			shadowOpacity: 0.5,
			shadowRadius: 10,
			marginTop: '5%',
			elevation: 2,
		},
		scrollView: {
			minHeight: '100%'
		},
	})
	const selectedlang = useSelector((state) => state.SelectLang.Lang)

	useEffect(() => {
		if (selectedlang == 'en' || null || undefined || '' || {}) {

			setLang(en.screen)
		}
		if (selectedlang == 'ku') {
			setLang(ku.screen)
		}
		if (selectedlang == 'ar') {
			setLang(ar.screen)

		}


	}, [selectedlang]);
	const darkModeHandler = () => {
		isDarkmode ? setTheme('light') : setTheme('dark')
	}
	return (
		<Layout>
			<SafeAreaView>
				<ScrollView style={styles.scrollView}>

					<View style={styles.container}>
						<View style={styles.btnCon}>

							<Button touchSoundDisabled={false} buttonStyle={styles.button}
								titleStyle={{ color: isDarkmode ? 'black' : 'white' }} iconPosition={'top'} icon={{
									name: "language",
									size: 65,
									type: 'font-awesome',
									color: isDarkmode ? 'black' : 'white',


								}} title={lang.lang} onPress={() => navigation.navigate('SecondScreen')} />
						</View>
						<View style={styles.btnCon}>

							<Button buttonStyle={styles.button} titleStyle={{ color: isDarkmode ? 'black' : 'white' }} iconPosition={'top'} icon={{
								name: isDarkmode ? 'sun' : 'moon',
								size: 65,
								type: 'font-awesome-5',
								color: isDarkmode ? 'black' : 'white',
							}}

								title={isDarkmode ? lang.light : lang.dark} onPress={darkModeHandler} />
						</View>

					</View>

				</ScrollView>
			</SafeAreaView>
		</Layout >
	);
}
