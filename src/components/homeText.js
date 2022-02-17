import { View, Text, Platform } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'react-native-rapi-ui';

const HomeText = (props, { navigation }) => {
    const { isDarkmode } = useTheme();

    return (
        <View style={{
            backgroundColor: isDarkmode ? '#02020286' : '#ffffff80', padding: 10,
            borderRadius: 5, marginVertical: 5, display: 'flex', justifyContent: 'space-between'
            , flexDirection: 'row'
        }}>
            <Text style={{ textAlign: 'right', color: !isDarkmode ? '#02020286' : '#fffffffb', fontSize: 25 }}>{props.time}</Text>
            <Text style={{ textAlign: 'right', color: !isDarkmode ? '#02020286' : '#fffffff8', fontSize: 25 }}>{props.nameTime}</Text>
        </View>
    );
};

export default HomeText;
