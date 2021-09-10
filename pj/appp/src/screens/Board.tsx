import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Dimensions } from 'react-native'
import { NavigationHeader } from '../theme/NavigationHeader';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

export default function Board() {
    const [text1, setText1] = useState("")
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <RNPickerSelect
                        onValueChange={(value) => setText1(value)}
                        value={text1}
                        placeholder={{
                            label: "학과",
                        }}
                        style={a}
                        fixAndroidTouchableBug={true}
                        useNativeAndroidPickerStyle={false}
                        items={[
                            { label: 'Football', value: 'football' },
                            { label: 'Baseball', value: 'baseball' },
                            { label: 'Hockey', value: 'hockey' },
                        ]}
                    />
        </SafeAreaView >
    )
}


const a = StyleSheet.create({
    inputIOS: {
        fontSize: 12,
        height: 35,
        color: '#000000',
        backgroundColor: '#EAEAEA',
        borderRadius: 5,
        padding: 10,
    },
    inputAndroid: {
        fontSize: 12,
        height: 35,
        color: '#000000',
        backgroundColor: '#EAEAEA',
        borderRadius: 5,
        padding: 10
    }
}
)