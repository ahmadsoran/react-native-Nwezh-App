import { View, Platform } from 'react-native';
import { Text } from 'react-native-elements'
import React, { useState, useEffect } from 'react';
import { useTheme } from 'react-native-rapi-ui';
import { useSelector } from 'react-redux';

const HomeText = (props, { navigation }) => {
    const { isDarkmode } = useTheme();
    const selectedlang = useSelector((state) => state.SelectLang.Lang)
    const [left, setLeft] = useState(false)
    useEffect(() => {

        if (selectedlang == 'en' || null || undefined || '' || {}) {
            setLeft(true)

        }
        if (selectedlang === 'ku') {
            setLeft(false)
        }
        if (selectedlang === 'ar') {
            setLeft(false)
        }




    }, [selectedlang])
    return (
        <View style={{
            backgroundColor: isDarkmode ? '#02020286' : '#ffffff80', padding: 10,
            borderRadius: 5, marginVertical: 5, display: 'flex', justifyContent: 'space-between'
            , flexDirection: left ? 'row-reverse' : 'row'
        }}>
            <Text h4 style={{ textAlign: left ? 'left' : 'right', color: !isDarkmode ? '#02020286' : '#fffffffb', fontSize: 25 }}>{props.time}</Text>
            <Text h4 style={{ textAlign: left ? 'left' : 'right', color: !isDarkmode ? '#02020286' : '#fffffff8', fontSize: 25 }}>{props.nameTime}</Text>
        </View>
    );
};

export default HomeText;
