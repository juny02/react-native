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
import { NavigationHeader } from '../theme/NavigationHeader';

export default function Friend() {
    const [text1, setText1] = useState("")
    const [text2, setText2] = useState("")

    return (
        <View style={{ flex: 1 }}>
            <NavigationHeader title={'친구 찾기'} viewStyle={styles.header} titleStyle={styles.headerText}/>
                    <View style={{flexDirection: 'row', marginTop: 5}}>
                        <View style={{flex: 6, flexDirection: 'column'}}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flex: 2, margin: 10}}>
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
                                    /></View>
                                <View style={{flex: 1, margin: 10, marginLeft: 0}}>
                                    <RNPickerSelect
                                        onValueChange={(value) => setText2(value)}
                                        value={text2}
                                        placeholder={{
                                            label: "성별",
                                        }}
                                        style={b}
                                        fixAndroidTouchableBug={true}
                                        useNativeAndroidPickerStyle={false}
                                        items={[
                                            { label: '여자', value: '여' },
                                            { label: '남자', value: '남' },
                                        ]}
                                    /></View>
                                </View>
                            <View style={{flexDirection: 'row'}}>
                                <View style={[styles.text]}><Text>학번 범위</Text></View>
                            </View>
                        </View>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin: 10, marginLeft: 0}}>
                            <Icon name="magnify" size={25} color='black' onPress={() => console.log(3)} />
                        </View>
                </View>
                <View style={{flex: 1, flexDirection: 'column', margin: 10, borderWidth: 1}}>
            
                </View>
            </View>
    );
};


const a = StyleSheet.create({
    inputIOS: {
        fontSize: 12,
        height: 35,
        color: '#000000',
        backgroundColor: '#EAEAEA',
        borderRadius: 5,
        padding: 10
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

const b = StyleSheet.create({
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
        padding: 10,
    }
}
)

const styles=StyleSheet.create({
    header: {
        backgroundColor: '#86A5E1',
        height: 80
    },
    headerText: {
        fontSize: 17, 
        fontWeight: "400",
        marginBottom: 10
    },
    text: {
        borderRadius: 5, 
        margin: 10, 
        marginTop: 0, 
        height: 35,
        backgroundColor: '#EAEAEA',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
})
