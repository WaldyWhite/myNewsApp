import React from 'react';
import { Text, View } from 'react-native';
import { gStyle } from '../styles/styles';

const Main = () => {
    return (
        <View style={gStyle.main} >
            <Text style={gStyle.title}>This is Main</Text>
        </View>

    );
};
export default Main;