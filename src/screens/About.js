import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { Layout, Text } from 'react-native-rapi-ui';
import compImg from '../../assets/compas.png'

export default function ({ navigation }) {

	return (
		<Layout>
			<Text>h</Text>
			<Image source={compImg} />

		</Layout>
	);
}
